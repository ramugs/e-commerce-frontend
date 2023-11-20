import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginActin } from "../../redux/action/adminAction";
import LoginImage from "../../assets/images/e-commerce-background.jpg";
import "./login.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import SpinnerLoading from "../../utilits/spinnerLoading";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Loading, setLoading] = useState(false);
  const [error, setError] = useState({
    userName: "",
    password: "",
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      userName: "",
      password: "",
    },

    validationSchema: Yup.object({
      userName: Yup.string().required("Please Enter the User Name"),
      password: Yup.string().required("Please Enter the Password"),
    }),

    onSubmit: (values) => {
      setLoading(true);
      dispatch(
        loginActin(
          {
            userName: values.userName,
            password: values.password,
          },
          onSuccess,
          onError
        )
      );
      console.log(values);
    },
  });

  const onSuccess = (data) => {
    setLoading(false);
    setError(false);
    localStorage.setItem("accessToken", data.token);
    navigate("/");
    console.log(data);
  };
  const onError = (data) => {
    setLoading(false);
    setError((prev) => {
      if (data.error === "Invalid User Name") {
        return {
          ...prev,
          userName: data.error,
          password: "",
        };
      } else if (data.error === "Invalid Password") {
        return {
          ...prev,
          userName: "",
          password: data.error,
        };
      }

      return prev;
    });

  };


  return (
    <div className="w-100 vh_100 position-relative">
      <img
        src={LoginImage}
        width="100%"
        height="100%"
        alt="Login Image"
        className="loginImage"
      />
      <div
        className={`white_bg position-absolute top-50 start-50 translate-middle  p-sm-5 p-4
         border_radius_20 login_container`}
      >
        <form onSubmit={formik.handleSubmit}>
          <div className="fs_26 fs_sm_20 fw_500 text-center">
            <span>E-Commerce</span>
          </div>
          <div
            className={`mt-5 border_radius_20 ${
              (formik.errors.userName && formik.touched.userName) ||
              error.userName
                ? "login_error_input"
                : "login_input"
            } `}
          >
            <input
              className="border_none background_none outline_none p-1 ps-3 "
              placeholder="User Name"
              name="userName"
              id="userName"
              value={formik.values.userName}
              onChange={(e) => {
                formik.handleChange(e);
                setError({
                  userName: "",
                  password: "",
                });
              }}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="" style={{ height: "2rem" }}>
            {((formik.errors.userName && formik.touched.userName) ||
              error.userName) && (
              <span className="red_color ps-2 fs_14">
                {formik.errors.userName || error.userName}
              </span>
            )}
          </div>

          <div
            className={` border_radius_20 ${
              (formik.errors.password && formik.touched.password) ||
              error.password
                ? "login_error_input"
                : "login_input"
            } `}
          >
            <input
              className="border_none background_none outline_none p-1 ps-3"
              placeholder="Password"
              name="password"
              id="password"
              value={formik.values.password}
              onChange={(e) => {
                formik.handleChange(e);
                setError({
                  userName: "",
                  password: "",
                });
              }}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="" style={{ height: "2rem" }}>
            {((formik.errors.password && formik.touched.password) ||
              error.password) && (
              <span className="red_color ps-2 fs_14">
                {formik.errors.password || error.password}
              </span>
            )}
          </div>

          <div className="mt-3 ">
            <button
              className="border_none w-100 p-2 blue_bg border_radius_20"
              type="submit"
            >
              {Loading ? <SpinnerLoading /> : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
