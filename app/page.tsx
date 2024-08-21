import Image from "next/image";
import styles from "./page.module.css";
import Booking from "./components/Booking/Booking";
import SideButton from "./components/SideButton/SideButton";
import Banner from "./components/Banner/Banner";
import PopularCarsSection from "./components/PopularCarsSection/PopularCarsSection";
import Subscribe from "./components/Subscribe/Subscribe";
import Steps from "./components/Steps/Steps";
import Location from "./components/Location/Location";
import Faq from "./components/Faq/Faq";

export default function Home() {
  return (
    <>
      <Booking />
      <SideButton />
      <Banner />
      <PopularCarsSection />
      <Subscribe />
      <Steps />
      <Location />
      <Faq />
    </>
  );
}
