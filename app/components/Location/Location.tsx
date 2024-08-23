import React from "react";
import style from "./Location.module.css";

const Location = () => {
  return (
    <section className={style.locations}>
      <h1 className={style.title}>Locations</h1>
      <div className={style.location}>
        <img src="/location-icon-red-x4.svg" alt="Location Icon" /> Dubai
        <div className={style.vertical_line_location}></div>
      </div>

      <div className={style.location}>
        <img src="/location-icon-red-x4.svg" alt="Location Icon" /> Abu Dhabi
        <div className={style.vertical_line_location}></div>
      </div>
      <div className={style.location}>
        <img src="/location-icon-red-x4.svg" alt="Location Icon" /> Sharjah
        <div className={style.vertical_line_location}></div>
      </div>
      <div className={style.location}>
        <img src="/location-icon-red-x4.svg" alt="Location Icon" /> Fujairah
        <div className={style.vertical_line_location}></div>
      </div>
      <div className={style.location}>
        <img src="/location-icon-red-x4.svg" alt="Location Icon" /> Ras Al
        Khaimah
      </div>
    </section>
  );
};

export default Location;
