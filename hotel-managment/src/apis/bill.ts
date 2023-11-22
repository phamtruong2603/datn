import { Bill } from "../types/bill"
import { callApi } from "./callAPI"

export const getBillById = async(
    data: {
        id: number
    }
) => {
    return await callApi<Bill>("bill/get-bill-by-id", "post", data)
}