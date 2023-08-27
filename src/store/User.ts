import {makeAutoObservable} from "mobx";
import {login, registration, logout, refresh_token} from "../api/api"
import {IUser} from "../types/types";
import Cookies from 'universal-cookie';

class User {
    private _isAuth: boolean
    private name: string
    private surname: string
    private nickname: string
    private email: string

    constructor() {
        makeAutoObservable(this)
        this._isAuth = false
        this.name = ""
        this.surname = ""
        this.nickname = ""
        this.email = ""
    }

    get isAuth() {
        return this._isAuth
    }

    async refresh() {
        const cookies = new Cookies();
        const status = await refresh_token()
        if (status === 200) {
            this._isAuth = true
            return true
        } else {
            this._isAuth = false
            localStorage.removeItem('access_token')
            cookies.remove('refresh_token')
            throw new Error('Аутентификация не удалась')
        }
    }

    private clearData() {
        this._isAuth = false
        this.name = ""
        this.surname = ""
        this.nickname = ""
        this.email = ""
    }

    async login(email: string, password: string) {
        const user_info = await login({email, password})
        if (user_info) {
            this.name = user_info.name
            this.surname = user_info.surname
            this.nickname = user_info.nickname
            this.email = user_info.email
            this._isAuth = true
            return true
        } else {
            throw new Error('Ошибка входа')
        }
    }

    async registration(user: IUser) {
        this.name = user.name
        this.surname = user.surname
        this.nickname = user.nickname
        this.email = user.email
        this._isAuth = true
        const data = await registration({...user})
        if (!data) {
            this.clearData()
            throw new Error('ошибка регистрации')
        } else {
            return true
        }
    }

    async logout() {
        const data = await logout()
        if (data) {
            this.clearData()
            return true
        } else {
            throw new Error('Не удалось выйти из аккаунта')
        }
    }

}

export default new User()