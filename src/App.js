import "./App.css";
// import Svg from "./components/SVG/Svg";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import BgImg from "./images/interior.jpg";
// import Page4 from "./components/Pages/Page4";
// import Page3 from "./components/Pages/Page3";
// import Page2 from "./components/Pages/Page2";
// import Page1 from "./components/Pages/Page1";
// import Page5 from "./components/Pages/Page5";
// import Page6 from "./components/Pages/Page6";
// import Page7 from "./components/Pages/Page7";
// import Title1 from "./components/Titles/Title1";
// import Title2 from "./components/Titles/Title2";
// import Title3 from "./components/Titles/Title3";
// import Title4 from "./components/Titles/Title4";
// import Title6 from "./components/Titles/Title6";
// import Title5 from "./components/Titles/Title5";
// import Title7 from "./components/Titles/Title7";
import Heading1 from "./components/Headings/Heading1";
import Heading2 from "./components/Headings/Heading2";
import Heading3 from "./components/Headings/Heading3";
import Heading5 from "./components/Headings/Heading5";
import Heading6 from "./components/Headings/Heading6";
import Heading7 from "./components/Headings/Heading7";
import Heading4 from "./components/Headings/Heading4";
// import Small from "./components/Sizes/Small";

gsap.registerPlugin(ScrollTrigger);

function App() {
   const [scrollResult, setScrollResult] = useState(0);
   const [textChange, setTextChange] = useState(0);

   const left = useRef(null);

   useEffect(() => {
      window.addEventListener("scroll", () => {
         setScrollResult((window.scrollY / 585) * 100);
         const scroll = parseInt((window.scrollY / 4747) * 100);
         setTextChange(scroll);
      });
   }, []);

   return (
      <div
         className="App"
         style={{
            background: "#6311A8",
         }}
      >
         <div id="large">
            <div
               ref={left}
               id="left"
               style={{
                  backgroundColor:
                     textChange >= 0 && textChange < 16
                        ? "#6311A8"
                        : textChange >= 16 && textChange < 33
                        ? "#4D27CD"
                        : textChange >= 33 && textChange < 50
                        ? "#0E123A"
                        : textChange >= 33 && textChange < 50
                        ? "#16263B"
                        : textChange >= 50 && textChange < 65
                        ? "#16263B"
                        : textChange >= 65 && textChange < 82
                        ? "#124CA1"
                        : textChange >= 82 && textChange < 100
                        ? "#012C91"
                        : "#00834C",
               }}
            >
               <div id="heading">
                  {textChange >= 0 && textChange < 16 ? (
                     <Heading1></Heading1>
                  ) : textChange >= 16 && textChange < 33 ? (
                     <Heading2></Heading2>
                  ) : textChange >= 33 && textChange < 50 ? (
                     <Heading3></Heading3>
                  ) : textChange >= 50 && textChange < 65 ? (
                     <Heading4></Heading4>
                  ) : textChange >= 65 && textChange < 83 ? (
                     <Heading5></Heading5>
                  ) : textChange >= 50 && textChange < 99 ? (
                     <Heading6></Heading6>
                  ) : (
                     <Heading7></Heading7>
                  )}
               </div>
               {/*  */}
            </div>
         </div>
      </div>
   );
}

export default App;
