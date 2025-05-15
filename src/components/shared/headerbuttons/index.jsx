import React from "react";
import FlatButton from "@/components/shared/button/flatbutton";
import { getHeaderButtonGroup } from "@/components/shared/headerbuttons/headerbuttonsconfig";
import { useLocation, useNavigate } from "react-router-dom";

const HeaderButtons = ({ group }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const buttons = getHeaderButtonGroup(group);
  return (
    <>
      {buttons.map((btn, idx) => {
        const isActive = currentPath === btn.url;
        return (
          <FlatButton
            key={idx}
            title={btn.title}
            className={`btn header-tab-btn ${
              isActive ? "header-tab-active-btn" : ""
            }`}
            onClick={() => navigate(btn.url)}
          />
        );
      })}
    </>
  );
};

export default HeaderButtons;
