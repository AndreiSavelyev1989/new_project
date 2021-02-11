import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:7542/2.0/",
    withCredentials: true
})

export type RegistrationParamsType = {
    email: string
    password: string
}

type ResponseType = {
    created: string
    email: string
    isAdmin: boolean
    name: string
    publicCardPacksCount: number
    rememberMe: boolean
    updated: string
    verified: boolean
    __v: number
    _id: string
}

export const registrationAPI = {
    setRegistration(data: RegistrationParamsType){
        return instance.post<ResponseType>("auth/register", data)
    }
}