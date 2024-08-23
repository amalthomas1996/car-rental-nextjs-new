"use client";
import React, { useState } from "react";
import style from "./Booking.module.css";
import DateTimePicker from "@/shared/DateTimePicker/DateTimePicker";
import Button from "@/shared/Button/Button";
import DropdownSelect from "@/shared/DropdownSelect/DropdownSelect";

const Booking: React.FC = () => {
  const [location, setLocation] = useState("al-quoz");
  const [destinationLocation, setDestinationLocation] = useState("al-quoz");
  const [pickupDate, setPickupDate] = useState("2023-10-30");
  const [pickupTime, setPickupTime] = useState("09:00");
  const [dropoffDate, setDropoffDate] = useState("2023-11-29");
  const [dropoffTime, setDropoffTime] = useState("09:00");
  const [vehicleType, setVehicleType] = useState<string>("");
  const [isSamePickup, setIsSamePickup] = useState(true);

  const vehicleOptions = [
    { value: "sedan", label: "Sedan" },
    { value: "suv", label: "SUV" },
    { value: "truck", label: "Truck" },
    { value: "van", label: "Van" },
  ];

  const handleSamePickupClick = () => {
    setIsSamePickup(true);
  };

  const handleDifferentDropoffClick = () => {
    setIsSamePickup(false);
  };

  return (
    <div>
      <div className={style.booking_section}>
        <div className={style.location_select}>
          <span
            className={`${style.pickup_option} ${
              isSamePickup ? style.active : ""
            }`}
            onClick={handleSamePickupClick}
          >
            Same as Pick-Up
          </span>
          <span
            className={`${style.dropoff_option} ${
              !isSamePickup ? style.active : ""
            }`}
            onClick={handleDifferentDropoffClick}
          >
            Different Drop-Off
          </span>
          <div className={style.vehicle_select}>
            <DropdownSelect
              id="vehicle-type"
              options={vehicleOptions}
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              placeholder="Select vehicle type"
            />
          </div>
        </div>

        {/* Booking Form */}
        <form className={style.booking_form}>
          <div className={style.form_item}>
            <label htmlFor="location" className={style.icon_location}>
              <img src="/location-icon.svg" alt="location-icon" />
            </label>

            <select
              id="plocation"
              name="location"
              className={style.dropdown_select_booking}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="al-quoz">Al Quoz</option>
              <option value="downtown">Downtown</option>
              <option value="burj-khalifa">Burj Khalifa</option>
            </select>
            <span className={style.dropdown_icon}>
              <img src="/dropdown-icon.svg" alt="" />
            </span>
          </div>

          {!isSamePickup && (
            <div className={style.form_item}>
              <label htmlFor="location" className={style.icon_location}>
                <img src="/location-icon.svg" alt="location-icon" />
              </label>

              <select
                id="destinationLocation"
                name="location"
                className={style.dropdown_select_booking}
                value={destinationLocation}
                onChange={(e) => setDestinationLocation(e.target.value)}
              >
                <option value="al-quoz">Al Quoz</option>
                <option value="downtown">Downtown</option>
                <option value="burj-khalifa">Burj Khalifa</option>
              </select>

              <span className={style.dropdown_icon}>
                <img src="/dropdown-icon.svg" alt="" />
              </span>
            </div>
          )}
          <DateTimePicker
            dateValue={pickupDate}
            timeValue={pickupTime}
            onDateChange={setPickupDate}
            onTimeChange={setPickupTime}
            dateId="pickup-date"
            timeId="pickup-time"
            formItemClass={style.form_item}
            iconClass={style.icon_calendar}
            inputClass={style.datetime_input}
          />
          <DateTimePicker
            dateValue={dropoffDate}
            timeValue={dropoffTime}
            onDateChange={setDropoffDate}
            onTimeChange={setDropoffTime}
            dateId="dropoff-date"
            timeId="dropoff-time"
            formItemClass={style.form_item}
            iconClass={style.icon_calendar}
            inputClass={style.datetime_input}
          />
          <div className={style.search_icon}>
            <button type="submit" className={style.search_icon_button}>
              <img src="/search-line-icon.svg" alt="search icon" />
            </button>
          </div>

          <div className={style.vertical_line}></div>

          <div className={`${style.form_item} ${style.q_book}`}>
            <Button className={style.quick_book}>Quick Book</Button>
          </div>
        </form>

        <div className={style.app_download}>
          <span>
            Download our App for easy accessibility anytime, anywhere!
          </span>
          <div className={style.store_buttons}>
            <img src="/app-store-button.svg" alt="App Store" />
            <img src="/play-store-button.svg" alt="Google Play" />
          </div>
        </div>
      </div>

      {/* Booking Section for Mobile */}
      <div className={style.mobile_hero_section}>
        <div className={style.mobile_app_banner}>
          <div className={style.mobile_app_banner_text}>
            Download our App for easy Accessibility Anytime, Anywhere!
          </div>
          <div className={style.mobile_app_store_buttons}>
            <img src="/app-store-button.svg" alt="App Store" />
            <img src="/play-store-button.svg" alt="Google Play" />
          </div>
        </div>

        <div className={style.mobile_booking_buttons}>
          <Button className={style.mobile_booking_button}>Book a Car</Button>
          <Button className={style.mobile_quick_book_button}>Quick Book</Button>
        </div>

        <div className={style.mobile_tab_section}>
          <span
            className={`${style.mobile_tab} ${
              isSamePickup ? style.active : ""
            }`}
            onClick={handleSamePickupClick}
          >
            Same as Pick-Up
          </span>
          <span
            className={`${style.mobile_tab} ${
              !isSamePickup ? style.active : ""
            }`}
            onClick={handleDifferentDropoffClick}
          >
            Different Drop-Off
          </span>
          <select
            className={style.mobile_vehicle_type}
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
          >
            <option value="" disabled>
              Vehicle type
            </option>
            <option value="sedan">Sedan</option>
            <option value="suv">SUV</option>
            <option value="truck">Truck</option>
            <option value="van">Van</option>
          </select>
        </div>

        <div className={style.mobile_form_section}>
          <div className={style.mobile_form_item}>
            <img
              src="/location-icon.svg"
              alt="Location Icon"
              className={style.mobile_form_icon}
            />
            <select
              className={style.mobile_select}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="" disabled>
                Pickup Location
              </option>
              <option value="al-quoz">Al Quoz</option>
              <option value="downtown">Downtown</option>
              <option value="burj-khalifa">Burj Khalifa</option>
            </select>
          </div>
          {!isSamePickup && (
            <div className={style.mobile_form_item}>
              <img
                src="/location-icon.svg"
                alt="Location Icon"
                className={style.mobile_form_icon}
              />
              <select
                className={style.mobile_select}
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="" disabled>
                  Drop Off Location
                </option>
                <option value="al-quoz">Al Quoz</option>
                <option value="downtown">Downtown</option>
                <option value="burj-khalifa">Burj Khalifa</option>
              </select>
            </div>
          )}
          <DateTimePicker
            dateValue={pickupDate}
            timeValue={pickupTime}
            onDateChange={setPickupDate}
            onTimeChange={setPickupTime}
            dateId="pickup-date"
            timeId="pickup-time"
            formItemClass={style.mobile_form_item}
            iconClass={style.icon_calendar}
            inputClass={style.mobile_datetime_input}
          />
          <DateTimePicker
            dateValue={dropoffDate}
            timeValue={dropoffTime}
            onDateChange={setDropoffDate}
            onTimeChange={setDropoffTime}
            dateId="dropoff-date"
            timeId="dropoff-time"
            formItemClass={style.mobile_form_item}
            iconClass={style.icon_calendar}
            inputClass={style.mobile_datetime_input}
          />
        </div>

        <button className={style.mobile_search_button}>Search</button>
      </div>
    </div>
  );
};

export default Booking;
