import React from "react";
import style from "./SideButton.module.css";
import Image from "next/image";
const SideButton = () => {
  return (
    <div>
      <div className={style.fixed_buttons}>
        <div className={style.button}>
          <Image
            src="/phone-icon.svg"
            alt="Phone Icon"
            height={17}
            width={17}
          />
        </div>
        <div className={style.button}>
          <Image src="/24-icon.svg" alt="24/7 Icon" height={17} width={17} />
        </div>
      </div>
    </div>
  );
};

export default SideButton;
