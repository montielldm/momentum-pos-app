import { api } from "@/helpers/axios.instance";
import { AuthResponse } from "@/types/auth.types";

export const SignIn = async (formData: FormData):Promise<AuthResponse> => {
    const params = new URLSearchParams()
    params.append('username', formData.get('document')?.toString()!)
    params.append('password', formData.get('password')?.toString()!)


    const { data } = await api.post<AuthResponse>("/auth/login", params, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    })
    return data
}