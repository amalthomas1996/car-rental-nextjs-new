import React from "react";
import style from "./Steps.module.css";

const Steps = () => {
  return (
    <div className={style.steps}>
      <h2 className={style.title}>Rent/Lease In Three Easy Steps</h2>

      <div className={style.steps_container}>
        <div className={style.step_wrapper}>
          <div className={style.step_number}>
            <img src="/step-1.svg" alt="step-1" />
          </div>
          <div className={style.step}>
            <div className={style.step_icon}>
              <img src="/location-red-icon.svg" alt="Location Icon" />
            </div>
            <div className={style.step_description}>
              Select the location. Browse through our available options and find
              the perfect car to suit your needs.
            </div>
          </div>
        </div>

        <div className={style.step_wrapper}>
          <div className={style.step_number}>
            <img src="/step-2.svg" alt="step-2" />
          </div>
          <div className={style.step}>
            <div className={style.step_icon}>
              <img src="/calender-red-icon.svg" alt="Calendar Icon" />
            </div>
            <div className={style.step_description}>
              Choose your desired Pick-Up date and time.
            </div>
          </div>
        </div>

        <div className={style.step_wrapper}>
          <div className={style.step_number}>
            <img src="/step-3.svg" alt="step-3" />
          </div>
          <div className={style.step}>
            <div className={style.step_icon}>
              <img src="/car-red-icon.svg" alt="Car Icon" />
            </div>
            <div className={style.step_description}>
              Make payment and book the car. Select an option to either have the
              car delivered to your location or pick it up directly from us.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
