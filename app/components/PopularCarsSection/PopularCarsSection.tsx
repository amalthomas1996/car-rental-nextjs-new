import React from "react";
import PopularCar from "./PopularCars";

const PopularCarsSection = () => {
  return (
    <div className="popular-cars-section">
      <h2>Most Popular Cars</h2>

      <div className="car-cards-container">
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
          carImage="/car-image-2.svg"
          carName="Jac J7"
          description="S3 Plus has been rated Five-Star in C-NCAP including front impact, side impact, frontal side impact &
            Whipping test."
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
      </div>
    </div>
  );
};

export default PopularCarsSection;
