import AsyncStorage from "@react-native-async-storage/async-storage";

import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import { persistReducer, persistStore } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import { rootSaga } from "./rootSaga";

const rootPersistConfig = {
    key: "root",
    storage: AsyncStorage
}

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [sagaMiddleware]
})

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store)