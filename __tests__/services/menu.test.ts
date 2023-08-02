import { afterEach, describe, expect, jest, test } from "@jest/globals";
import axios, { AxiosHeaders, AxiosResponse } from "axios";
import { IMenu } from "../../src/models/Menu/IMenu"
import MenuService from "../../src/services/MenuService";


jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

const menus: IMenu[] = [{
    "id": 6,
    "name": "Menu 6",
    "price": 25,
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
    "url": "https://picsum.photos/id/75/400/400"
},
{
    "id": 7,
    "name": "Menu 7",
    "price": 52,
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
    "url": "https://picsum.photos/id/225/400/400"
},]

afterEach(() => {
    //To check how many times axios.get called 
    jest.clearAllMocks()
})

describe("get all menus", () => {

    test("should return all menus", async () => {

        const mockedResponse: AxiosResponse = {
            data: menus,
            status: 200,
            statusText: 'OK',
            headers: {},
            config: {
                headers: {}
            }
        }

        mockedAxios.get.mockResolvedValueOnce(mockedResponse);

        expect(axios).not.toBeNull()
        expect(axios.get).not.toHaveBeenCalled()
        const data = await MenuService.getAllMenus()
        expect(axios.get).toHaveBeenCalled()
        expect(axios.post).not.toHaveBeenCalled()
        expect(data).toEqual(menus)
    })
})
