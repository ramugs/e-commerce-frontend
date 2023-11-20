import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../modules/admin/loginPage";
import DashBoard from "../modules/dashboard/dashBoard";
import CreateProducts from "../modules/createProducts/createProducts";
import ProtectedRoute from "./protectedRoute";
import PrivateRoute from "./privateRoute";
import ResetPassword from "../modules/forget-password/reset-password";

const Index = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/login" element={<LoginPage />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<DashBoard />} />
            <Route path="/create-products" element={<CreateProducts />} />
          </Route>
          <Route
            path="/ecommerce/admin/reset-password/:resetToken"
            element={<ResetPassword />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default Index;
