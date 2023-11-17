export interface Booking {
    id: Number,
    count_user: Number
    description: string
    rental_period: string
    status?: Boolean | null
    hotel_id?: number
    room_id?: number
}