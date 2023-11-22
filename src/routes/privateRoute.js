import React from "react";
import { Navigate, Outlet } from "react-router";
import MainLayout from "../components/layout/mainLayout";

const PrivateRoute = () => {
  return localStorage.getItem("accessToken") ? (
    <>
      <MainLayout>
        <Outlet />
      </MainLayout>
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
