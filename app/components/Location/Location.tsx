import React from "react";
import style from "./Location.module.css";
import Image from "next/image";

const Location = () => {
  return (
    <section className={style.locations}>
      <h1 className={style.title}>Locations</h1>
      <div className={style.location}>
        <Image
          src="/location-icon-red-x4.svg"
          alt="Location Icon"
          height={14}
          width={14}
        />
        Dubai
        <div className={style.vertical_line_location}></div>
      </div>

      <div className={style.location}>
        <Image
          src="/location-icon-red-x4.svg"
          alt="Location Icon"
          height={14}
          width={14}
        />{" "}
        Abu Dhabi
        <div className={style.vertical_line_location}></div>
      </div>
      <div className={style.location}>
        <Image
          src="/location-icon-red-x4.svg"
          alt="Location Icon"
          height={14}
          width={14}
        />{" "}
        Sharjah
        <div className={style.vertical_line_location}></div>
      </div>
      <div className={style.location}>
        <Image
          src="/location-icon-red-x4.svg"
          alt="Location Icon"
          height={14}
          width={14}
        />{" "}
        Fujairah
        <div className={style.vertical_line_location}></div>
      </div>
      <div className={style.location}>
        <Image
          src="/location-icon-red-x4.svg"
          alt="Location Icon"
          height={14}
          width={14}
        />{" "}
        Ras Al Khaimah
      </div>
    </section>
  );
};

export default Location;
