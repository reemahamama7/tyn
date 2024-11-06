// import "./App.css";
// import Header from "./components/Header";
// import Intro from "./components/Intro";
// import Services from "./components/Services";
// import Works from "./components/Works";
// import Contact from "./components/Contact";

// import { useEffect } from "react";
// import "./vendor.css";
// import "./style.css";
// // import { initializePlugin } from "./plugins";

// import "./main.js";
// function App() {
//   useEffect(() => {
//     // initializePlugin();
//     // Access the <html> element
//     const htmlElement = document.documentElement;

//     // Remove 'no-js' classNameName and add 'js' classNameName
//     htmlElement.classNameList.remove("no-js"); // Corrected to classNameList
//     htmlElement.classNameList.add("js");
//   }, []);
//   return (
//     <>
//       <div id="top">
//         {/* <div id="preloader">
//           <div id="loader"></div>
//         </div> */}
//         <div className="s-pagewrap">
//           <Header />
//           <section id="intro" className="s-intro target-section">
//             <Intro />
//           </section>
//           <section id="services" className="s-services target-section">
//             <Services />
//           </section>
//           <section id="works" className="s-works target-section">
//             <Works />
//           </section>
//           <section id="contact" className="s-contact target-section">
//             <Contact />
//           </section>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Services from "./components/Services";
import Works from "./components/Works";
import Contact from "./components/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./vendor.css";
import "./style.css";
// import { initializePlugin } from "./plugins";

import "./main.js";

function App() {
  useEffect(() => {
    // initializePlugin();
    // Access the <html> element
    const htmlElement = document.documentElement;

    // Remove 'no-js' class and add 'js' class
    htmlElement.classList.remove("no-js"); // Corrected to classList
    htmlElement.classList.add("js");
  }, []);

  return (
    <>
      <div id="top">
        {/* <div id="preloader">
          <div id="loader"></div>
        </div> */}
        <div className="s-pagewrap">
          <Header />
          <section id="intro" className="s-intro target-section">
            <Intro />
          </section>
          <section id="services" className="s-services target-section">
            <Services />
          </section>
          <section id="works" className="s-works target-section">
            <Works />
          </section>
          <section id="contact" className="s-contact target-section">
            <Contact />
          </section>
        </div>
        {/*  */}
        <div aria-hidden="true" className="pswp" role="dialog" tabindex="-1">
          <div className="pswp__bg"></div>
          <div className="pswp__scroll-wrap">
            <div className="pswp__container">
              <div className="pswp__item"></div>
              <div className="pswp__item"></div>
              <div className="pswp__item"></div>
            </div>

            <div className="pswp__ui pswp__ui--hidden">
              <div className="pswp__top-bar">
                <div className="pswp__counter"></div>
                <button className="pswp__button pswp__button--close" title="Close (Esc)"></button> <button className="pswp__button pswp__button--share" title="Share"></button> <button className="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>{" "}
                <button className="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
                <div className="pswp__preloader">
                  <div className="pswp__preloader__icn">
                    <div className="pswp__preloader__cut">
                      <div className="pswp__preloader__donut"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                <div className="pswp__share-tooltip"></div>
              </div>
              <button className="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button> <button className="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>
              <div className="pswp__caption">
                <div className="pswp__caption__center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
