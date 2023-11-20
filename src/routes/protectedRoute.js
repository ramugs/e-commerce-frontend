import React from "react";
import { Navigate, Outlet } from "react-router";

const ProtectedRoute = () => {
  return !localStorage.getItem("accessToken") ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default ProtectedRoute;
