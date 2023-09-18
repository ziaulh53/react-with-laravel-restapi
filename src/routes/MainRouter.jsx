import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthRoutes, PrivateRoutes, PublicRoutes } from "./router";
import { Home, NotFound } from "../pages";
import { AuthRoute, PrivateRoute } from "./RouteProtector";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>} />
        {PublicRoutes.map(({ path, element }, idx) => (
          <Route key={idx} path={path} element={element} />
        ))}

        {/* auth routers */}
        {AuthRoutes.map(({ path, element }, idx) => (
          <Route
            key={idx}
            path={path}
            element={<AuthRoute element={element} />}
          />
        ))}

        {/* private routers */}
        {PrivateRoutes.map(({ path, element, role }, idx) => (
          <Route
            key={idx}
            path={path}
            element={<PrivateRoute element={element} role={role} />}
          />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
