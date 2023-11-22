import { callApi } from "./callAPI"

export const createBooking = async(
    data: {

    }
) => {
    return await callApi("booking/create-booking", "post", data)
}