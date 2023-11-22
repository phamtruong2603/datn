export interface Bill {
    id: Number,
    name: string
    price: Number
    count_user: Number
    hotel_id?: Number
    room_id?: Number
    booking_id?: number
    date: String
    status?: Boolean | null
}