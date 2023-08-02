import { describe, expect, test } from "@jest/globals";
import { ClearCart, DecreaseProductCount, IncreaseProductCount, SearchMenus, menuActionTypes } from "../../src/store/Menu/menuTypes";
import menuReducer from "../../src/store/Menu/menuReducer";

describe("menuReducer", () => {

    const initialState = {
        cart: [{
            menuId: 1,
            menu: {
                "id": 1,
                "name": "Menu 1",
                "price": 3,
                "ingredients": [
                    {
                        "id": 1,
                        "name": "Patates"
                    },
                    {
                        "id": 2,
                        "name": "Domates"
                    }
                ],
                "url": "https://picsum.photos/id/835/400/400"
            },
            count: 2
        }],
        menus: [{
            "id": 1,
            "name": "Menu 1",
            "price": 3,
            "ingredients": [
                {
                    "id": 1,
                    "name": "Patates"
                },
                {
                    "id": 2,
                    "name": "Domates"
                }
            ],
            "url": "https://picsum.photos/id/835/400/400"
        },
        {
            "id": 2,
            "name": "Menu 2",
            "price": 30,
            "ingredients": [
                {
                    "id": 3,
                    "name": "Salatalık"
                },
                {
                    "id": 2,
                    "name": "Domates"
                }
            ],
            "url": "https://picsum.photos/id/999/400/400"
        }],
        filteredMenus: [{
            "id": 1,
            "name": "Menu 1",
            "price": 3,
            "ingredients": [
                {
                    "id": 1,
                    "name": "Patates"
                },
                {
                    "id": 2,
                    "name": "Domates"
                }
            ],
            "url": "https://picsum.photos/id/835/400/400"
        },
        {
            "id": 2,
            "name": "Menu 2",
            "price": 30,
            "ingredients": [
                {
                    "id": 3,
                    "name": "Salatalık"
                },
                {
                    "id": 2,
                    "name": "Domates"
                }
            ],
            "url": "https://picsum.photos/id/999/400/400"
        }],
        error: ""
    }


    test("should handle CLEAR_CART action", () => {

        const action: ClearCart = { type: menuActionTypes.CLEAR_CART }
        const newState = menuReducer(initialState, action)

        expect(newState.cart).not.toBeNull()
        expect(newState.cart).toEqual([])
    })


    test("should handle INCREASE_PRODUCT_COUNT action", () => {

        const action: IncreaseProductCount = { type: menuActionTypes.INCREASE_PRODUCT_COUNT, menuId: 1 }
        const newState = menuReducer(initialState, action)

        expect(newState.cart[0].count).not.toEqual(2)
        expect(newState.cart[0].count).toEqual(3)
    })


    test("should handle DECREASE_PRODUCT_COUNT action", () => {

        const action: DecreaseProductCount = { type: menuActionTypes.DECREASE_PRODUCT_COUNT, menuId: 1 }
        const newState = menuReducer(initialState, action)

        expect(newState.cart[0].count).not.toEqual(3)
        expect(newState.cart[0].count).toEqual(2)
    })

    test("should handle SEARCH_MENUS action", () => {

        const action: SearchMenus = { type: menuActionTypes.SEARCH_MENUS, searchText: "Patates" }
        const newState = menuReducer(initialState, action)

        expect(newState.filteredMenus).not.toBeNull()
        expect(newState.filteredMenus).toEqual([{
            "id": 1,
            "name": "Menu 1",
            "price": 3,
            "ingredients": [
                {
                    "id": 1,
                    "name": "Patates"
                },
                {
                    "id": 2,
                    "name": "Domates"
                }
            ],
            "url": "https://picsum.photos/id/835/400/400"
        }])
    })

})