import {
    ADMIN_ROUTE,
    ERROR_PAGE_404,
    LIST_OF_ALL_WORDS,
    LOGIN_ROUTE,
    MAIN_PAGE,
    REGISTRATION_ROUTE,
} from "./ConstRoutesPaths";
import Admin from "../page/admin/Admin";
import MainPage from "../page/mainPage/MainPage";
import Auth from "../page/auth/Auth";
import React from "react";
import ListOfAllWords from "../page/listOfAllWords/ListOfAllWords";
import Error_404 from "../page/error/Error_404";

export const authRoutes: { path: string; Component: React.FunctionComponent }[] = [
    {
        path: ADMIN_ROUTE,
        Component: Admin,
    },
    {
        path: MAIN_PAGE,
        Component: MainPage,
    },
    {
        path: LIST_OF_ALL_WORDS,
        Component: ListOfAllWords,
    },
    {
        path: ERROR_PAGE_404,
        Component: Error_404,
    },
];

export const publicRoutes: { path: string; Component: React.FC }[] = [
    {
        path: LOGIN_ROUTE,
        Component: Auth,
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth,
    },
];
