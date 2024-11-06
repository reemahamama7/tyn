import React, { useState } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../vendor.css";
import "../style.css";
import "../main.js";
const Contact = () => {
  return (
    <>
      <div className="row section-header section-header--dark">
        <div className="column lg-12">
          <h3 className="text-pretitle">Get In Touch</h3>
          <h1 className="text-display-title">Do you have an idea or an epic project in mind? Let’s work together.</h1>
        </div>
      </div>

      <div className="row row-x-center text-center s-contact__content">
        <div className="column lg-12">
          <p className="lead">Nunc interdum lacus sit amet orci. Vestibulum dapibus nunc ac augue. Fusce vel dui. In ac felis quis tortor malesuada pretium. Curabitur vestibulum aliquam leo. Quasi sed at voluptas corrupti eius distinctio.</p>
          <div className="btn-wrap">
            <a href="#0" className="btn btn--primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{
                  fill: "rgba(0, 0, 0, 1)",
                  transform: "",
                  msFilter: "",
                }}
              >
                <path d="M20,4H4C2.897,4,2,4.897,2,6v12c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2V6C22,4.897,21.103,4,20,4z M20,6v0.511 l-8,6.223L4,6.512V6H20z M4,18V9.044l7.386,5.745C11.566,14.93,11.783,15,12,15s0.434-0.07,0.614-0.211L20,9.044L20.002,18H4z"></path>
              </svg>
              Write An Email
            </a>
          </div>
        </div>
      </div>

      <footer className="s-footer">
        <div className="row s-footer__top">
          <div className="column lg-5 md-8 stack-on-700 s-footer__block contact-address">
            <h4 className="h6">Where to Find Us</h4>

            <p>
              1600 Amphitheatre Parkway <br />
              Mountain View, California <br />
              94043 US
            </p>
          </div>

          <div className="column lg-3 md-4 stack-on-700 s-footer__block contact-social">
            <h4 className="h6">Follow Us</h4>

            <ul className="contact-list">
              <li>
                <a href="#0">Facebook</a>
              </li>
              <li>
                <a href="#0">Twitter</a>
              </li>
              <li>
                <a href="#0">Instagram</a>
              </li>
            </ul>
          </div>

          <div className="column lg-3 md-12 s-footer__block contact-number">
            <h4 className="h6">Contact Us</h4>

            <ul className="contact-list">
              <li>
                <a href="mailto:#0">info@tyndale.com</a>
              </li>
              <li>
                <a href="tel:197-543-2345">+197 543 2345</a>
              </li>
              <li>
                <a href="tel:197-123-9876">+197 123 9876</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row s-footer__bottom">
          <div className="column ss-copyright">
            <span>© Copyright Tyndale 2021</span>
            <span>
              Design by <a href="https://www.styleshout.com/">StyleShout</a>
            </span>
          </div>

          <div className="ss-go-top">
            <a className="smoothscroll" title="Back to Top" href="#top">
              <span className="ss-go-top__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  style={{
                    fill: "rgba(0, 0, 0, 1)", // Set black fill with full opacity
                    transform: "rotate(90deg)", // Rotate element by 90 degrees
                    msFilter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)", // For older IE versions
                  }}
                >
                  <path d="M6 4H18V6H6zM11 14L11 20 13 20 13 14 18 14 12 8 6 14z"></path>
                </svg>
              </span>
              <span className="ss-go-top__text">Back to Top</span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Contact;
