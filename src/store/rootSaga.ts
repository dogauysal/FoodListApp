import { all } from "redux-saga/effects";
import menuSaga from "./Menu/menuSaga";

export function* rootSaga() {
    yield all([
        menuSaga()
    ])
}