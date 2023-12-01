import { combineReducers, configureStore } from "@reduxjs/toolkit";
import isAuth from "./slice/UserSlice";

const rootReducer = combineReducers({
    UserToolkit: isAuth,
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
