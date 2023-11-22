import React, { useState } from "react";

const NavBar = () => {
  const [showOption, setShowOption] = useState(false);
  return (
    <div className="navBar position-sticky d-flex justify-content-end align-items-center pe-3">
      <div className="position-relative">
        <i
          className="ri-more-2-fill fs_24 cursor_pointer"
          onClick={() => {
            setShowOption(!showOption);
          }}
        />
        {showOption && (
          <div className="position-absolute end-0 border p-2 me-3 white_bg border_radius ">
            <div className="d-flex flex-column px-2">
              <span className="text-nowrap cursor_pointer">Logout</span>
              <hr className="my-1" />
              <span className="text-nowrap cursor_pointer">Reset Password</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
