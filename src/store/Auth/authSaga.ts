import { call, put, takeEvery } from "redux-saga/effects";
import { authActionTypes } from "./authTypes";
import AuthService from "../../services/AuthService";
import { menuActionTypes } from "../Menu/menuTypes";


function* login() {
    const response: boolean = yield call(AuthService.login, true)

    if (response) {
        yield put({
            type: authActionTypes.LOGIN_SUCCESS,
            isAuthenticated: true
        })
    } else {
        yield put({
            type: authActionTypes.LOGIN_ERROR,
            error: "Giriş yapılırken bir hata oluştu"
        })
    }
}

function* logout() {
    yield put({ type: menuActionTypes.CLEAR_CART })
    yield put({ type: authActionTypes.LOGOUT_SUCCESS })
}

function* authSaga() {
    yield takeEvery(authActionTypes.LOGIN_REQUEST, login);
    yield takeEvery(authActionTypes.LOGOUT_REQUEST, logout)
}

export default authSaga