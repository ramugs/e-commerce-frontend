import React, { useState } from "react";
import Logo from "../../assets/images/e-commerce-logo.jpg";
import { useNavigate } from "react-router";

const SideBar = () => {
  const navigate = useNavigate();

  const sideBarData = [
    {
      mainHeading: " Admin",
      subPath: [
        {
          name: "Admin Users",
          path: "/admin-users",
        },
        {
          name: "Blocked Admins",
          path: "/blocked-admins",
        },
        {
          name: "Deletd Admins",
          path: "/deleted-admins",
        },
      ],
    },
    {
      mainHeading: "Rider",
      subPath: [
        {
          name: "Rider Users",
          path: "/Rider",
        },
        {
          name: "Blocked Rider",
          path: "/blocked-Rider",
        },
        {
          name: "Deletd Rider",
          path: "/deletd-Rider",
        },
      ],
    },
  ];

  const [showOption, setShowOption] = useState(null);

  const toggleFn = (index) => {
    if (showOption === index) {
      setShowOption(null);
    } else {
      setShowOption(index);
    }
  };

  return (
    <div>
      <img src={Logo} width="100%" height={80} className="shadow" />

      <div>
        {sideBarData.map((item, index) => {
          return (
            <div key={index} className="my-3 mx-2">
              <div onClick={() => toggleFn(index)}>
                <span className="fs_20 cursor_pointer">{item.mainHeading}</span>
              </div>

              <div className="">
                {showOption === index &&
                  item.subPath.map((sub, ind) => {
                    return (
                      <div className="my-2" key={ind}>
                        <span
                          className="fs_16 cursor_pointer"
                          onClick={() => navigate(sub.path)}
                        >
                          {sub.name}
                        </span>
                      </div>
                    );
                  })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
