import { IProduct } from "./IProduct";

export interface IMenu {
    id: number;
    name: string;
    price: number;
    ingredients: IProduct[]
    url: string;
}