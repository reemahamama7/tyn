import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "../vendor.css";
import "../style.css";
import "../main.js";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set animation duration (in ms)
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <>
      <div className="row section-header has-bottom-sep" data-aos="fade-up">
        <div className="column lg-12">
          <h3 className="text-pretitle">What We Do</h3>
          <h1 className="text-display-title">
            We’ve got everything you <br />
            need to launch and grow <br />
            your business
          </h1>
        </div>
      </div>

      <div className="row services-list block-lg-one-half block-tab-whole" data-aos="fade-up">
        <div className="column service-item" data-aos="fade-right">
          <div className="service-icon-block">
            <span className="service-icon service-icon--product-design"></span>
          </div>
          <div className="service-text">
            <h3 className="h4">Product Design</h3>
            <p>Nemo cupiditate ab quibusdam quaerat impedit magni...</p>
          </div>
        </div>

        <div className="column service-item" data-aos="fade-right" data-aos-delay="100">
          <div className="service-icon-block">
            <span className="service-icon service-icon--branding"></span>
          </div>
          <div className="service-text">
            <h3 className="h4">Branding</h3>
            <p>Nulla pharetra diam sit amet nisl suscipit adipiscing...</p>
          </div>
        </div>

        <div className="column service-item" data-aos="fade-right" data-aos-delay="200">
          <div className="service-icon-block">
            <span className="service-icon service-icon--frontend"></span>
          </div>
          <div className="service-text">
            <h3 className="h4">Frontend Development</h3>
            <p>Eleifend donec pretium vulputate sapien nec sagittis...</p>
          </div>
        </div>

        <div className="column service-item" data-aos="fade-right" data-aos-delay="300">
          <div className="service-icon-block">
            <span className="service-icon service-icon--research"></span>
          </div>
          <div className="service-text">
            <h3 className="h4">UX Research</h3>
            <p>Nemo cupiditate ab quibusdam quaerat impedit magni...</p>
          </div>
        </div>

        <div className="column service-item" data-aos="fade-right" data-aos-delay="400">
          <div className="service-icon-block">
            <span className="service-icon service-icon--illustration"></span>
          </div>
          <div className="service-text">
            <h3 className="h4">Illustration</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          </div>
        </div>

        <div className="column service-item" data-aos="fade-right" data-aos-delay="500">
          <div className="service-icon-block">
            <span className="service-icon service-icon--ecommerce"></span>
          </div>
          <div className="service-text">
            <h3 className="h4">E-Commerce</h3>
            <p>Nullam eget felis eget nunc. Adipiscing commodo elit...</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
