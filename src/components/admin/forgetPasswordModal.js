import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "../../modules/admin/login.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { forgetPasswordActin } from "../../redux/action/adminAction";

const ForgetPasswordModal = ({
  forgetPassModal,
  handleForgetPassmodalClose,
}) => {
  const dispatch = useDispatch();
  const [Loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      emailAdress: "",
    },

    validationSchema: Yup.object({
      emailAdress: Yup.string().email().required("Please Enter the email"),
    }),

    onSubmit: (values) => {
      setLoading(true);
      dispatch(
        forgetPasswordActin(
          {
            emailAdress: values.emailAdress,
          },
          onSuccess,
          onError
        )
      );
    },
  });

  const onSuccess = (data) => {
    setLoading(false);
    setMessage(data.data);
    setError(false);
    console.log(data);
  };

  const onError = (data) => {
    setLoading(false);
    setError(data.error);
    console.log(data);
  };

  return (
    <Modal
      centered
      show={forgetPassModal}
      onHide={handleForgetPassmodalClose}
      dialogClassName="forget_modal_container"
      contentClassName="border_radius_10px"
      // backdropClassName="rating_password_modal_backdrop"
    >
      <Modal.Body>
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-between align-items-center">
            <span className="black_color fs_26 fw_500">Password Reset</span>
            <i className="ri-close-circle-fill fs_22 cursor_pointer" onClick={()=> handleForgetPassmodalClose()}/>
          </div>

          {message ? (
            <div className="d-felx text-center my-4">
              <span className="fs_18 fw_500 green_color">{message}</span>
            </div>
          ) : (
            <>
              <div className="text-center mt-3">
                <span className="fs_18 fw_500">
                  Enter your email address and we'll send you an email with
                  instructions to reset your password.
                </span>
              </div>
              <form
                className="d-flex flex-column"
                onSubmit={formik.handleSubmit}
              >
                <input
                  className={`background_none border_radius_10 w-75 mx-auto mt-3 ${
                    formik.errors.emailAdress && formik.touched.emailAdress
                      ? "login_error_input"
                      : "login_input"
                  }   outline_none p-1 ps-2`}
                  placeholder="Enter the email"
                  id="emailAdress"
                  name="emailAdress"
                  value={formik.values.emailAdress}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <div className="text-center" style={{ height: "2rem" }}>
                  {((formik.errors.emailAdress && formik.touched.emailAdress) ||
                    error) && (
                    <span className="red_color ps-2 fs_14">
                      {formik.errors.emailAdress || error}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="fs_18 fw_500 border_radius_10 border_none width_fit px-4 mx-auto blue_bg shadow mb-3"
                >
                  Send
                </button>
              </form>
            </>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ForgetPasswordModal;
