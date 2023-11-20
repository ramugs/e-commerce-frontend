import React from "react";
import { Navigate, Outlet } from "react-router";

const PrivateRoute = () => {
  return localStorage.getItem("accessToken") ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
