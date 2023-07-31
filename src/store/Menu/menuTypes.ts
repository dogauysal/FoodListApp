import { ICartItem } from "../../models/Cart/ICartItem";
import { IMenu } from "../../models/Menu/IMenu";

export enum menuActionTypes {
    MENU_LIST_REQUEST = "MENU_LIST_REQUEST",
    MENU_LIST_SUCCESS = "MENU_LIST_SUCCESS",
    MENU_LIST_ERROR = "MENU_LIST_ERROR",
    INCREASE_PRODUCT_REQUEST = "INCREASE_PRODUCT_REQUEST",
    INCREASE_PRODUCT_COUNT = "INCREASE_PRODUCT_COUNT",
    DECREASE_PRODUCT_REQUEST = "DECREASE_PRODUCT_REQUEST",
    DECREASE_PRODUCT_COUNT = "DECREASE_PRODUCT_COUNT",
    CLEAR_CART = "CLEAR_CART",
    SEARCH_MENU_REQUEST = "SEARCH_MENU_REQUEST",
    SEARCH_MENUS = "SEARCH_MENUS"
}

export interface GetAllMenusRequest {
    type: menuActionTypes.MENU_LIST_REQUEST;
}

export interface GetAllMenusSuccess {
    type: menuActionTypes.MENU_LIST_SUCCESS;
    menus: IMenu[]
}

export interface GetAllMenusError {
    type: menuActionTypes.MENU_LIST_ERROR;
    error: string;
}

export interface IncreaseProductRequest {
    type: menuActionTypes.INCREASE_PRODUCT_REQUEST;
    menuId: number
}

export interface IncreaseProductCount {
    type: menuActionTypes.INCREASE_PRODUCT_COUNT;
    menuId: number
}

export interface DecreaseProductRequest {
    type: menuActionTypes.DECREASE_PRODUCT_REQUEST;
    menuId: number
}

export interface DecreaseProductCount {
    type: menuActionTypes.DECREASE_PRODUCT_COUNT;
    menuId: number
}

export interface ClearCart {
    type: menuActionTypes.CLEAR_CART
}

export interface SearchMenuRequest {
    type: menuActionTypes.SEARCH_MENU_REQUEST
    searchText: string;
}

export interface SearchMenus {
    type: menuActionTypes.SEARCH_MENUS;
    searchText: string;
}

export type MenuActions =
    | GetAllMenusRequest
    | GetAllMenusSuccess
    | GetAllMenusError
    | IncreaseProductRequest
    | IncreaseProductCount
    | DecreaseProductRequest
    | DecreaseProductCount
    | ClearCart
    | SearchMenuRequest
    | SearchMenus

export interface MenuState {
    menus: IMenu[]
    filteredMenus: IMenu[]
    cart: ICartItem[]
    error: string
}