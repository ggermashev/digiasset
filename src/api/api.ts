import Cookies from 'universal-cookie';
import {IUser} from "../types/types";

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


export {login, registration, logout, refresh_token}