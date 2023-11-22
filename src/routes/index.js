import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../modules/admin/loginPage";
import DashBoard from "../modules/dashboard/dashBoard";
import CreateProducts from "../modules/createProducts/createProducts";
import ProtectedRoute from "./protectedRoute";
import PrivateRoute from "./privateRoute";
import ResetPassword from "../modules/forget-password/reset-password";
import AdminUsers from "../modules/admin/admin-users";
import BlockedAdmins from "../modules/admin/blocked-admins";
import DeletedAdmins from "../modules/admin/deleted-admins";

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
            <Route path="/admin-users" element={<AdminUsers />} />
            <Route path="/blocked-admins" element={<BlockedAdmins />} />
            <Route path="/deleted-admins" element={<DeletedAdmins />} />
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
