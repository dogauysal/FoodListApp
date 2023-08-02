import { describe, expect, it, test } from "@jest/globals";
import { login, logout } from "../../src/store/Auth/authActions";
import authReducer from "../../src/store/Auth/authReducer";
import { authActionTypes, AuthActions, LoginRequest, LoginSuccess, LogoutRequest, LogoutSuccess } from "../../src/store/Auth/authTypes";
import { ILoginModel } from "../../src/models/Login/ILoginModel";

describe("authReducer", () => {

    const email = "uysaldoga@gmail.com";
    const password = "12345678";
    const data: ILoginModel = { email: email, password: password }

    test("should handle LOGIN_REQUEST action", () => {
        const initialState = { isAuthenticated: false, error: "" }
        const action: LoginRequest = { type: authActionTypes.LOGIN_REQUEST, data }
        const newState = authReducer(initialState, action)

        expect(newState.isAuthenticated).toEqual(false)
    })

    test("should handle LOGIN_SUCCESS action and set isAuthenticated to true", () => {
        const initialState = { isAuthenticated: false, error: "" }
        const action: LoginSuccess = { type: authActionTypes.LOGIN_SUCCESS }
        const newState = authReducer(initialState, action)

        expect(newState.isAuthenticated).toEqual(true)
    })

    test("should handle LOGOUT_REQUEST action", () => {
        const initialState = { isAuthenticated: true, error: "" }
        const action: LogoutRequest = { type: authActionTypes.LOGOUT_REQUEST }
        const newState = authReducer(initialState, action)

        expect(newState.isAuthenticated).toEqual(true)
    })

    test("should handle LOGOUT_SUCCESS action", () => {
        const initialState = { isAuthenticated: true, error: "" }
        const action: LogoutSuccess = { type: authActionTypes.LOGOUT_SUCCESS }
        const newState = authReducer(initialState, action)

        expect(newState.isAuthenticated).toEqual(false)
    })
})