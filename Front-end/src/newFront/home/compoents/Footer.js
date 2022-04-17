import React from "react";
import "./footerStyle.css";

function Footer() {
  return (
    <div class="footer-dark" id="aboutFooter">
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-md-3 item">
              <h3>Services</h3>
              <ul>
                <li>
                  <a href="#">Basic training</a>
                </li>
                <li>
                  <a href="#">Body Building</a>
                </li>
                <li>
                  <a href="#">Yoga</a>
                </li>
              </ul>
            </div>
            <div class="col-sm-6 col-md-3 item">
              <h3>About</h3>
              <ul>
                <li>
                  <a href="#">Company</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>
            <div class="col-md-6 item text">
              <h3>FITWAY</h3>
              <p>
                If we could give every individual the right amount of
                nourishment and exercise, not too little and not too much, we
                would have found the safest way to health
              </p>
            </div>
            <div class="col item social">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <i class="bi bi-facebook"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <i class="bi bi-instagram"></i>
              </a>
              <a href="https://twitter.com/?lang=en" target="_blank" rel="noopener noreferrer">
                <i class="bi bi-twitter"></i>
              </a>
              <a href="https://www.snapchat.com/ " target="_blank" rel="noopener noreferrer">
                <i class="bi bi-snapchat"></i>
              </a>
            </div>
          </div>
          <br />
          <p class="copyright bringCenter">FITWAY.ltd © 2018</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
