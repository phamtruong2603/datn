export interface Bill {
    key: Number
    id: Number,
    name: string
    price: Number
    count_user: Number
    hotel_id?: Number
    room_id?: Number
    date: String
    status?: Boolean | null
}