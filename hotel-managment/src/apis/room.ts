import { Room } from "../types/room";
import { callApi } from "./callAPI";

export const createRoom = async (
    data: {
        name?: string,
        description?: string,
        status?: boolean | string | null,
        price?: number,
        max_user?: number,
        hotel_id?: number
    }
) => {
    return await callApi<Room>("room/create-room", 'post', data)
}

export const getAllRoom = async () => {
    return await callApi<Room[]>("room/get-all", 'get')
}

export const getRoomByHotelId = async (
    data: {
        hotel_id: number
    }
) => {
    return await callApi<Room[]>("room/get-all", 'get', data)
}

export const searchRoom = async (
    data: {
        name?: string 
        category?: string
    }
) => {
    return await callApi<Room[]>("room/search-room", 'post', data)
}