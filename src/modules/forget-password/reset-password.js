import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginActin, resetPasswordActin } from "../../redux/action/adminAction";
import LoginImage from "../../assets/images/e-commerce-background.jpg";
// import "../../login.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import SpinnerLoading from "../../utilits/spinnerLoading";
import { useNavigate, useParams } from "react-router";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const [Loading, setLoading] = useState(false);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      newPassword: "",
      confirmPassword: "",
    },

    validationSchema: Yup.object({
      newPassword: Yup.string().required("Please Enter the New Password"),
      confirmPassword: Yup.string()
        .required("Please Enter the Confirm Password")
        .oneOf([Yup.ref("newPassword"), null], "Passwords must match"),
    }),

    onSubmit: (values) => {
      setLoading(true);
      dispatch(
        resetPasswordActin(
          {
            password: values.newPassword,
          },
          params.resetToken,
          onSuccess,
          onError
        )
      );
      console.log(values);
    },
  });

  const onSuccess = (data) => {
    setLoading(false);
    // navigate("/");
    console.log(data);
  };
  const onError = (data) => {
    setLoading(false);
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
            <span>Reset Password</span>
          </div>
          <div
            className={`mt-5 border_radius_20 ${
              formik.errors.newPassword && formik.touched.newPassword
                ? "login_error_input"
                : "login_input"
            } `}
          >
            <input
              className="border_none background_none outline_none p-1 ps-3 "
              placeholder="New Password"
              name="newPassword"
              id="newPassword"
              value={formik.values.newPassword}
              onChange={(e) => {
                formik.handleChange(e);
              }}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="" style={{ height: "2rem" }}>
            {formik.errors.newPassword && formik.touched.newPassword && (
              <span className="red_color ps-2 fs_14">
                {formik.errors.newPassword}
              </span>
            )}
          </div>

          <div
            className={` border_radius_20 ${
              formik.errors.confirmPassword && formik.touched.confirmPassword
                ? "login_error_input"
                : "login_input"
            } `}
          >
            <input
              className="border_none background_none outline_none p-1 ps-3"
              placeholder="Confirm Password"
              name="confirmPassword"
              id="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={(e) => {
                formik.handleChange(e);
              }}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="" style={{ height: "2rem" }}>
            {formik.errors.confirmPassword &&
              formik.touched.confirmPassword && (
                <span className="red_color ps-2 fs_14">
                  {formik.errors.confirmPassword}
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

export default ResetPassword;
