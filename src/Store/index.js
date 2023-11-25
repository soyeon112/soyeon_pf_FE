import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";

import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";

// const store = configureStore({ reducer: { auth: authReducer } });

const reducers = combineReducers({
  auth: authReducer,
});
const persistConfig = {
  key: "root",
  storage, //로컬스토리지 사용
  whitelist: ["auth"],
};

//persistReducer : reducer를 반환하는 api (형식 -> persistReducer(config, reducer))
const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({ reducer: persistedReducer });
export default store;
