import Button from "@/shared/Button/Button";
import React from "react";
import style from "./Banner.module.css";
import Image from "next/image";
const Banner = () => {
  return (
    <div>
      {/*Banner Section */}
      <div className={style.banner_section}>
        <Image src="/banner-1.svg" alt="Banner Image" height={50} width={50} />
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
