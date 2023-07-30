import { IMenu } from "../../models/Menu/IMenu";
import { menuActionTypes } from "./menuTypes";

export const GetAllMenus = () => ({
    type: menuActionTypes.MENU_LIST_REQUEST
})

export const AddMenuToCart = (menu: IMenu) => ({
    type: menuActionTypes.ADD_MENU_TO_CART_REQUEST,
    menu
})

export const DeleteMenuFromCart = (menuId: number) => ({
    type: menuActionTypes.DELETE_MENU_FROM_CART_REQUEST,
    menuId
})