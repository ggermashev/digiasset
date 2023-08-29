import {makeAutoObservable} from "mobx";
import {ICategory, IConfidence, IDfa, IPayment, ISortBy} from "../types/types";
import {getDfa, getDfaByUser} from "../api/api";

class Dfa {

    _data: IDfa[]

    constructor() {
        makeAutoObservable(this)
        this._data = []
    }

    get data() {
        return this._data
    }

    async loadData({category, confidence, payment, sortBy, limit=12, offset=0}: {category?: ICategory | 'Все', confidence?: IConfidence | 'Все', payment?: IPayment | 'Все', sortBy?: ISortBy | 'Нет',limit?: number, offset?: number}) {
        try {
            const data = await getDfa({category, confidence, payment, sortBy, limit, offset})
            this._data = [...data.assets]
        } catch (e) {
            console.log(e)
        }

    }

    async addData({category, confidence, payment, sortBy, limit=12, offset=0}: {category?: ICategory | 'Все', confidence?: IConfidence | 'Все', payment?: IPayment | 'Все', sortBy?: ISortBy | 'Нет',limit?: number, offset?: number}) {
        try {
            const data = await getDfa({category, confidence, payment, sortBy, limit, offset})
            this._data = [...this._data,...data.assets]
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