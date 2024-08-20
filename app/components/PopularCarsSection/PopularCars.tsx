import React from "react";
interface PopularCarProps {
  carImage: string;
  carName: string;
  description: string;
  people: string;
  transmission: string;
  doors: string;
  ac: string;
  price: string;
}
const PopularCar: React.FC<PopularCarProps> = ({
  carImage,
  carName,
  description,
  people,
  transmission,
  doors,
  ac,
  price,
}) => {
  return (
    <div>
      {/* Card */}
      <div className="car-card">
        <img src={carImage} alt="Car Image" className="car-image" />
        <div className="car-details">
          <h3>{carName}</h3>
          <p>{description}</p>
          <div className="car-svg-container">
            <div className="car-svg-item">
              <img src="/seat-icon.svg" alt="seat-icon" className="car-svg" />
              <span>{people} People</span>
            </div>
            <div className="car-svg-item">
              <img
                src="/trasmisionn-icon.svg"
                alt="trasmisionn-icon"
                className="car-svg"
              />
              <span>{transmission}</span>
            </div>
            <div className="car-svg-item">
              <img src="/door-icon.svg" alt="door-icon" className="car-svg" />
              <span>{doors} Doors</span>
            </div>
            <div className="car-svg-item">
              <img src="/ac-icon.svg" alt="ac-icon" className="car-svg" />
              <span>{ac}</span>
            </div>
          </div>
          <div className="price-book-container">
            <span>{price}</span>
            <button>Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCar;
