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
    {category, confidence, payment, sortBy, limit = 12, offset = 0}:
        { category?: ICategory, confidence?: IConfidence, payment?: IPayment, sortBy?: ISortBy, limit: number, offset: number }) {
    let response = await fetch(`http://91.200.84.58:50055/api/dfa?` +
        `${category && `category=${category}`}&${confidence && `confidence=${confidence}`}&${payment && `payment=${payment}`}&${sortBy && `sort_by=${sortBy}`}&
        limit=${limit}&offset=${offset}`, {
        headers: {
            "Content-Type": "application/json",
            'authorization': `Bearer ${localStorage.getItem('access_token')}`,
        },
    })
    if (!response.ok) {
        await refresh_token()
        response = await fetch('http://91.200.84.58:50055/api/dfa', {
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

async function getDfaById(id: string) {
    let response = await fetch(`http://91.200.84.58:50055/api/dfa/${id}`, {
        headers: {
            "Content-Type": "application/json",
            'authorization': `Bearer ${localStorage.getItem('access_token')}`,
        },
    })
    if (!response.ok) {
        await refresh_token()
        response = await fetch(`http://91.200.84.58:50055/api/dfa/${id}`, {
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

async function createDfa(dfa: IDfa) {
    let response = await fetch(`http://91.200.84.58:50055/api/dfa/`, {
        headers: {
            "Content-Type": "application/json",
            'authorization': `Bearer ${localStorage.getItem('access_token')}`,
        },
        method: 'POST',
        body: JSON.stringify(dfa)
    })
    if (!response.ok) {
        await refresh_token()
        response = await fetch(`http://91.200.84.58:50055/api/dfa/`, {
            headers: {
                "Content-Type": "application/json",
                'authorization': `Bearer ${localStorage.getItem('access_token')}`,
            },
            method: 'POST',
            body: JSON.stringify(dfa)
        })
    }
    if (!response.ok) {
        throw new Error('Ошибка создание ЦФА')
    }
    const data = await response.json()
    return data
}

async function getDfaByUser(userId: string) {
    let response = await fetch(`http://91.200.84.58:50055/api/dfa/user/${userId}`, {
        headers: {
            "Content-Type": "application/json",
            'authorization': `Bearer ${localStorage.getItem('access_token')}`,
        },
    })
    if (!response.ok) {
        await refresh_token()
        response = await fetch(`http://91.200.84.58:50055/api/dfa/user/${userId}`, {
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

async function buyDfa(buyerId: string, dfaId: string) {
    let response = await fetch(`http://91.200.84.58:50055/api/buy_dfa`, {
        headers: {
            "Content-Type": "application/json",
            'authorization': `Bearer ${localStorage.getItem('access_token')}`,
        },
        method: 'POST',
        body: JSON.stringify({buyer_id: buyerId, dfa_id: dfaId})
    })
    if (!response.ok) {
        response = await fetch(`http://91.200.84.58:50055/api/by_dfa`, {
            headers: {
                "Content-Type": "application/json",
                'authorization': `Bearer ${localStorage.getItem('access_token')}`,
            },
            method: 'POST',
            body: JSON.stringify({buyer_id: buyerId, dfa_id: dfaId})
        })
    }
    if (!response.ok) {
        throw new Error('Ошибка покупки ЦФА')
    }
    const data = await response.json()
    return data
}

async function publishDfa(dfaId: string, price: number, isPublished: boolean) {
    let response = await fetch(`http://91.200.84.58:50055/api/publish_dfa/`, {
        headers: {
            "Content-Type": "application/json",
            'authorization': `Bearer ${localStorage.getItem('access_token')}`,
        },
        method: 'POST',
        body: JSON.stringify({dfa_id: dfaId, price, is_published: isPublished})
    })
    if (!response.ok) {
        await refresh_token()
        response = await fetch(`http://91.200.84.58:50055/api/publish_dfa/`, {
            headers: {
                "Content-Type": "application/json",
                'authorization': `Bearer ${localStorage.getItem('access_token')}`,
            },
            method: 'POST',
            body: JSON.stringify({dfa_id: dfaId, price})
        })
    }
    if (!response.ok) {
        throw new Error('Ошибка публикации ЦФА')
    }
    const data = await response.json()
    return data
}

export {login, registration, logout, refresh_token, getDfa}