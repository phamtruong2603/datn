import axios from "axios";
// import { API_URL } from "../config/config";

const API_URL = 'http://localhost:3001'

export const callApi = async (URL: string, method:string = 'get', data: any, ContentType: string = 'application/json') => {
    try {
        const token = localStorage.getItem('token');
        let dataQuery = { data: data };
        if (method === 'get' || method === 'GET') {
            // dataQuery = { params: data };
        }
        const response = await axios({
            method: method,
            url: `${API_URL}/${URL}`,
            ...dataQuery,
            headers: {
                'Content-Type': ContentType,
                "Authorization": `bearer ${token}`
            }
        });
        console.log(response)
        return response.data
    } catch (error) {
        console.log(error)
    }
}