import { combineReducers, configureStore } from "@reduxjs/toolkit";
import isAuth from "./slice/UserSlice";
import words from "./slice/WordsSlice";
import { AllWordsQuery } from "./query/AllWordsQuery";
import { setupListeners } from "@reduxjs/toolkit/query";

const rootReducer = combineReducers({
    UserToolkit: isAuth,
    WordsToolkit: words,
    [AllWordsQuery.reducerPath]: AllWordsQuery.reducer,
});

export const store = configureStore({
    reducer: rootReducer,

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(AllWordsQuery.middleware),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof rootReducer>;
