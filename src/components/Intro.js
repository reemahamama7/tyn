// import React, { useState } from "react";
// import { useEffect } from "react";

// import "../vendor.css";
// import "../style.css";

// const Intro = () => {
//   return (
//     <>
//       <>
//         <div className="row">
//           <div className="column">
//             <div className="s-intro__top-block">
//               <span className="s-intro__bg"></span>

//               <h1 className="s-intro__text">
//                 We're a creative group <br />
//                 of people who design <br />
//                 influential br/ands and <br />
//                 digital experiences<span>.</span>
//               </h1>

//               <a href="#services" className="s-intro__scroll-down smoothscroll">
//                 <span>Scroll Down</span>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   style={{
//                     fill: "rgba(0, 0, 0, 1)",
//                     transform: "rotate(180deg)",
//                     msFilter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)",
//                   }}
//                 >
//                   <path d="M21 11L6.414 11 11.707 5.707 10.293 4.293 2.586 12 10.293 19.707 11.707 18.293 6.414 13 21 13z"></path>
//                 </svg>
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="row row-x-center s-intro__about-wrap">
//           <div className="column s-intro__about">
//             <h2 className="s-intro__about-title">Hello, We Are Tyndale.</h2>

//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
//               reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.
//             </p>
//           </div>
//         </div>
//         <div className="row about-stats stats block-lg-one-fourth block-md-one-half block-mob-whole" data-animate-block>
//           <div className="column stats__item" data-animate-el>
//             <div className="stats__count" data-counter="30" />
//             <span>30</span>+
//           </div>
//           <h5>Happy Customers</h5>
//           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
//         </div>
//         <div className="column stats__item" data-animate-el>
//           <div className="stats__count" data-counter />
//           35<span>35</span>+
//         </div>
//         <h5>Hours Work</h5>
//         <p>Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Eu scelerisque felis imperdiet proin fermentum leo. Cursus turpis massa tincidunt.</p>
//       </>
//       <>
//         <div className="column stats__item" data-animate-el>
//           <div className="stats__count" data-counter />
//           41<span>41</span>+
//         </div>
//         <h5>Coffee Drinks</h5>
//         <p>Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Est velit egestas dui id ornare. Leo urna molestie at elementum.</p>
//       </>
//       <>
//         <div className="column stats__item" data-animate-el>
//           <div className="stats__count" data-counter />
//           38<span>38</span>+
//         </div>
//         <h5>Completed Projects</h5>
//         <p>Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est. Quis risus sed vulputate odio ut. Lectus arcu bibendum at varius vel eu facilisis.</p>
//       </>
//     </>
//   );
// };

// export default Intro;
// import React from "react";
// import CountUp from "react-countup";
// import "../vendor.css";
// import "../style.css";

// const Intro = () => {
//   return (
//     <>
//       <div className="row">
//         <div className="column">
//           <div className="s-intro__top-block">
//             <span className="s-intro__bg"></span>

//             <h1 className="s-intro__text">
//               We're a creative group <br />
//               of people who design <br />
//               influential brands and <br />
//               digital experiences<span>.</span>
//             </h1>

//             <a href="#services" className="s-intro__scroll-down smoothscroll">
//               <span>Scroll Down</span>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 style={{
//                   fill: "rgba(0, 0, 0, 1)",
//                   transform: "rotate(180deg)",
//                   msFilter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)",
//                 }}
//               >
//                 <path d="M21 11L6.414 11 11.707 5.707 10.293 4.293 2.586 12 10.293 19.707 11.707 18.293 6.414 13 21 13z"></path>
//               </svg>
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="row row-x-center s-intro__about-wrap">
//         <div className="column s-intro__about">
//           <h2 className="s-intro__about-title">Hello, We Are Tyndale.</h2>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
//             reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.
//           </p>
//         </div>
//       </div>

//       <div className="row about-stats stats">
//         <div className="column stats__item">
//           <div className="stats__count">
//             <CountUp end={30} duration={2} />+
//           </div>
//           <h5>Happy Customers</h5>
//           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
//         </div>

//         <div className="column stats__item">
//           <div className="stats__count">
//             <CountUp end={35} duration={2} />+
//           </div>
//           <h5>Hours Worked</h5>
//           <p>Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Eu scelerisque felis imperdiet proin fermentum leo. Cursus turpis massa tincidunt.</p>
//         </div>

//         <div className="column stats__item">
//           <div className="stats__count">
//             <CountUp end={41} duration={2} />+
//           </div>
//           <h5>Coffee Drinks</h5>
//           <p>Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Est velit egestas dui id ornare. Leo urna molestie at elementum.</p>
//         </div>

//         <div className="column stats__item">
//           <div className="stats__count">
//             <CountUp end={38} duration={2} />+
//           </div>
//           <h5>Completed Projects</h5>
//           <p>Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est. Quis risus sed vulputate odio ut. Lectus arcu bibendum at varius vel eu facilisis.</p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Intro;
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "../vendor.css";
import "../style.css";

const Intro = () => {
  // Use the Intersection Observer to trigger counters when in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Run once when it enters the view
    threshold: 0.3, // Start the animation when 30% of the component is in view
  });

  return (
    <>
      <div className="row">
        <div className="column">
          <div className="s-intro__top-block">
            <span className="s-intro__bg"></span>

            <h1 className="s-intro__text">
              We're a creative group <br />
              of people who design <br />
              influential brands and <br />
              digital experiences<span>.</span>
            </h1>

            <a href="#services" className="s-intro__scroll-down smoothscroll">
              <span>Scroll Down</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{
                  fill: "rgba(0, 0, 0, 1)",
                  transform: "rotate(180deg)",
                  msFilter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)",
                }}
              >
                <path d="M21 11L6.414 11 11.707 5.707 10.293 4.293 2.586 12 10.293 19.707 11.707 18.293 6.414 13 21 13z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="row row-x-center s-intro__about-wrap">
        <div className="column s-intro__about">
          <h2 className="s-intro__about-title">Hello, We Are Tyndale.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.
          </p>
        </div>
      </div>

      <div className="row about-stats stats" ref={ref}>
        <div className="column stats__item">
          <div className="stats__count">{inView && <CountUp end={30} duration={2} />}+</div>
          <h5>Happy Customers</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>

        <div className="column stats__item">
          <div className="stats__count">{inView && <CountUp end={35} duration={2} />}+</div>
          <h5>Hours Worked</h5>
          <p>Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Eu scelerisque felis imperdiet proin fermentum leo. Cursus turpis massa tincidunt.</p>
        </div>

        <div className="column stats__item">
          <div className="stats__count">{inView && <CountUp end={41} duration={2} />}+</div>
          <h5>Coffee Drinks</h5>
          <p>Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Est velit egestas dui id ornare. Leo urna molestie at elementum.</p>
        </div>

        <div className="column stats__item">
          <div className="stats__count">{inView && <CountUp end={38} duration={2} />}+</div>
          <h5>Completed Projects</h5>
          <p>Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est. Quis risus sed vulputate odio ut. Lectus arcu bibendum at varius vel eu facilisis.</p>
        </div>
      </div>
    </>
  );
};

export default Intro;
