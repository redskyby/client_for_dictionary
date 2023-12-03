import { ADMIN_ROUTE, ERROR_PAGE, LOGIN_ROUTE, MAIN_PAGE, REGISTRATION_ROUTE } from "./ConstRoutesPaths";
import Admin from "../page/Admin/Admin";
import MainPage from "../page/mainPage/MainPage";
import Auth from "../page/auth/Auth";
import React from "react";
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
        path: ERROR_PAGE,
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
    {
        path: ERROR_PAGE,
        Component: Error_404,
    },
];
