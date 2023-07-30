import { all } from "redux-saga/effects";
import menuSaga from "./Menu/menuSaga";
import authSaga from "./Auth/authSaga";

export function* rootSaga() {
    yield all([
        authSaga(),
        menuSaga()
    ])
}