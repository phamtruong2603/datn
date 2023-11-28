export interface Booking {
    id: Number,
    name: string,
    count_user?: Number
    description?: string
    rental_period?: string
    status?: Boolean | null
    room_id?: number
    verification?: string
    discount?: string,
    received_date?: string,
    pay_day?: string,
}