import React from "react";

const Booking = () => {
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
              defaultValue={"Select vehicle type"}
            >
              <option value={"select Vehicle Type"}>Select vehicle type</option>
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
            >
              <option value="al-quoz" selected>
                Al Quoz
              </option>
              <option value="downtown">Downtown</option>
              <option value="burj-khalifa">Burj Khalifa</option>
              {/* add more options here if needed */}
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
              defaultValue="2023-10-30"
            />
            <input
              type="time"
              id="pickup-time"
              name="pickup-time"
              defaultValue="09:00"
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
              defaultValue="2023-11-29"
            />
            <input
              type="time"
              id="dropoff-time"
              name="dropoff-time"
              defaultValue="09:00"
            />
          </div>

          <div className="search-icon">
            <button type="submit" className="search-icon-button">
              <img src="/search-line-icon.svg" alt="search icon" />
            </button>
          </div>

          <div className="vertical-line"></div>

          <div className="form-item q-book">
            <button type="submit" className="quick-book">
              Quick Book
            </button>
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
      {/* <!--Booking Section for Mobile-->*/}

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
          <select className="mobile-vehicle-type">
            <option value="" disabled selected>
              vehicle type
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
            <select className="mobile-select">
              <option value="" disabled selected>
                Pickup Location
              </option>
            </select>
          </div>
          <div className="mobile-form-item">
            <img
              src="/location-icon.svg"
              alt="Location Icon"
              className="mobile-form-icon"
            />
            <select className="mobile-select">
              <option value="" disabled selected>
                Drop Off Location
              </option>
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
            />
          </div>
        </div>

        <button className="mobile-search-button">Search</button>
      </div>
    </div>
  );
};

export default Booking;
