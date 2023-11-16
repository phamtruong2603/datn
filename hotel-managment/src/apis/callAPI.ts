import axios, { AxiosResponse } from "axios";
// import { API_URL } from "../config/config";

const API_URL = 'http://localhost:3001'

interface ApiCallResponse<T> {
    data: T;
}

export const callApi = async <T>(
    URL: string,
    method: string = 'get',
    data: Record<string, any> = {},
    ContentType: string = 'application/json'
): Promise<T | undefined> => {
    try {
        const token = localStorage.getItem('token');
        let requestData = { data: data };

        if (method.toLowerCase() === 'get') {
            // requestData = { params: data };
        }

        const response: AxiosResponse<ApiCallResponse<T>> = await axios({
            method: method,
            url: `${API_URL}/${URL}`,
            ...requestData,
            headers: {
                'Content-Type': ContentType,
                Authorization: `Bearer ${token}`,
            },
        });

        console.log(response.data);
        return response.data.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};