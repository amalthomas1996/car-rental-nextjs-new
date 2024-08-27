"use client";
import Image from "next/image";
import React, { useState } from "react";
import style from "./Navbar.module.css";
import Link from "next/link";

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
          <Link href="#">
            <Image
              src="/main-logo.svg"
              alt="Car Rental Logo"
              height={24}
              width={24}
            />
          </Link>
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
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="#">Offers</Link>
          </li>
          <li>
            <Link href="#">Corporate</Link>
          </li>
          <li>
            <Link href="#">Personal</Link>
          </li>
          <li>
            <Link href="#">Locations</Link>
          </li>
          <li>
            <Link href="#">Contact Us</Link>
          </li>
        </ul>
        <div className={style.right_icons}>
          <div className={style.social_icons}>
            <Link href="#">
              <Image
                src="/facebook-logo.svg"
                alt="Facebook"
                height={16}
                width={16}
              />
            </Link>
            <Link href="#">
              <Image
                src="/insta-logo.svg"
                alt="Instagram"
                height={16}
                width={16}
              />
            </Link>
            <Link href="#">
              <Image src="/x-logo.svg" alt="Twitter" height={16} width={16} />
            </Link>
            <Link href="#">
              <Image
                src="/linkedin-logo.svg"
                alt="LinkedIn"
                height={16}
                width={16}
              />
            </Link>
          </div>
          <div className={style.profile}>
            <div className={style.notification}>
              <Link href="#">
                <Image
                  src="/notification-icon.svg"
                  alt="Notification"
                  height={24}
                  width={24}
                />
              </Link>
              {/* for dynamic notification count */}
              {/* <span className={style.notification_count}>1</span> */}
            </div>
            <Link href="#" className={style.profile_link}>
              <div className={style.profile_icon}>J</div>
              <span className={style.profile_name}>John Doe</span>
            </Link>
          </div>
        </div>
      </nav>

      <div
        className={`${style.mobile_menu} ${menuOpen ? style.active : ""}`}
        id={style.mobile_menu}
      >
        <ul className={style.mobile_nav_links}>
          <li>
            <Link href="#" onClick={closeMenu}>
              About Us
            </Link>
          </li>
          <div className={style.mobile}></div>
          <li>
            <Link href="#" onClick={closeMenu}>
              Offers
            </Link>
          </li>
          <div className={style.mobile}></div>
          <li>
            <Link href="#" onClick={closeMenu}>
              Corporate
            </Link>
          </li>
          <div className={style.mobile}></div>
          <li>
            <Link href="#" onClick={closeMenu}>
              Personal
            </Link>
          </li>
          <div className={style.mobile}></div>
          <li>
            <Link href="#" onClick={closeMenu}>
              Locations
            </Link>
          </li>
          <div className={style.mobile}></div>
          <li>
            <Link href="#" onClick={closeMenu}>
              Contact us
            </Link>
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
