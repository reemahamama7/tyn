import React from "react";
import tulips from "../assets/portfolio/gallery/g-tulips.jpg";
import tulips2x from "../assets/portfolio/tulips2x.jpg";
import minimalismo from "../assets/portfolio/minimalismo.jpg";
import minimalismo2x from "../assets/portfolio/minimalismo2x.jpg";
import skaterboy from "../assets/portfolio/skaterboy.jpg";
import skaterboy2x from "../assets/portfolio/skaterboy2x.jpg";
import rucksack from "../assets/portfolio/rucksack.jpg";
import rucksack2x from "../assets/portfolio/rucksack2x.jpg";
import woodcraft from "../assets/portfolio/woodcraft.jpg";
import woodcraft2x from "../assets/portfolio/woodcraft2x.jpg";
import lamp from "../assets/portfolio/lamp.jpg";
import lamp2x from "../assets/portfolio/lamp2x.jpg";
import grayscale from "../assets/portfolio/grayscale.jpg";
import grayscale2x from "../assets/portfolio/grayscale2x.jpg";
import user from "../assets/avatars/user-02.jpg";
import user4 from "../assets/avatars/user-04.jpg";
import user5 from "../assets/avatars/user-05.jpg";
import user6 from "../assets/avatars/user-06.jpg";
import shutterbug from "../assets/portfolio/shutterbug.jpg";
import shutterbug2x from "../assets/portfolio/shutterbug2x.jpg";
import fuji from "../assets/portfolio/fuji.jpg";
import fuji2x from "../assets/portfolio/fuji2x.jpg";
import one from "../assets/icons/clients/dropbox.svg";
import tow from "../assets/icons/clients/atom.svg";
import three from "../assets/icons/clients/github.svg";
import five from "../assets/icons/clients/medium.svg";
import six from "../assets/icons/clients/messenger.svg";
import seven from "../assets/icons/clients/redhat.svg";
import eghit from "../assets/icons/clients/spotify.svg";
import nine from "../assets/icons/clients/steam.svg";
import "../vendor.css";
import "../style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Workes = () => {
  return (
    <>
      <div className="row section-header section-header--dark has-bottom-sep">
        <div className="column lg-12">
          <h3 className="text-pretitle">Recent Works</h3>
          <h1 className="text-display-title">Here are some of our favorite projects we have done lately. Feel free to check them out.</h1>
        </div>
      </div>
      <div className="row folio-list block-lg-one-third block-tab-one-half block-stack-on-550 collapse" data-animate-block>
        {/* Portfolio items */}
        <div className="column">
          <div className="folio-item" data-animate-el>
            <div className="folio-item__thumb">
              <a className="folio-item__thumb-link" href="./assets/portfolio/gallery/g-tulips.jpg" title="The Red Wheel" data-size="1050x700">
                <img src={tulips} srcSet={`${tulips} 1x, ${tulips2x} 2x`} alt="" />
              </a>
            </div>
            <div className="folio-item__info">
              <div className="folio-item__cat">Branding</div>
              <h4 className="folio-item__title">Coffee & Tulips</h4>
            </div>
            <a href="https://www.behance.net/" title="Project Link" className="folio-item__project-link">
              Project Link
            </a>
            <div className="folio-item__caption">
              <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>
            </div>
          </div>
        </div>
        {/* Repeat similar blocks for other portfolio items */}
      </div>

      {/* Clients section */}
      <div className="row clients-outer" data-animate-block>
        <div className="column lg-12">
          <h3 className="text-clients-title" data-animate-el>
            We've had the privilege of working with some of the largest and most iconic brands
          </h3>

          <Swiper modules={[Pagination, Navigation]} pagination={{ clickable: true }} navigation={false} spaceBetween={30} slidesPerView={6} loop={true}>
            <SwiperSlide>
              <img src={one} alt="Client logo 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={tow} alt="Client logo 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={three} alt="Client logo 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={five} alt="Client logo 4" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={six} alt="Client logo 5" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={seven} alt="Client logo 6" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={eghit} alt="Client logo 7" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={nine} alt="Client logo 8" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="video-block">
        <span className="video-block__bg-left"></span>
        <span className="video-block__bg-right"></span>

        <div className="video-block__content">
          <a href="https://player.vimeo.com/video/14592941?color=00a650&title=0&byline=0&portrait=0" class="video-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style={{
                fill: "rgba(0, 0, 0, 1)",
                transform: "rotate(90deg)", // Rotate element by 90 degrees
                msFilter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)",
              }}
            >
              <path d="M7 6L7 18 17 12z"></path>
            </svg>
          </a>

          <p className="video-caption">Watch Video</p>
        </div>
      </div>
      {/* Testimonials Section */}
      <div className="row testimonials" data-animate-block>
        <div className="column lg-12">
          <Swiper modules={[Pagination]} pagination={{ clickable: true }} spaceBetween={30} slidesPerView={2}>
            <SwiperSlide>
              <div className="testimonial-slider__slide">
                <div className="testimonial-slider__author">
                  <img src={user} alt="Author image" className="testimonial-slider__avatar" />
                  <cite className="testimonial-slider__cite">
                    <strong>Tim Cook</strong>
                    <span>CEO, Apple</span>
                  </cite>
                </div>
                <p>Molestiae incidunt consequatur quis ipsa autem nam sit enim magni. Voluptas tempore rem.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-slider__slide">
                <div className="testimonial-slider__author">
                  <img src={user} alt="Author image" className="testimonial-slider__avatar" />
                  <cite className="testimonial-slider__cite">
                    <strong>Tim Cook</strong>
                    <span>CEO, Apple</span>
                  </cite>
                </div>
                <p>Molestiae incidunt consequatur quis ipsa autem nam sit enim magni. Voluptas tempore rem.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-slider__slide">
                <div className="testimonial-slider__author">
                  <img src={user} alt="Author image" className="testimonial-slider__avatar" />
                  <cite className="testimonial-slider__cite">
                    <strong>Tim Cook</strong>
                    <span>CEO, Apple</span>
                  </cite>
                </div>
                <p>Molestiae incidunt consequatur quis ipsa autem nam sit enim magni. Voluptas tempore rem.</p>
              </div>
            </SwiperSlide>
            {/* Add more SwiperSlides for other testimonials */}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Workes;
