import Button from "@/shared/Button/Button";
import React from "react";
import style from "./Banner.module.css";
const Banner = () => {
  return (
    <div>
      {/*Banner Section */}
      <div className={style.banner_section}>
        <img src="/banner-1.svg" alt="Banner Image" />
        <div className={style.banner_content}>
          <h3>
            Recieve guarnteed <Button>GIFT VOUCHER</Button>
            <br />
            on a monthly hire or lease
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Banner;
