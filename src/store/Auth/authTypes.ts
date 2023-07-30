import { ILoginModel } from "../../models/Login/ILoginModel";

export enum authActionTypes {
    LOGIN_REQUEST = "LOGIN_REQUEST",
    LOGIN_SUCCESS = "LOGIN_SUCCESS",
    LOGIN_ERROR = "LOGIN_ERROR",
    LOGOUT_REQUEST = "LOGOUT_REQUEST",
    LOGOUT_SUCCESS = "LOGOUT_SUCCESS"
}

export interface LoginRequest {
    type: authActionTypes.LOGIN_REQUEST;
    data: ILoginModel
}

export interface LoginSuccess {
    type: authActionTypes.LOGIN_SUCCESS;
}

export interface LoginError {
    type: authActionTypes.LOGIN_ERROR;
    error: string;
}

export interface LogoutRequest {
    type: authActionTypes.LOGOUT_REQUEST;
}

export interface LogoutSuccess {
    type: authActionTypes.LOGOUT_SUCCESS;
}

export type AuthActions =
    | LoginRequest
    | LoginSuccess
    | LoginError
    | LogoutRequest
    | LogoutSuccess;

export interface AuthState {
    isAuthenticated: boolean;
    error: string
}