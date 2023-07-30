import { combineReducers } from "@reduxjs/toolkit";
import Auth from "./Auth/authReducer"
import Menu from "./Menu/menuReducer"

const rootReducer = combineReducers({
    Auth: Auth,
    Menu: Menu
})

export type RootState = ReturnType<typeof rootReducer>;

export default (state: RootState | undefined, action: any) => {
    return rootReducer(state, action)
}