import React, { useEffect, useRef } from "react";
import Tab from "../../images/erp-app-development-service.png";
import { gsap } from "gsap";
// import bg from "../../images/interior.jpg";

const Page6 = () => {
   const tab = useRef(null);

   useEffect(() => {
      gsap.fromTo(
         tab.current,
         {
            x: "-30vw",
            y: "100vh",
         },
         {
            y: 0,
            duration: 0.5,
         }
      );
   }, []);

   return (
      <div
         //  style={{
         //     backgroundImage: { bg },
         //     backgroundSize: "cover",
         //     backgroundRepeat: "no-repeat",
         //  }}
         id="page6"
      >
         <img src={Tab} ref={tab} alt="" />
      </div>
   );
};

export default Page6;
