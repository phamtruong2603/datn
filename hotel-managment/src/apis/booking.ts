import { Booking } from "../types/booking"
import { callApi } from "./callAPI"

export const createBooking = async(
    data: {

    }
) => {
    return await callApi<Booking>("booking/create-booking", "post", data)
}

export const getBookingById = async(
    data: {
        id: number
    }
) => {
    return await callApi<Booking[]>("booking/get-booking-by-id", "post", data)
}