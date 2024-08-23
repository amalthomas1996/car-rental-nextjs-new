"use client";
import React, { useState } from "react";
import DateTimePicker from "@/shared/DateTimePicker/DateTimePicker";
import Button from "@/shared/Button/Button";
import DropdownSelect from "@/shared/DropdownSelect/DropdownSelect";

const Booking: React.FC = () => {
  const [location, setLocation] = useState("al-quoz");
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
      <div className="booking-section">
        <div className="location-select">
          <span
            className={`pickup-option ${isSamePickup ? "active" : ""}`}
            onClick={handleSamePickupClick}
          >
            Same as Pick-Up
          </span>
          <span
            className={`dropoff-option ${!isSamePickup ? "active" : ""}`}
            onClick={handleDifferentDropoffClick}
          >
            Different Drop-Off
          </span>
          <div className="vehicle-select">
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
        <form className="booking-form">
          <div className="form-item">
            <label htmlFor="location" className="icon-location">
              <img src="/location-icon.svg" alt="location-icon" />
            </label>

            <select
              id="location"
              name="location"
              className="dropdown-select-booking"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="al-quoz">Al Quoz</option>
              <option value="downtown">Downtown</option>
              <option value="burj-khalifa">Burj Khalifa</option>
            </select>

            <span className="dropdown-icon">
              <img src="/dropdown-icon.svg" alt="" />
            </span>
          </div>
          <DateTimePicker
            dateValue={pickupDate}
            timeValue={pickupTime}
            onDateChange={setPickupDate}
            onTimeChange={setPickupTime}
            dateId="pickup-date"
            timeId="pickup-time"
          />
          {!isSamePickup && (
            <DateTimePicker
              dateValue={dropoffDate}
              timeValue={dropoffTime}
              onDateChange={setDropoffDate}
              onTimeChange={setDropoffTime}
              dateId="dropoff-date"
              timeId="dropoff-time"
            />
          )}

          <div className="search-icon">
            <button type="submit" className="search-icon-button">
              <img src="/search-line-icon.svg" alt="search icon" />
            </button>
          </div>

          <div className="vertical-line"></div>

          <div className="form-item q-book">
            <Button className="quick-book">Quick Book</Button>
          </div>
        </form>

        <div className="app-download">
          <span>
            Download our App for easy accessibility anytime, anywhere!
          </span>
          <div className="store-buttons">
            <img src="/app-store-button.svg" alt="App Store" />
            <img src="/play-store-button.svg" alt="Google Play" />
          </div>
        </div>
      </div>

      {/* Booking Section for Mobile */}
      <div className="mobile-hero-section">
        <div className="mobile-app-banner">
          <div className="mobile-app-banner-text">
            Download our App for easy Accessibility Anytime, Anywhere!
          </div>
          <div className="mobile-app-store-buttons">
            <img src="/app-store-button.svg" alt="App Store" />
            <img src="/play-store-button.svg" alt="Google Play" />
          </div>
        </div>

        <div className="mobile-booking-buttons">
          <Button className="mobile-booking-button">Book a Car</Button>
          <Button className="mobile-quick-book-button">Quick Book</Button>
        </div>

        <div className="mobile-tab-section">
          <span
            className={`mobile-tab ${isSamePickup ? "active" : ""}`}
            onClick={handleSamePickupClick}
          >
            Same as Pick-Up
          </span>
          <span
            className={`mobile-tab ${!isSamePickup ? "active" : ""}`}
            onClick={handleDifferentDropoffClick}
          >
            Different Drop-Off
          </span>
          <select
            className="mobile-vehicle-type"
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

        <div className="mobile-form-section">
          <div className="mobile-form-item">
            <img
              src="/location-icon.svg"
              alt="Location Icon"
              className="mobile-form-icon"
            />
            <select
              className="mobile-select"
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
            <div className="mobile-form-item">
              <img
                src="/location-icon.svg"
                alt="Location Icon"
                className="mobile-form-icon"
              />
              <select
                className="mobile-select"
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
            formItemClass="mobile-form-item"
            iconClass="Calendar Icon"
            inputClass="mobile-datetime-input"
          />
          <DateTimePicker
            dateValue={dropoffDate}
            timeValue={dropoffTime}
            onDateChange={setDropoffDate}
            onTimeChange={setDropoffTime}
            dateId="dropoff-date"
            timeId="dropoff-time"
            formItemClass="mobile-form-item"
            iconClass="Calendar Icon"
            inputClass="mobile-datetime-input"
          />
        </div>

        <button className="mobile-search-button">Search</button>
      </div>
    </div>
  );
};

export default Booking;
