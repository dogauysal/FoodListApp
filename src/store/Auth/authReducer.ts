import { AuthActions, AuthState, authActionTypes } from "./authTypes";

const initialState: AuthState = {
    isAuthenticated: false,
    error: ""
}

const authReducer = (state: AuthState = initialState, action: AuthActions): AuthState => {
    switch (action.type) {
        case authActionTypes.LOGIN_REQUEST:
            return {
                ...state,
                error: ""
            }
        case authActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true
            }
        case authActionTypes.LOGIN_ERROR:
            return {
                ...state,
                error: action.error
            }
        case authActionTypes.LOGOUT_REQUEST:
            return {
                ...state,
                error: ""
            }
        case authActionTypes.LOGOUT_SUCCESS:
            return {
                ...state,
                isAuthenticated: false
            }
        case authActionTypes.LOGOUT_ERROR:
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}

export default authReducer