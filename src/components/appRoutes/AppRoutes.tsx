import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { authRoutes, publicRoutes } from "../../services/RoutesPath";
import { ERROR_PAGE } from "../../services/ConstRoutesPaths";

const AppRoutes = () => {
  const isAuth: boolean = false;

  return (
    <Routes>
      {isAuth &&
        authRoutes.map(({ path, Component }) => {
          return <Route key={path} path={path} element={<Component />} />;
        })}
      {publicRoutes.map(({ path, Component }) => {
        return <Route key={path} path={path} element={<Component />} />;
      })}
      <Route path="*" element={<Navigate to={ERROR_PAGE} />} />
    </Routes>
  );
};

export default AppRoutes;
