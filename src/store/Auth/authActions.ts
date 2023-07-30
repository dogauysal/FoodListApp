import { authActionTypes } from "./AuthTypes";

export const login = (email: string, password: string) => ({
    type: authActionTypes.LOGIN_REQUEST,
    email,
    password
})

export const logout = () => ({
    type: authActionTypes.LOGOUT_REQUEST
})