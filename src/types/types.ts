
export interface IUser {
    id?: string,
    name: string,
    surname: string,
    nickname: string,
    email: string,
    password?: string,
    dfa_amount?: number
}

export interface IDfa {
    title: string,
    image?: string,
    description?: string,
    initial_price: number,
    price: number,
    category: 'Ценная бумаги' | 'Контракт' | 'Договор' | 'Другое',
    confidence: 'Низкое' | 'Высокое' | 'Не определено',
    payment: 'Деньги' | 'ЦФА' | 'Все',
    created_at: string,
    owner: IUser
}