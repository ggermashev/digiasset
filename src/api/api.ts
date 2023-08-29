import Cookies from 'universal-cookie';
import {ICategory, IConfidence, IDfa, IPayment, ISortBy, IUser} from "../types/types";

async function login({email, password}: { email: string, password: string }) {
    const response = await fetch('http://91.200.84.58:50055/api/login', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email, password})
    })
    if (!response.ok) {
        throw new Error('Ошибка входа')
    }
    const data: { access_token: string, refresh_token: string, user_info: IUser } = await response.json()
    localStorage.setItem('access_token', data.access_token)
    const cookies = new Cookies();
    cookies.set('refresh_token', data.refresh_token, {path: '/'});
    return data.user_info
}

async function registration({name, surname, nickname, email, password}:
                                { name: string, surname: string, nickname: string, email: string, password?: string }) {
    const response = await fetch('http://91.200.84.58:50055/api/signup', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({name, surname, nickname, email, password})
    })
    if (!response.ok) {
        throw new Error('Ошибка регистрации')
    }
    const data: { access_token: string, refresh_token: string } = await response.json()
    localStorage.setItem('access_token', data.access_token)
    const cookies = new Cookies();
    cookies.set('refresh_token', data.refresh_token, {path: '/'});
    return data
}

async function logout() {
    let response = await fetch('http://91.200.84.58:50055/api/logout', {
        method: 'POST',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('access_token')}`,
            "Content-Type": "application/json"
        }
    })
    localStorage.removeItem('access_token')
    const cookies = new Cookies();
    cookies.remove('refresh_token')
    const data = await response.json()
    return data
}

async function refresh_token() {
    const cookies = new Cookies();
    const response = await fetch('http://91.200.84.58:50055/api/refresh', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({refresh_token: cookies.get('refresh_token')})
    })
    if (!response.ok) {
        throw new Error('Ошибка обновления токена')
    } else {
        const data = await response.json()
        localStorage.setItem('access_token', data.access_token)
        cookies.set('refresh_token', data.refresh_token, {path: '/'});
        return data
    }
}

async function getDfa(
    {category, confidence, payment, sortBy, limit = 6, offset = 0}:
        { category?: ICategory | 'Все', confidence?: IConfidence | 'Все', payment?: IPayment | 'Все', sortBy?: ISortBy | 'Нет', limit?: number, offset?: number }) {
    const sorts = {'Дата выпуска': 'datetime', 'Цена': 'price'}
    let sort_by: any
    if (sortBy === 'Дата выпуска') {
        sort_by = 'datetime'
    }
    if (sortBy === 'Цена') {
        sort_by = 'price'
    }
    console.log('api limit:' + limit)
    console.log('api offset: '+ offset)
    let response = await fetch(`http://91.200.84.58:50055/api/assets/published?` +
        `${category !== 'Все' ? `category=${category}&` : ''}${confidence !== 'Все' ? `confidence=${confidence}&` : ''}${payment !== 'Все' ? `payment=${payment}&` : ''}${sortBy !== 'Нет' ? `sort_by=${sort_by}&` : ''}limit=${limit}&offset=${offset}`, {
        headers: {
            "Content-Type": "application/json",
            'authorization': `Bearer ${localStorage.getItem('access_token')}`,
        },
    })
    if (!response.ok) {
        await refresh_token()
        response = await fetch(`http://91.200.84.58:50055/api/assets/published?` +
            `${category !== 'Все' ? `category=${category}&` : ''}${confidence !== 'Все' ? `confidence=${confidence}&` : ''}${payment !== 'Все' ? `payment=${payment}&` : ''}${sortBy !== 'Нет' ? `sort_by=${sortBy}&` : ''}limit=${limit}&offset=${offset}`, {
            headers: {
                "Content-Type": "application/json",
                'authorization': `Bearer ${localStorage.getItem('access_token')}`,
            },
        })
    }
    if (!response.ok) {
        throw new Error('Ошибка получения ЦФА')
    }
    const data = await response.json()
    console.log(data.assets.length)
    return data
}

async function publishDfa(dfa_id: string, price: string) {
    let response = await fetch(`http://91.200.84.58:50055/api/assets/publish`, {
        headers: {
            "Content-Type": "application/json",
            'authorization': `Bearer ${localStorage.getItem('access_token')}`,
        },
        method: 'POST',
        body: JSON.stringify({id: dfa_id, price: price})
    })
    if (!response.ok) {
        await refresh_token()
        response = await fetch(`http://91.200.84.58:50055/api/assets/publish`, {
            headers: {
                "Content-Type": "application/json",
                'authorization': `Bearer ${localStorage.getItem('access_token')}`,
            },
            method: 'POST',
            body: JSON.stringify({id: dfa_id, price: price})
        })
    }
    if (!response.ok) {
        throw new Error('Ошибка публикации ЦФА')
    }
    const data = await response.json()
    return data
}

