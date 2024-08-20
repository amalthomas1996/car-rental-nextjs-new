"use client";
import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      {/* Nav Bar */}
      <nav className="navbar">
        <div className="logo">
          <a href="#">
            <Image
              src="/logo-diamon.svg"
              alt="Car Rental Logo"
              width={150}
              height={50}
            />
          </a>
        </div>
        <div
          className={`hamburger ${menuOpen ? "menu-open" : ""}`}
          onClick={handleHamburgerClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="#" onClick={handleLinkClick}>
              About
            </a>
          </li>
          <li>
            <a href="#" onClick={handleLinkClick}>
              Offers
            </a>
          </li>
          <li>
            <a href="#" onClick={handleLinkClick}>
              Corporate
            </a>
          </li>
          <li>
            <a href="#" onClick={handleLinkClick}>
              Personal
            </a>
          </li>
          <li>
            <a href="#" onClick={handleLinkClick}>
              Locations
            </a>
          </li>
          <li>
            <a href="#" onClick={handleLinkClick}>
              Contact Us
            </a>
          </li>
        </ul>
        <div className="right-icons">
          <div className="social-icons">
            <a href="#">
              <Image
                src="/facebook-logo.svg"
                alt="Facebook"
                width={24}
                height={24}
              />
            </a>
            <a href="#">
              <Image
                src="/insta-logo.svg"
                alt="Instagram"
                width={24}
                height={24}
              />
            </a>
            <a href="#">
              <Image src="/x-logo.svg" alt="X" width={24} height={24} />
            </a>
            <a href="#">
              <Image
                src="/linkedin-logo.svg"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </a>
          </div>
          <div className="profile">
            <div className="notification">
              <Image
                src="/notification-icon.svg"
                alt="Notification"
                width={24}
                height={24}
              />
              {/* Uncomment the next line for dynamic notification count */}
              {/* <span className="notification-count">1</span> */}
            </div>
            <a href="#" className="profile-link">
              <div className="profile-icon">J</div>
              <span className="profile-name">John Doe</span>
            </a>
          </div>
        </div>
      </nav>
      <div
        className={`mobile-menu ${menuOpen ? "active" : ""}`}
        id="mobile-menu"
      >
        <ul className="mobile-nav-links">
          <li>
            <a href="#" onClick={handleLinkClick}>
              About Us
            </a>
          </li>
          <li>
            <a href="#" onClick={handleLinkClick}>
              Offers
            </a>
          </li>
          <li>
            <a href="#" onClick={handleLinkClick}>
              Corporate
            </a>
          </li>
          <li>
            <a href="#" onClick={handleLinkClick}>
              Personal
            </a>
          </li>
          <li>
            <a href="#" onClick={handleLinkClick}>
              Locations
            </a>
          </li>
          <li>
            <a href="#" onClick={handleLinkClick}>
              Contact Us
            </a>
          </li>
        </ul>
        <div className="login-signup-btn" onClick={handleLinkClick}>
          Log In/Sign Up
        </div>
      </div>
      <div className="under-text-container">
        <span className="under-text">
          Sunday Pick Up/Drop-Off only at Dubai Silicon Oasis & Habtoor Grand
          Sales Counters | All Rates inclusive of VAT. T&C's apply | Follow us
          on Social Media for New Offers
        </span>
      </div>
      {/* Nav Bar end */}
    </div>
  );
};

export default Navbar;
