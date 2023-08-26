import {makeAutoObservable} from "mobx";

class User {
    private _isAuth: boolean
    private nickname: string

    constructor() {
        makeAutoObservable(this)
        this._isAuth = false
        this.nickname = ""
    }

    get isAuth() {
        return this._isAuth
    }

    private clearData() {
        this._isAuth = false
        this.nickname = ""
    }

    login(login: string, password: string) {
        this._isAuth = true
        this.nickname = "nickname"
    }

    logout() {
        this.clearData()
    }

}

export default new User()