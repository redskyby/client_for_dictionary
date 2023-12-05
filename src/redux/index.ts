import { combineReducers, configureStore } from "@reduxjs/toolkit";
import isAuth from "./slice/UserSlice";
import words from "./slice/WordsSlice";

const rootReducer = combineReducers({
    UserToolkit: isAuth,
    WordsToolkit: words,
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
