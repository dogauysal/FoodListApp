import { ICart } from "../../models/Cart/ICart";
import { IMenu } from "../../models/Menu/IMenu";

export enum menuActionTypes {
    MENU_LIST_REQUEST = "MENU_LIST_REQUEST",
    MENU_LIST_SUCCESS = "MENU_LIST_SUCCESS",
    MENU_LIST_ERROR = "MENU_LIST_ERROR",
    ADD_MENU_TO_CART_REQUEST = "ADD_MENU_TO_CART_REQUEST",
    ADD_MENU_TO_CART_SUCCESS = "ADD_MENU_TO_CART_SUCCESS",
    ADD_MENU_TO_CART_ERROR = "ADD_MENU_TO_CART_ERROR",
    DELETE_MENU_FROM_CART_REQUEST = "DELETE_MENU_FROM_CART_REQUEST",
    DELETE_MENU_FROM_CART_SUCCESS = "DELETE_MENU_FROM_CART_SUCCESS",
    DELETE_MENU_FROM_CART_ERROR = "DELETE_MENU_FROM_CART_ERROR"
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

export interface AddMenuToCartRequest {
    type: menuActionTypes.ADD_MENU_TO_CART_REQUEST;
    menu: IMenu
}

export interface AddMenuToCartSuccess {
    type: menuActionTypes.ADD_MENU_TO_CART_SUCCESS;
}

export interface AddMenuToCartError {
    type: menuActionTypes.ADD_MENU_TO_CART_ERROR;
    error: string;
}

export interface DeleteMenuFromCartRequest {
    type: menuActionTypes.DELETE_MENU_FROM_CART_REQUEST
    menuId: number
}

export interface DeleteMenuFromCartSuccess {
    type: menuActionTypes.DELETE_MENU_FROM_CART_SUCCESS
    menuId: number
}

export interface DeleteMenuFromCartError {
    type: menuActionTypes.DELETE_MENU_FROM_CART_ERROR;
    error: string
}

export type MenuActions =
    | GetAllMenusRequest
    | GetAllMenusSuccess
    | GetAllMenusError
    | AddMenuToCartRequest
    | AddMenuToCartSuccess
    | AddMenuToCartError
    | DeleteMenuFromCartRequest
    | DeleteMenuFromCartSuccess
    | DeleteMenuFromCartError

export interface MenuState {
    menus: IMenu[]
    cart: ICart | null
    error: string
}