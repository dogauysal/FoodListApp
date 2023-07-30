import { combineReducers } from "@reduxjs/toolkit";
import Auth from "./Auth/authReducer"

const rootReducer = combineReducers({
    Auth: Auth
})

export type RootState = ReturnType<typeof rootReducer>;

export default (state: RootState | undefined, action: any) => {
    return rootReducer(state, action)
}