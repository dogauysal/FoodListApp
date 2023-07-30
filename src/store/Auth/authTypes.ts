export enum authActionTypes {
    LOGIN_REQUEST = "LOGIN_REQUEST",
    LOGIN_SUCCESS = "LOGIN_SUCCESS",
    LOGIN_ERROR = "LOGIN_ERROR",
    LOGOUT_REQUEST = "LOGOUT_REQUEST",
    LOGOUT_SUCCESS = "LOGOUT_SUCCESS",
    LOGOUT_ERROR = "LOGOUT_ERROR"
}

export interface LoginRequest {
    type: authActionTypes.LOGIN_REQUEST;
    email: string;
    password: string;
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

export interface LogoutError {
    type: authActionTypes.LOGOUT_ERROR;
    error: string;
}

export type AuthActions =
    | LoginRequest
    | LoginSuccess
    | LoginError
    | LogoutRequest
    | LogoutSuccess
    | LogoutError;

export interface AuthState {
    isAuthenticated: boolean;
    error: string
}