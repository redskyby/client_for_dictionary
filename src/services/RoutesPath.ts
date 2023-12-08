import { ADMIN_ROUTE, LIST_OF_ALL_WORDS, LOGIN_ROUTE, MAIN_PAGE, REGISTRATION_ROUTE } from "./ConstRoutesPaths";
import Admin from "../page/admin/Admin";
import MainPage from "../page/mainPage/MainPage";
import Auth from "../page/auth/Auth";
import React from "react";
import ListOfAllWords from "../page/listOfAllWords/ListOfAllWords";

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
