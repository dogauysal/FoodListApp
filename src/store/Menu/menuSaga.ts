import { IMenu } from "../../models/Menu/IMenu";
import MenuService from "../../services/MenuService";
import { GetAllMenusRequest, menuActionTypes } from "./menuTypes";
import { call, put, takeLatest } from "redux-saga/effects"

function* getAllMenus(action: GetAllMenusRequest) {
    const response: IMenu[] = yield call(MenuService.getAllMenus);

    if (!response) {
        yield put({
            type: menuActionTypes.MENU_LIST_SUCCESS,
            menus: response
        })
    } else {
        yield put({
            type: menuActionTypes.MENU_LIST_ERROR,
            error: "Menüleri listelerken bir hata oluştu"
        })
    }
}

function* menuSaga() {
    yield takeLatest(menuActionTypes.MENU_LIST_REQUEST, getAllMenus);
}

export default menuSaga