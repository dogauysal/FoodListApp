import { IMenu } from "../../models/Menu/IMenu";
import MenuService from "../../services/MenuService";
import { DecreaseProductCount, IncreaseProductCount, SearchMenus, menuActionTypes } from "./menuTypes";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects"

function* getAllMenus() {
    const response: IMenu[] = yield call(MenuService.getAllMenus);
    if (response) {
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

function* increaseProduct(action: IncreaseProductCount) {
    yield put({
        type: menuActionTypes.INCREASE_PRODUCT_COUNT,
        menuId: action.menuId
    })
}

function* decreaseProduct(action: DecreaseProductCount) {
    yield put({
        type: menuActionTypes.DECREASE_PRODUCT_COUNT,
        menuId: action.menuId
    })
}

function* searchMenus(action: SearchMenus) {
    yield put({
        type: menuActionTypes.SEARCH_MENUS,
        searchText: action.searchText
    })
}


function* menuSaga() {
    yield takeLatest(menuActionTypes.MENU_LIST_REQUEST, getAllMenus);
    yield takeEvery(menuActionTypes.INCREASE_PRODUCT_REQUEST, increaseProduct)
    yield takeEvery(menuActionTypes.DECREASE_PRODUCT_REQUEST, decreaseProduct)
    yield takeEvery(menuActionTypes.SEARCH_MENU_REQUEST, searchMenus)
}

export default menuSaga