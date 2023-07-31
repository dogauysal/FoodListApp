import { menuActionTypes } from "./menuTypes";

export const GetAllMenus = () => ({
    type: menuActionTypes.MENU_LIST_REQUEST
})

export const IncreaseProductCount = (menuId: number) => ({
    type: menuActionTypes.INCREASE_PRODUCT_COUNT,
    menuId
})

export const DecreaseProductCount = (menuId: number) => ({
    type: menuActionTypes.DECREASE_PRODUCT_COUNT,
    menuId
})

export const ClearCart = () => ({
    type: menuActionTypes.CLEAR_CART
})

export const SearchMenus = (searchText: string) => ({
    type: menuActionTypes.SEARCH_MENU_REQUEST,
    searchText
})