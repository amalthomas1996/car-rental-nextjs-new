import React from "react";
import style from "./SideButton.module.css";
const SideButton = () => {
  return (
    <div>
      <div className={style.fixed_buttons}>
        <div className={style.button}>
          <img src="/phone-icon.svg" alt="Phone Icon" />
        </div>
        <div className={style.button}>
          <img src="/24-icon.svg" alt="24/7 Icon" />
        </div>
      </div>
    </div>
  );
};

export default SideButton;
