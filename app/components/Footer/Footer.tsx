import React from "react";
import style from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <footer className={style.footer}>
        <div className={style.container}>
          <div className={style.logo}>
            <Image
              src="/logo-footer.svg"
              alt="Al Habtoor Logo"
              height={150}
              width={150}
            />
            <p>
              Member of the
              <br /> Al Habtoor Group
            </p>
          </div>
          <div className={style.nav_and_companies}>
            <div className={style.nav}>
              <div className={style.nav_section}>
                <Link href="#">Home</Link>
                <Link href="#">About Us</Link>
                <Link href="#">Services</Link>
                <Link href="#">Offers</Link>
              </div>
              <div className={style.nav_section}>
                <Link href="#">Locations</Link>
                <Link href="#">Contact Us</Link>
                <Link href="#">FAQ</Link>
                <Link href="#">Privacy Policy</Link>
              </div>
              <div className={style.nav_section}>
                <Link href="#">Service Request</Link>
                <Link href="#">Career</Link>
                <Link href="#">Terms & Conditions</Link>
                <Link href="#">Sitemap</Link>
              </div>
            </div>
            <div className={style.companies}>
              <h3>Al Habtoor Companies</h3>
              <Link href="#">Hospitality</Link>
              <Link href="#">Real Estate</Link>
              <Link href="#">Publishing</Link>
              <Link href="#">Automotive</Link>
              <Link href="#">Vehicle Leasing</Link>
            </div>
          </div>

          <div className={style.social_links}>
            <p>FOLLOW US ON</p>
            <div className={style.icons}>
              <Link href="#">
                <Image
                  src="/facebook-footer.svg"
                  alt="Facebook"
                  height={14}
                  width={14}
                />
              </Link>
              <Link href="#">
                <Image
                  src="/x-footer.svg"
                  alt="X_icon"
                  height={14}
                  width={14}
                />
              </Link>
              <Link href="#">
                <Image
                  src="/insta-footer.svg"
                  alt="Instagram"
                  height={14}
                  width={14}
                />
              </Link>
              <Link href="#">
                <Image
                  src="/linkedin-footer.svg"
                  alt="LinkedIn"
                  height={14}
                  width={14}
                />
              </Link>
              <Link href="#">
                <Image
                  src="/youtube-footer.svg"
                  alt="YouTube"
                  height={14}
                  width={14}
                />
              </Link>
            </div>
            <div className={style.security_icons}>
              <Image
                src="/site-lock-logo.svg"
                alt="Sitelock Icon"
                height={14}
                width={14}
              />
              <Image
                src="/secure-logo.svg"
                alt="Trust Sign Icon"
                height={14}
                width={14}
              />
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
              <Image
                src="/logo-alhabtoor.svg"
                alt="Al Habtoor Logo"
                height={70}
                width={70}
                className={style.mobile_footer_logo_image}
              />
              <p className={style.mobile_footer_logo_text}>
                Member of the
                <br />
                Al Habtoor Group
              </p>
            </div>
            <div className={style.mobile_footer_social_icons}>
              <Link href="#">
                <Image
                  src="/facbook-mobile-footer.svg"
                  alt="Facebook"
                  height={17}
                  width={17}
                  className={style.mobile_footer_social_icon}
                />
              </Link>
              <Link href="#">
                <Image
                  src="/x-mobile-footer.svg"
                  alt="X _Twitter"
                  height={17}
                  width={17}
                  className={style.mobile_footer_social_icon}
                />
              </Link>
              <Link href="#">
                <Image
                  src="/insta-mobile-footer.svg"
                  alt="Instagram"
                  height={17}
                  width={17}
                  className={style.mobile_footer_social_icon}
                />
              </Link>
              <Link href="#">
                <Image
                  src="/linkedin-mobile-footer.svg"
                  alt="LinkedIn"
                  height={17}
                  width={17}
                  className={style.mobile_footer_social_icon}
                />
              </Link>
              <Link href="#">
                <Image
                  src="/youtube-mobilr-footer.svg"
                  alt="YouTube"
                  height={17}
                  width={17}
                  className={style.mobile_footer_social_icon}
                />
              </Link>
            </div>
          </div>

          {/*  <!__ Other sections of the footer __>*/}
          <div className={style.mobile_footer_light}>
            <div className={style.mobile_footer_nav_and_companies}>
              <div className={style.mobile_footer_nav}>
                <div className={style.mobile_footer_nav_section}>
                  <Link href="#" className={style.mobile_footer_nav_link}>
                    Home
                  </Link>
                  <Link href="#" className={style.mobile_footer_nav_link}>
                    Offers
                  </Link>
                  <Link href="#" className={style.mobile_footer_nav_link}>
                    Career
                  </Link>
                  <Link href="#" className={style.mobile_footer_nav_link}>
                    About Us
                  </Link>
                </div>
                <div className={style.mobile_footer_nav_section}>
                  <Link href="#" className={style.mobile_footer_nav_link}>
                    FAQ
                  </Link>
                  <Link href="#" className={style.mobile_footer_nav_link}>
                    Terms & Conditions
                  </Link>
                  <Link href="#" className={style.mobile_footer_nav_link}>
                    Service Request
                  </Link>
                  <Link href="#" className={style.mobile_footer_nav_link}>
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </div>

            <div className={style.mobile_footer_black}>
              <div className={style.mobile_footer_companies}>
                <h3 className={style.mobile_footer_companies_heading}>
                  Al Habtoor Companies
                </h3>
                <div className={style.mobile_footer_companies_list}>
                  <Link href="#" className={style.mobile_footer_companies_link}>
                    Hospitality
                  </Link>
                  <Link href="#" className={style.mobile_footer_companies_link}>
                    Real Estate
                  </Link>
                  <Link href="#" className={style.mobile_footer_companies_link}>
                    Publishing
                  </Link>
                  <Link href="#" className={style.mobile_footer_companies_link}>
                    Automotive
                  </Link>
                  <Link href="#" className={style.mobile_footer_companies_link}>
                    Vehicle Leasing
                  </Link>
                </div>
              </div>
              <div className={style.mobile_footer_security_icons}>
                <Image
                  src="/secure-logo-mobile-footer.svg"
                  alt="secure_lock"
                  height={17}
                  width={17}
                />
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
