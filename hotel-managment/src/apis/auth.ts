import { User } from "../types/user";
import { callApi } from "./callAPI";

export const login = async (
    data: {
        email?: string,
        password?: string
    }
) => {
    return await callApi<User>('auth/login', 'post', data)
}

export const loginByToken = async () => {
    return await callApi<User>('auth/verify-token',"get")
}