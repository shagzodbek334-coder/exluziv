import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";


function Footer() {
  return (
    <>


      <footer className="footer">
        <div className="c">
          <div className="footer-grid">

            <div>
              <h2>Exclusive</h2>
              <p className="sub">Subscribe</p>
              <p>Get 10% off your first order</p>
              <div className="input-box">
                <input type="email" placeholder="Enter your email" />
                <button>➤</button>
              </div>
            </div>

            <div>
              <h3>Support</h3>
              <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
              <p>exclusive@gmail.com</p>
              <p>+88015-88888-9999</p>
            </div>

            <div>
              <h3>Account</h3>
              <ul>
                <b>My Account</b>
                <b>Login / Register</b>
                <b>Cart</b>
                <b>Wishlist</b>
                <b>Shop</b>
              </ul>
            </div>

            <div>
              <h3>Quick Link</h3>
              <ul>
                <b>Privacy Policy</b>
                <b>Terms Of Use</b>
                <b>FAQ</b>
                <b>Contact</b>
              </ul>
            </div>

            <div>
              <h3>Download App</h3>
              <p>Save $3 with App New User Only</p>
              <div className="apps">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/QR_code_example.svg" alt="" />
                <div className="stores">
                  <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="" />
                </div>
              </div>

              <div className="socials">
                <FaFacebookF />
                <FaTwitter />
                <FaInstagram />
                <FaLinkedinIn />
              </div>
            </div>

          </div>

          <div className="bottom">
            <p>© Copyright Rimel 2022. All right reserved</p>
          </div>
        </div>
      </footer>
      

    </>
  )
}

export default Footer