async function unPublishDfa(dfa_id: string) {
    let response = await fetch(`http://91.200.84.58:50055/api/assets/remove`, {
        headers: {
            "Content-Type": "application/json",
            'authorization': `Bearer ${localStorage.getItem('access_token')}`,
        },
        method: 'POST',
        body: JSON.stringify({id: dfa_id})
    })
    if (!response.ok) {
        await refresh_token()
        response = await fetch(`http://91.200.84.58:50055/api/assets/remove`, {
            headers: {
                "Content-Type": "application/json",
                'authorization': `Bearer ${localStorage.getItem('access_token')}`,
            },
            method: 'POST',
            body: JSON.stringify({id: dfa_id})
        })
    }
    if (!response.ok) {
        throw new Error('Ошибка публикации ЦФА')
    }
    const data = await response.json()
    return data
}

async function getDfaById(id: string) {
    let response = await fetch(`http://91.200.84.58:50055/api/assets?id=${id}`, {
        headers: {
            "Content-Type": "application/json",
            'authorization': `Bearer ${localStorage.getItem('access_token')}`,
        },
    })
    if (!response.ok) {
        await refresh_token()
        response = await fetch(`http://91.200.84.58:50055/api/assets?id=${id}`, {
            headers: {
                "Content-Type": "application/json",
                'authorization': `Bearer ${localStorage.getItem('access_token')}`,
            },
        })
    }
    if (!response.ok) {
        throw new Error('Ошибка получения ЦФА')
    }
    const data = await response.json()
    return data
}

async function createDfa({name, category, payment, confidence, price, description}: IDfa) {
    console.log(price)
    let response = await fetch(`http://91.200.84.58:50055/api/assets/create`, {
        headers: {
            "Content-Type": "application/json",
            'authorization': `Bearer ${localStorage.getItem('access_token')}`,
        },
        method: 'POST',
        body: JSON.stringify({
            name: name,
            category: category,
            payment: payment,
            confidence: confidence,
            price: price,
            description: description
        })
    })
    if (!response.ok) {
        await refresh_token()
        response = await fetch(`http://91.200.84.58:50055/api/assets/create`, {
            headers: {
                "Content-Type": "application/json",
                'authorization': `Bearer ${localStorage.getItem('access_token')}`,
            },
            method: 'POST',
            body: JSON.stringify({
                name: name,
                category: category,
                payment: payment,
                confidence: confidence,
                price: price,
                description: description
            })
        })
    }
    if (!response.ok) {
        throw new Error('Ошибка создание ЦФА')
    }
    const data = await response.json()
    return data
}

async function getDfaByUser() {
    let response = await fetch(`http://91.200.84.58:50055/api/user/assets`, {
        headers: {
            "Content-Type": "application/json",
            'authorization': `Bearer ${localStorage.getItem('access_token')}`,
        },
    })
    if (!response.ok) {
        await refresh_token()
        response = await fetch(`http://91.200.84.58:50055/api/user/assets`, {
            headers: {
                "Content-Type": "application/json",
                'authorization': `Bearer ${localStorage.getItem('access_token')}`,
            },
        })
    }
    if (!response.ok) {
        throw new Error('Ошибка создание ЦФА')
    }
    const data = await response.json()
    return data
}

async function buyDfa(dfaId: string) {
    let response = await fetch(`http://91.200.84.58:50055/api/assets/buy`, {
        headers: {
            "Content-Type": "application/json",
            'authorization': `Bearer ${localStorage.getItem('access_token')}`,
        },
        method: 'POST',
        body: JSON.stringify({id: dfaId})
    })
    if (!response.ok) {
        response = await fetch(`http://91.200.84.58:50055/api/assets/buy`, {
            headers: {
                "Content-Type": "application/json",
                'authorization': `Bearer ${localStorage.getItem('access_token')}`,
            },
            method: 'POST',
            body: JSON.stringify({id: dfaId})
        })
    }
    if (!response.ok) {
        throw new Error('Ошибка покупки ЦФА')
    }
    const data = await response.json()
    return data
}


export {login, registration, logout, refresh_token, getDfa, getDfaById, createDfa, getDfaByUser, buyDfa, publishDfa, unPublishDfa}