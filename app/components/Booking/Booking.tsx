"use client";
import React, { useState } from "react";
import Button from "../Button/Button";

const Booking: React.FC = () => {
  const [location, setLocation] = useState("al-quoz");
  const [pickupDate, setPickupDate] = useState("2023-10-30");
  const [pickupTime, setPickupTime] = useState("09:00");
  const [dropoffDate, setDropoffDate] = useState("2023-11-29");
  const [dropoffTime, setDropoffTime] = useState("09:00");
  const [vehicleType, setVehicleType] = useState<string>("");

  return (
    <div>
      <div className="booking-section">
        <div className="location-select">
          <span className="pickup-option">Same as Pick-Up</span>
          <span className="dropoff-option">Different Drop-Off</span>
          <div className="vehicle-select">
            <select
              id="vehicle-type"
              className="dropdown-select"
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
            >
              <option value="" disabled>
                Select vehicle type
              </option>
              <option value="sedan">Sedan</option>
              <option value="suv">SUV</option>
              <option value="truck">Truck</option>
              <option value="van">Van</option>
            </select>
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

          <div className="form-item">
            <label htmlFor="pickup-date" className="icon-calendar">
              <img src="/calender-icon.svg" alt="calendar-icon" />
            </label>
            <input
              type="date"
              id="pickup-date"
              name="pickup-date"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
            />
            <input
              type="time"
              id="pickup-time"
              name="pickup-time"
              value={pickupTime}
              onChange={(e) => setPickupTime(e.target.value)}
            />
          </div>

          <div className="form-item">
            <label htmlFor="dropoff-date" className="icon-calendar">
              <img src="/calender-icon.svg" alt="calendar-icon" />
            </label>
            <input
              type="date"
              id="dropoff-date"
              name="dropoff-date"
              value={dropoffDate}
              onChange={(e) => setDropoffDate(e.target.value)}
            />
            <input
              type="time"
              id="dropoff-time"
              name="dropoff-time"
              value={dropoffTime}
              onChange={(e) => setDropoffTime(e.target.value)}
            />
          </div>

          <div className="search-icon">
            <button type="submit" className="search-icon-button">
              <img src="/search-line-icon.svg" alt="search icon" />
            </button>
          </div>

          <div className="vertical-line"></div>

          <div className="form-item q-book">
            {/* <button type="submit" className="quick-book">
              Quick Book
            </button> */}
            <Button className="quick-book">Click Me</Button>
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
          <button className="mobile-booking-button">Book a Car</button>
          <button className="mobile-quick-book-button">Quick Book</button>
        </div>

        <div className="mobile-tab-section">
          <span className="mobile-tab active">Same as Pick-Up</span>
          <span className="mobile-tab">Different Drop-Off</span>
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
          <div className="mobile-form-item">
            <img
              src="/calender-icon.svg"
              alt="Calendar Icon"
              className="mobile-form-icon"
            />
            <input
              type="text"
              className="mobile-datetime-input"
              value="Pick-Up Date & Time"
              readOnly
            />
          </div>
          <div className="mobile-form-item">
            <img
              src="/calender-icon.svg"
              alt="Calendar Icon"
              className="mobile-form-icon"
            />
            <input
              type="text"
              className="mobile-datetime-input"
              value="Drop-Off Date & Time"
              readOnly
            />
          </div>
        </div>

        <button className="mobile-search-button">Search</button>
      </div>
    </div>
  );
};

export default Booking;
