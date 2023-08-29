import {makeAutoObservable} from "mobx";
import {ICategory, IConfidence, IDfa, IPayment, ISortBy} from "../types/types";

class Dfa {

    _data: IDfa[]

    constructor() {
        makeAutoObservable(this)
        this._data = []
    }

    get data() {
        return this._data
    }

    loadData({category, confidence, payment, sortBy, limit=12, offset=0}: {category?: ICategory, confidence?: IConfidence, payment?: IPayment, sortBy?: ISortBy,limit: number, offset: number}) {

    }

    dropData() {
        this._data = []
    }

}

export default new Dfa()