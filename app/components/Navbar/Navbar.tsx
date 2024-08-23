"use client";
import Image from "next/image";
import React, { useState } from "react";
import style from "./Navbar.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Nav Bar */}
      <nav className={style.navbar}>
        <div className={style.logo}>
          <a href="#">
            <Image
              src="/main-logo.svg"
              alt="Car Rental Logo"
              height={24}
              width={24}
            />
          </a>
        </div>
        <div
          className={`${style.hamburger} ${menuOpen ? style.menu_open : ""}`}
          id={style.hamburger}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={style.nav_links}>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Offers</a>
          </li>
          <li>
            <a href="#">Corporate</a>
          </li>
          <li>
            <a href="#">Personal</a>
          </li>
          <li>
            <a href="#">Locations</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
        <div className={style.right_icons}>
          <div className={style.social_icons}>
            <a href="#">
              <Image
                src="/facebook-logo.svg"
                alt="Facebook"
                height={16}
                width={16}
              />
            </a>
            <a href="#">
              <Image
                src="/insta-logo.svg"
                alt="Instagram"
                height={16}
                width={16}
              />
            </a>
            <a href="#">
              <Image src="/x-logo.svg" alt="Twitter" height={16} width={16} />
            </a>
            <a href="#">
              <Image
                src="/linkedin-logo.svg"
                alt="LinkedIn"
                height={16}
                width={16}
              />
            </a>
          </div>
          <div className={style.profile}>
            <div className={style.notification}>
              <Image
                src="/notification-icon.svg"
                alt="Notification"
                height={24}
                width={24}
              />
              {/* for dynamic notification count */}
              {/* <span className={style.notification_count}>1</span> */}
            </div>
            <a href="#" className={style.profile_link}>
              <div className={style.profile_icon}>J</div>
              <span className={style.profile_name}>John Doe</span>
            </a>
          </div>
        </div>
      </nav>

      <div
        className={`${style.mobile_menu} ${menuOpen ? style.active : ""}`}
        id={style.mobile_menu}
      >
        <ul className={style.mobile_nav_links}>
          <li>
            <a href="#" onClick={closeMenu}>
              About Us
            </a>
          </li>
          <div className={style.mobile}></div>
          <li>
            <a href="#" onClick={closeMenu}>
              Offers
            </a>
          </li>
          <div className={style.mobile}></div>
          <li>
            <a href="#" onClick={closeMenu}>
              Corporate
            </a>
          </li>
          <div className={style.mobile}></div>
          <li>
            <a href="#" onClick={closeMenu}>
              Personal
            </a>
          </li>
          <div className={style.mobile}></div>
          <li>
            <a href="#" onClick={closeMenu}>
              Locations
            </a>
          </li>
          <div className={style.mobile}></div>
          <li>
            <a href="#" onClick={closeMenu}>
              Contact us
            </a>
          </li>
        </ul>
        <div className={style.login_signup_btn} onClick={closeMenu}>
          Log In/Sign Up
        </div>
      </div>

      <div className={style.under_text_container}>
        <span className={style.under_text}>
          Sunday Pick Up/Drop-Off only at Dubai Silicon Oasis & Habtoor Grand
          Sales Counters | All Rates inclusive of VAT. T&C's apply | Follow us
          on Social Media for New Offers
        </span>
      </div>
      {/* Nav Bar end */}
    </>
  );
};

export default Navbar;
