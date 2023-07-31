import { IMenu } from "../../models/Menu/IMenu";
import { MenuActions, MenuState, menuActionTypes } from "./menuTypes";

const initialState: MenuState = {
    menus: [],
    filteredMenus: [],
    cart: [],
    error: ""
}

const menuReducer = (state: MenuState = initialState, action: MenuActions): MenuState => {
    switch (action.type) {
        case menuActionTypes.MENU_LIST_REQUEST:
            return {
                ...state,
                filteredMenus: [],
                error: ""
            }
        case menuActionTypes.MENU_LIST_SUCCESS:
            return {
                ...state,
                menus: action.menus,
                filteredMenus: action.menus
            }
        case menuActionTypes.MENU_LIST_ERROR:
            return {
                ...state,
                error: action.error
            }
        case menuActionTypes.INCREASE_PRODUCT_REQUEST:
            return {
                ...state
            }
        case menuActionTypes.INCREASE_PRODUCT_COUNT:
            let increaseCartList = state.cart

            let cartItemIncrease = increaseCartList.find(c => c.menuId === action.menuId)
            if (cartItemIncrease) {
                cartItemIncrease.count += 1;
            } else {
                let menu = state.menus.find(m => m.id === action.menuId)

                if (menu) {
                    increaseCartList.push({
                        menuId: action.menuId,
                        menu,
                        count: 1
                    })
                }

            }

            return {
                ...state,
                cart: [...increaseCartList]
            }
        case menuActionTypes.DECREASE_PRODUCT_REQUEST:
            return {
                ...state
            }
        case menuActionTypes.DECREASE_PRODUCT_COUNT:
            let decreaseCartList = state.cart

            let cartItemDecrease = decreaseCartList.find(d => d.menuId === action.menuId)
            if (cartItemDecrease) {
                if (cartItemDecrease.count === 1) {
                    decreaseCartList = decreaseCartList.filter(d => d.menuId !== action.menuId)
                } else {
                    cartItemDecrease.count -= 1
                }
            }
            return {
                ...state,
                cart: [...decreaseCartList]
            }
        case menuActionTypes.CLEAR_CART:
            return {
                ...state,
                cart: [],
                filteredMenus: [...state.menus]
            }
        case menuActionTypes.SEARCH_MENU_REQUEST:
            return {
                ...state
            }
        case menuActionTypes.SEARCH_MENUS:
            let filteredMenus: IMenu[] = []

            const searchTextLower = action.searchText.toLowerCase();

            filteredMenus = state.menus.filter((item) =>
                item.name.toLowerCase().includes(searchTextLower) ||
                item.ingredients.some((subItem) => subItem.name.toLowerCase().includes(searchTextLower))
            )


            return {
                ...state,
                filteredMenus: filteredMenus
            }
        default:
            return state
    }
}

export default menuReducer