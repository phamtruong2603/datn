import { Booking } from "../types/booking"
import { callApi } from "./callAPI"
import { IListBooking } from "../manager/BookingConfirmation/BookingConfirmation"

export const createBooking = async (
    data: {
        name: string,
        description: string,
        discount: string,
        received_date: string,
        pay_day: string,
        count_user: number,
        status: boolean,
        room_id: number,
        hotel_id: number,
        users: {
            avatar?: string
            first_name?: string
            last_name?: string
            mobile?: string
            sex?: string
            cmnd?: string
            role: string
            address?: string
            email: string
            password: string
        }[]
    }
) => {
    return await callApi<Booking>("booking/create-booking", "post", data)
}

export const getBookingById = async (
    data: {
        id: number
    }
) => {
    return await callApi<Booking[]>("booking/get-booking-by-id", "post", data)
}

export const getAllBooking = async () => {
    return await callApi<IListBooking[]>("booking/get-all", "get")
}

export const confirmBooking = async (
    data: {
        id: number
    }
) => {
    return await callApi<IListBooking[]>("booking/confirm-booking", "get", data)
}

export const getBookingByEmail = async (
    data: {
        email: string
    }
) => {
    return await callApi<IListBooking[]>("booking/get-booking-by-email", "get", data)
}