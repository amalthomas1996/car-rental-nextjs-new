import React from "react";
import PopularCar from "./PopularCars";
import style from "./Popularcars.module.css";

const PopularCarsSection = () => {
  return (
    <div className={style.popular_cars_section}>
      <h2>Most Popular Cars</h2>

      <div className={style.car_cards_container}>
        <PopularCar
          carImage="/rolls-car.webp"
          carName="Rolls Royce Ghost"
          description="Pure expression. Ghost presents a world of boundless potential. Its purity liberates the imagination, inviting you to craft a motor car that is a complete ..."
          people="6"
          transmission="Automatic"
          doors="5"
          ac="AC"
          price="AED 2700/ Monthly"
        />
        <PopularCar
          carImage="defender-car.avif"
          carName="Land Rover Defender"
          description="The Defender is a 5 seater 8 cylinder car and has length of 5018 mm, width of 2105 mm and a wheelbase of 3022 mm"
          people="6"
          transmission="Automatic"
          doors="5"
          ac="AC"
          price="AED 2700/ Monthly"
        />
        <PopularCar
          carImage="/car-image-1.svg"
          carName="Mitsubishi Eclipse"
          description="Eclipse Cross is a fusion of sharp coupe looks and dynamic SUV mobility with signature Mitsubishi styling, technology, and driving confidence."
          people="6"
          transmission="Automatic"
          doors="5"
          ac="AC"
          price="AED 2700/ Monthly"
        />
        <PopularCar
          carImage="/toyota.webp"
          carName="Toyota Prado"
          description="Toyota Land Cruiser Prado is a seven-seater, four-wheel drive SUV that's designed for adventure. It has a luxurious interior, a distinctive grille."
          people="6"
          transmission="Automatic"
          doors="5"
          ac="AC"
          price="AED 2700/ Monthly"
        />
        <PopularCar
          carImage="/tesla-car.webp"
          carName="Tesla Model 3"
          description="Model 3 is designed for electric-powered performance, with quick acceleration, long range and fast charging."
          people="6"
          transmission="Automatic"
          doors="5"
          ac="AC"
          price="AED 2700/ Monthly"
        />
      </div>
    </div>
  );
};

export default PopularCarsSection;
