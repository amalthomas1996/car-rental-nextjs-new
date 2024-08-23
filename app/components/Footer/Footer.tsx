import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div>
      <footer className={style.footer}>
        <div className={style.container}>
          <div className={style.logo}>
            <img src="/logo-footer.svg" alt="Al Habtoor Logo" />
            <p>
              Member of the
              <br /> Al Habtoor Group
            </p>
          </div>
          <div className={style.nav_and_companies}>
            <div className={style.nav}>
              <div className={style.nav_section}>
                <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Services</a>
                <a href="#">Offers</a>
              </div>
              <div className={style.nav_section}>
                <a href="#">Locations</a>
                <a href="#">Contact Us</a>
                <a href="#">FAQ</a>
                <a href="#">Privacy Policy</a>
              </div>
              <div className={style.nav_section}>
                <a href="#">Service Request</a>
                <a href="#">Career</a>
                <a href="#">Terms & Conditions</a>
                <a href="#">Sitemap</a>
              </div>
            </div>
            <div className={style.companies}>
              <h3>Al Habtoor Companies</h3>
              <a href="#">Hospitality</a>
              <a href="#">Real Estate</a>
              <a href="#">Publishing</a>
              <a href="#">Automotive</a>
              <a href="#">Vehicle Leasing</a>
            </div>
          </div>

          <div className={style.social_links}>
            <p>FOLLOW US ON</p>
            <div className={style.icons}>
              <a href="#">
                <img src="/facebook-footer.svg" alt="Facebook" />
              </a>
              <a href="#">
                <img src="/x-footer.svg" alt="X_icon" />
              </a>
              <a href="#">
                <img src="/insta-footer.svg" alt="Instagram" />
              </a>
              <a href="#">
                <img src="/linkedin-footer.svg" alt="LinkedIn" />
              </a>
              <a href="#">
                <img src="/youtube-footer.svg" alt="YouTube" />
              </a>
            </div>
            <div className={style.security_icons}>
              <img src="/site-lock-logo.svg" alt="Sitelock Icon" />
              <img src="/secure-logo.svg" alt="Trust Sign Icon" />
            </div>
          </div>
        </div>

        <div className={style.footer_bottom}>
          <hr />
          <p className={style.copyright}>
            &copy; 2018 Diamondlease LLC _ All Rights Reserved.
          </p>
        </div>
      </footer>

      {/*<!__Footer For Mobile__>*/}

      <section className={style.mobile_footer_footer}>
        <div className={style.mobile_footer_container}>
          <div className={style.mobile_footer_top}>
            <div className={style.mobile_footer_logo}>
              <img
                src="/logo-alhabtoor.svg"
                alt="Al Habtoor Logo"
                className={style.mobile_footer_logo_image}
              />
              <p className={style.mobile_footer_logo_text}>
                Member of the
                <br />
                Al Habtoor Group
              </p>
            </div>
            <div className={style.mobile_footer_social_icons}>
              <a href="#">
                <img
                  src="/facbook-mobile-footer.svg"
                  alt="Facebook"
                  className={style.mobile_footer_social_icon}
                />
              </a>
              <a href="#">
                <img
                  src="/x-mobile-footer.svg"
                  alt="X _Twitter"
                  className={style.mobile_footer_social_icon}
                />
              </a>
              <a href="#">
                <img
                  src="/insta-mobile-footer.svg"
                  alt="Instagram"
                  className={style.mobile_footer_social_icon}
                />
              </a>
              <a href="#">
                <img
                  src="/linkedin-mobile-footer.svg"
                  alt="LinkedIn"
                  className={style.mobile_footer_social_icon}
                />
              </a>
              <a href="#">
                <img
                  src="/youtube-mobilr-footer.svg"
                  alt="YouTube"
                  className={style.mobile_footer_social_icon}
                />
              </a>
            </div>
          </div>

          {/*  <!__ Other sections of the footer __>*/}
          <div className={style.mobile_footer_light}>
            <div className={style.mobile_footer_nav_and_companies}>
              <div className={style.mobile_footer_nav}>
                <div className={style.mobile_footer_nav_section}>
                  <a href="#" className={style.mobile_footer_nav_link}>
                    Home
                  </a>
                  <a href="#" className={style.mobile_footer_nav_link}>
                    Offers
                  </a>
                  <a href="#" className={style.mobile_footer_nav_link}>
                    Career
                  </a>
                  <a href="#" className={style.mobile_footer_nav_link}>
                    About Us
                  </a>
                </div>
                <div className={style.mobile_footer_nav_section}>
                  <a href="#" className={style.mobile_footer_nav_link}>
                    FAQ
                  </a>
                  <a href="#" className={style.mobile_footer_nav_link}>
                    Terms & Conditions
                  </a>
                  <a href="#" className={style.mobile_footer_nav_link}>
                    Service Request
                  </a>
                  <a href="#" className={style.mobile_footer_nav_link}>
                    Privacy Policy
                  </a>
                </div>
              </div>
            </div>

            <div className={style.mobile_footer_black}>
              <div className={style.mobile_footer_companies}>
                <h3 className={style.mobile_footer_companies_heading}>
                  Al Habtoor Companies
                </h3>
                <div className={style.mobile_footer_companies_list}>
                  <a href="#" className={style.mobile_footer_companies_link}>
                    Hospitality
                  </a>
                  <a href="#" className={style.mobile_footer_companies_link}>
                    Real Estate
                  </a>
                  <a href="#" className={style.mobile_footer_companies_link}>
                    Publishing
                  </a>
                  <a href="#" className={style.mobile_footer_companies_link}>
                    Automotive
                  </a>
                  <a href="#" className={style.mobile_footer_companies_link}>
                    Vehicle Leasing
                  </a>
                </div>
              </div>
              <div className={style.mobile_footer_security_icons}>
                <img src="/secure-logo-mobile-footer.svg" alt="secure_lock" />
              </div>
              <div className={style.mobile_footer_bottom}>
                <hr className={style.mobile_footer_divider} />
                <p className={style.mobile_footer_copyright}>
                  &copy; 2023 Car rental LLC _ All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
