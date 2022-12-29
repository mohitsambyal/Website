import React from 'react';
import CopyRights from "./CopyRights";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col- col-sm-12 col-md-6 col-lg-4 footer-logo animate-in" data-anim-type="fade-in-right-big">
              <img src="/images/solar-logo-01.svg" alt="img" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed
                nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis
                ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
                Mauris massa.
              </p>
            </div>
            <div className="col- col-sm-12 col-md-6 col-lg-3 footer-menu animate-in" data-anim-type="bounce-in-up-large">
              <h2>Important Links</h2>
              <ul>
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="/service">Services</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="col- col-sm-12 col-md-6 col-lg-2 footer-menu animate-in" data-anim-type="bounce-in-down-large">
              <h2>Support</h2>
              <ul>
                <li>
                  <a href="#">Submit a Support Ticket</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
              <h2 className="referral-headding">Referral</h2>
              <ul>
                <li>
                  <a href="#">Make a Referral</a>
                </li>
              </ul>
            </div>
            <div className="col- col-sm-12 col-md-6 col-lg-3 footer-contact animate-in" data-anim-type="fade-in-left-big">
              <h2>Contact Info</h2>
              <ul>
                <li>
                  <a href="#">
                    <span>
                      <img src="/images/footer-commercial-icon.png" alt="img" />
                    </span>
                    <strong>
                      2945 Still Pastures Drive, South Carolina 29148
                    </strong>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      <img src="/images/footer-phone-icon.png" alt="img" />
                    </span>
                    <strong>(202) 555-0161</strong>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      <img src="/images/footer-mail-icon.png" alt="img" />
                    </span>
                    <strong>info@example.com</strong>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

     <CopyRights />
    </>
  );
}
export default Footer;
