import React from "react";

const Location = () => {
  return (
    <section className="locations">
      <h1>Locations</h1>
      <div className="location">
        <img src="/location-icon-red-x4.svg" alt="Location Icon" /> Dubai
        <div className="vertical-line-location"></div>
      </div>

      <div className="location">
        <img src="/location-icon-red-x4.svg" alt="Location Icon" /> Abu Dhabi
        <div className="vertical-line-location"></div>
      </div>
      <div className="location">
        <img src="/location-icon-red-x4.svg" alt="Location Icon" /> Sharjah
        <div className="vertical-line-location"></div>
      </div>
      <div className="location">
        <img src="/location-icon-red-x4.svg" alt="Location Icon" /> Fujairah
        <div className="vertical-line-location"></div>
      </div>
      <div className="location">
        <img src="/location-icon-red-x4.svg" alt="Location Icon" /> Ras Al
        Khaimah
      </div>
    </section>
  );
};

export default Location;
