import Register from "@/model/Register";
import axios, { AxiosResponse } from "axios";
import { LOGIN_URL, REGISTER_URL } from "./base";

export const register = async (user: Register): Promise<AxiosResponse<any, any>> => {
    try  {
        return await axios.post(REGISTER_URL,
            user,
            {
                headers: {
                    "Content-Type": "application/json"
                },
            }); 
    } catch (error) {
        return new Promise((resolve, reject) => reject(error));
    }
}

export const login = async (email: string, password: string): Promise<AxiosResponse<any, any>> => {
    try {
        const userToLogin = {
            email,
            password
        }
        return await axios.post(LOGIN_URL, userToLogin,
            {
                headers: {
                    "Content-Type": "application/json"
                }
            });
    } catch (error) {
        console.error(error);
        return new Promise((resolve, reject) => reject(error));
    }
}
