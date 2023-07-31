import { ICartItem } from "../models/Cart/ICartItem";

export default function useUtility() {

    const calculateGrossTotal = (cart: ICartItem[]) => {
        let total = 0

        cart.forEach((item) => {
            let price = item.count * item.menu.price;

            total += price
        })

        return Number(total.toFixed(2))
    }

    const calculateDiscount = (grossTotal: number) => {
        let discount = grossTotal * 0.3

        return Number(discount.toFixed(2))
    }

    return {
        calculateGrossTotal,
        calculateDiscount
    }
}