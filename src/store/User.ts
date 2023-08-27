import {makeAutoObservable} from "mobx";
import {login, registration, logout} from "../api/api"
import {IUser} from "../types/types";

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

    private clearData() {
        this._isAuth = false
        this.name = ""
        this.surname = ""
        this.nickname = ""
        this.email = ""
    }

    login(email: string, password: string) {
        login({email, password}).then(user_info => {
            if (user_info) {
                this.name = user_info.name
                this.surname = user_info.surname
                this.nickname = user_info.nickname
                this.email = user_info.email
                this._isAuth = true
            }
        })
    }

    registration(user: IUser) {
        this.name = user.name
        this.surname = user.surname
        this.nickname = user.nickname
        this.email = user.email
        this._isAuth = true
        registration({...user}).then(
            data => {
                if (data) {
                    this.clearData()
                }
            },
            err => {
                console.log(err)
            }
        )
    }

    logout() {
        logout().then(ok => {
            this.clearData()
        })
    }

}

export default new User()