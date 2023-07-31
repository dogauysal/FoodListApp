import { IMenu } from "../Menu/IMenu";

export interface ICartItem {
    menuId: number;
    menu: IMenu;
    count: number
}