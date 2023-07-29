import { IMenu } from "../models/Menu/IMenu";
import HttpClient from "../utils/HttpClient"

class MenuService {
    getAllMenus = async () => {
        const response = await HttpClient.get<IMenu[]>("/menus");

        return response
    }
}

export default new MenuService()