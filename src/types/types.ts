
export interface IUser {
    id?: string,
    name: string,
    surname: string,
    nickname: string,
    email: string,
    password?: string,
    dfa_amount?: number
}

export type ICategory = 'Ценная бумаги' | 'Контракт' | 'Договор' | 'Другое'
export type IConfidence = 'Низкое' | 'Высокое' | 'Не определено'
export type IPayment = 'Деньги' | 'ЦФА' | 'Все'
export type ISortBy = 'Дата выпуска' | 'Цена'

export interface IDfa {
    id?: string,
    title: string,
    image?: string,
    description?: string,
    initial_price: number,
    price: number,
    category: ICategory,
    confidence?: IConfidence,
    payment: IPayment,
    created_at: string,
    owner: IUser,
    created_by?: IUser,
}