import "./Footer.css";

import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer" id="footer">

      <div className="footer-container">

        <div className="footer-col">

          <h2>
            FIT<span>ZONE</span>
          </h2>

          <p>
            Transform your body, strengthen your mind,
            and become the best version of yourself.
          </p>

          <div className="footer-social">
            <FaInstagram />
            <FaFacebookF />
            <FaTwitter />
            <FaYoutube />
          </div>

        </div>

        <div className="footer-col">

          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#programs">Programs</a>
          <a href="#membership">Membership</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>

        </div>

        <div className="footer-col">

          <h3>Working Hours</h3>

          <p>Monday - Friday</p>
          <p>6:00 AM - 10:00 PM</p>

          <p>Saturday</p>
          <p>7:00 AM - 9:00 PM</p>

          <p>Sunday</p>
          <p>Closed</p>

        </div>

      </div>

      <hr />

      <div className="footer-bottom">

        <p>
          © 2026 FitZone. All Rights Reserved.
        </p>

        <a href="#home" className="top-btn">
          <FaArrowUp />
        </a>

      </div>

    </footer>
  );
}

export default Footer;