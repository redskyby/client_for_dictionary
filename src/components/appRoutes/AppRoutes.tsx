import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { authRoutes, publicRoutes } from "../../services/RoutesPath";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import { LOGIN_ROUTE } from "../../services/ConstRoutesPaths";

const AppRoutes = () => {
    const isAuth: boolean = useSelector((state: RootState) => state.UserToolkit.isAuth);

    return (
        <Routes>
            {isAuth &&
                authRoutes.map(({ path, Component }) => {
                    return <Route key={path} path={path} element={<Component />} />;
                })}
            {publicRoutes.map(({ path, Component }) => {
                return <Route key={path} path={path} element={<Component />} />;
            })}
            <Route path="*" element={<Navigate to={LOGIN_ROUTE} />} />
        </Routes>
    );
};

export default AppRoutes;
