import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:7542/2.0",
    withCredentials: true
})
//api
export const authApi = {
    login(data: LoginDataType) {
        return instance.post<LoginResponseType>('/auth/login', data)
    }
}
//types
export type LoginDataType = {
    email: string
    password: string
    rememberMe?: boolean
}
export type LoginResponseType = {
    _id: string;
    email: string;
    name: string;
    avatar?: string;
    publicCardPacksCount: number; // количество колод
    created: string;
    updated: string;
    isAdmin: boolean;
    verified: boolean; // подтвердил ли почту
    rememberMe: boolean;
    error?: string;
}





