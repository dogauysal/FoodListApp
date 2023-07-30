import { ILoginModel } from "../../models/Login/ILoginModel";
import { authActionTypes } from "./authTypes";


export const login = (data: ILoginModel) => ({
    type: authActionTypes.LOGIN_REQUEST,
    data
})

export const logout = () => ({
    type: authActionTypes.LOGOUT_REQUEST
})