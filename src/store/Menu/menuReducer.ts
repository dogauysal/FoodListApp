import { MenuActions, MenuState, menuActionTypes } from "./menuTypes";

const initialState: MenuState = {
    menus: [],
    cart: null,
    error: ""
}

const menuReducer = (state: MenuState = initialState, action: MenuActions): MenuState => {
    switch (action.type) {
        case menuActionTypes.MENU_LIST_REQUEST:
            return {
                ...state,
                error: ""
            }
        case menuActionTypes.MENU_LIST_SUCCESS:
            return {
                ...state,
                menus: action.menus
            }
        case menuActionTypes.MENU_LIST_ERROR:
            return {
                ...state,
                error: action.error
            }
        case menuActionTypes.ADD_MENU_TO_CART_REQUEST:
            return {
                ...state,
            }
        case menuActionTypes.ADD_MENU_TO_CART_SUCCESS:
            return {
                ...state
            }
        case menuActionTypes.ADD_MENU_TO_CART_ERROR:
            return {
                ...state,
                error: action.error
            }
        case menuActionTypes.DELETE_MENU_FROM_CART_REQUEST:
            return {
                ...state
            }
        case menuActionTypes.DELETE_MENU_FROM_CART_SUCCESS:
            return {
                ...state
            }
        case menuActionTypes.DELETE_MENU_FROM_CART_ERROR:
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}

export default menuReducer