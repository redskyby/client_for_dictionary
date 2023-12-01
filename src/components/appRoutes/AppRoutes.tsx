import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { authRoutes, publicRoutes } from "../../services/RoutesPath";
import Error_404 from "../../page/error/Error_404";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";

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
            <Route path="*" element={<Error_404 />} />
        </Routes>
    );
};

export default AppRoutes;
