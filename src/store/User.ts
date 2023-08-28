import {makeAutoObservable, runInAction} from "mobx";
import {login, registration, logout, refresh_token} from "../api/api"
import {IUser} from "../types/types";
import Cookies from 'universal-cookie';

class User {
    private _isAuth: boolean
    private _name: string
    private _surname: string
    private _nickname: string
    private _email: string

    constructor() {
        makeAutoObservable(this)
        this._isAuth = false
        this._name = ""
        this._surname = ""
        this._nickname = ""
        this._email = ""
    }

    private setData({name, surname, nickname, email}: IUser) {
        this._name = name
        this._surname = surname
        this._nickname = nickname
        this._email = email
        this._isAuth = true
    }

    get isAuth() {
        return this._isAuth
    }

    get nickname() {
        return this._nickname
    }

    get name() {
        return this._name
    }

    get surname() {
        return this._surname
    }

    get email() {
        return this._email
    }

    refresh() {
        const cookies = new Cookies();
        refresh_token().then(
            val => {
                this.setData(JSON.parse(localStorage.getItem('user_info') || "{}"))
                console.log(this._isAuth)
            },
            err => {
                this._isAuth = false
                localStorage.removeItem('access_token')
                cookies.remove('refresh_token')
            }
        )
    }

    private clearData() {
        this._isAuth = false
        this._name = ""
        this._surname = ""
        this._nickname = ""
        this._email = ""
    }

    login(email: string, password: string) {
        login({email, password}).then(
            user_info => {

                this._name = user_info.name
                this._surname = user_info.surname
                this._nickname = user_info.nickname
                this._email = user_info.email
                this._isAuth = true

                localStorage.setItem('user_info', JSON.stringify(user_info))
            },
            err => {
            }
        )
    }

    registration(user: IUser) {
        this._name = user.name
        this._surname = user.surname
        this._nickname = user.nickname
        this._email = user.email
        this._isAuth = true
        registration({...user}).then(
            data => {
                localStorage.setItem('user_info', JSON.stringify(user))
            },
            err => {
                this.clearData()
            }
        )
    }

    logout() {
        logout().then(
            data => {
                this.clearData()
                localStorage.removeItem('user_info')
            },
            err => {
                localStorage.removeItem('access_token')
                const cookies = new Cookies();
                cookies.remove('refresh_token')
                throw new Error('Не удалось выйти из аккаунта')
            }
        )
    }

}

export default new User()