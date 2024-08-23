import React from "react";
import style from "./Popularcars.module.css";

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
      <div className={style.car_card}>
        <img src={carImage} alt="Car Image" className={style.car_image} />
        <div className={style.car_details}>
          <h3>{carName}</h3>
          <p>{description}</p>
          <div className={style.car_svg_container}>
            <div className={style.car_svg_item}>
              <img
                src="/seat-icon.svg"
                alt="seat-icon"
                className={style.car_svg}
              />
              <span>{people} People</span>
            </div>
            <div className={style.car_svg_item}>
              <img
                src="/trasmisionn-icon.svg"
                alt="trasmisionn-icon"
                className={style.car_svg}
              />
              <span>{transmission}</span>
            </div>
            <div className={style.car_svg_item}>
              <img
                src="/door-icon.svg"
                alt="door-icon"
                className={style.car_svg}
              />
              <span>{doors} Doors</span>
            </div>
            <div className={style.car_svg_item}>
              <img src="/ac-icon.svg" alt="ac-icon" className={style.car_svg} />
              <span>{ac}</span>
            </div>
          </div>
          <div className={style.price_book_container}>
            <span>{price}</span>
            <button>Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCar;
