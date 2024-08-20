import React from "react";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="logo">
            <img src="/logo-footer.svg" alt="Al Habtoor Logo" />
            <p>
              Member of the
              <br /> Al Habtoor Group
            </p>
          </div>
          <div className="nav-and-companies">
            <div className="nav">
              <div className="nav-section">
                <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Services</a>
                <a href="#">Offers</a>
              </div>
              <div className="nav-section">
                <a href="#">Locations</a>
                <a href="#">Contact Us</a>
                <a href="#">FAQ</a>
                <a href="#">Privacy Policy</a>
              </div>
              <div className="nav-section">
                <a href="#">Service Request</a>
                <a href="#">Career</a>
                <a href="#">Terms & Conditions</a>
                <a href="#">Sitemap</a>
              </div>
            </div>
            <div className="companies">
              <h3>Al Habtoor Companies</h3>
              <a href="#">Hospitality</a>
              <a href="#">Real Estate</a>
              <a href="#">Publishing</a>
              <a href="#">Automotive</a>
              <a href="#">Vehicle Leasing</a>
            </div>
          </div>

          <div className="social-links">
            <p>FOLLOW US ON</p>
            <div className="icons">
              <a href="#">
                <img src="/facebook-footer.svg" alt="Facebook" />
              </a>
              <a href="#">
                <img src="/x-footer.svg" alt="X-icon" />
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
            <div className="security-icons">
              <img src="/site-lock-logo.svg" alt="Sitelock Icon" />
              <img src="/secure-logo.svg" alt="Trust Sign Icon" />
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <hr />
          <p className="copyright">
            &copy; 2018 Diamondlease LLC - All Rights Reserved.
          </p>
        </div>
      </footer>

      {/*<!--Footer For Mobile-->*/}

      <section className="mobile-footer-footer">
        <div className="mobile-footer-container">
          <div className="mobile-footer-top">
            <div className="mobile-footer-logo">
              <img
                src="/logo-alhabtoor.svg"
                alt="Al Habtoor Logo"
                className="mobile-footer-logo-image"
              />
              <p className="mobile-footer-logo-text">
                Member of the
                <br />
                Al Habtoor Group
              </p>
            </div>
            <div className="mobile-footer-social-icons">
              <a href="#">
                <img
                  src="/facbook-mobile-footer.svg"
                  alt="Facebook"
                  className="mobile-footer-social-icon"
                />
              </a>
              <a href="#">
                <img
                  src="/x-mobile-footer.svg"
                  alt="X -Twitter"
                  className="mobile-footer-social-icon"
                />
              </a>
              <a href="#">
                <img
                  src="/insta-mobile-footer.svg"
                  alt="Instagram"
                  className="mobile-footer-social-icon"
                />
              </a>
              <a href="#">
                <img
                  src="/linkedin-mobile-footer.svg"
                  alt="LinkedIn"
                  className="mobile-footer-social-icon"
                />
              </a>
              <a href="#">
                <img
                  src="/youtube-mobilr-footer.svg"
                  alt="YouTube"
                  className="mobile-footer-social-icon"
                />
              </a>
            </div>
          </div>

          {/*  <!-- Other sections of the footer -->*/}
          <div className="mobile-footer-light">
            <div className="mobile-footer-nav-and-companies">
              <div className="mobile-footer-nav">
                <div className="mobile-footer-nav-section">
                  <a href="#" className="mobile-footer-nav-link">
                    Home
                  </a>
                  <a href="#" className="mobile-footer-nav-link">
                    Offers
                  </a>
                  <a href="#" className="mobile-footer-nav-link">
                    Career
                  </a>
                  <a href="#" className="mobile-footer-nav-link">
                    About Us
                  </a>
                </div>
                <div className="mobile-footer-nav-section">
                  <a href="#" className="mobile-footer-nav-link">
                    FAQ
                  </a>
                  <a href="#" className="mobile-footer-nav-link">
                    Terms & Conditions
                  </a>
                  <a href="#" className="mobile-footer-nav-link">
                    Service Request
                  </a>
                  <a href="#" className="mobile-footer-nav-link">
                    Privacy Policy
                  </a>
                </div>
              </div>
            </div>

            <div className="mobile-footer-black">
              <div className="mobile-footer-companies">
                <h3 className="mobile-footer-companies-heading">
                  Al Habtoor Companies
                </h3>
                <div className="mobile-footer-companies-list">
                  <a href="#" className="mobile-footer-companies-link">
                    Hospitality
                  </a>
                  <a href="#" className="mobile-footer-companies-link">
                    Real Estate
                  </a>
                  <a href="#" className="mobile-footer-companies-link">
                    Publishing
                  </a>
                  <a href="#" className="mobile-footer-companies-link">
                    Automotive
                  </a>
                  <a href="#" className="mobile-footer-companies-link">
                    Vehicle Leasing
                  </a>
                </div>
              </div>
              <div className="mobile-footer-security-icons ">
                <img src="/secure-logo-mobile-footer.svg" alt="secure-lock" />
              </div>
              <div className="mobile-footer-bottom">
                <hr className="mobile-footer-divider" />
                <p className="mobile-footer-copyright">
                  &copy; 2023 Car rental LLC - All Rights Reserved.
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
