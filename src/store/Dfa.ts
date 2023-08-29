import {makeAutoObservable} from "mobx";
import {ICategory, IConfidence, IDfa, IPayment, ISortBy} from "../types/types";
import {getDfa, getDfaByUser} from "../api/api";

class Dfa {

    _data: IDfa[] | undefined

    constructor() {
        makeAutoObservable(this)
        this._data = undefined
    }

    get data() {
        return this._data
    }

    async loadData({category, confidence, payment, sortBy, limit=12, offset=0}: {category?: ICategory, confidence?: IConfidence, payment?: IPayment, sortBy?: ISortBy,limit?: number, offset?: number}) {
        try {
            const data = await getDfa({})
            console.log(data)
            this._data = [...data.assets]
        } catch (e) {
            console.log(e)
        }

    }

    async loadByUser() {
        try {
            const data = await getDfaByUser()
            console.log(data)
            this._data = [...data.assets]
        } catch (e) {
            console.log(e)
        }

    }

    dropData() {
        this._data = []
    }

}

export default new Dfa()