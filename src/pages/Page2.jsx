import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect } from "react";

const Page2 = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(".rotateText", {
      transform: "rotateX(-80deg)",
      opacity: 0,
      duration: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: ".rotateText",
        start: "top 60%",
        end: "top -325%",
        scrub: true,
      },
    });
  }, []);

  const animation = () => {
    console.log("hello");
  };

  useEffect(() => {
    animation();
  });

  return (
    <div id="section2" className="bg-white text-center p-20 overflow-x-hidden">
      <h3 className="text-gray-500 text-lg font-[font4]">
        ©InertiaWebTechnologies | designed and developed by @susantaRay786
      </h3>
      <div className="rotateText mt-40">
        <h1 className="text-[40vw] text-black font-[font1] leading-[33vw]">
          DESIGN
        </h1>
      </div>
      <div className="rotateText">
        <h1 className="text-[40vw] text-black font-[font1] leading-[33vw]">
          THAT
        </h1>
      </div>
      <div className="rotateText">
        <h1 className="text-[40vw] text-black font-[font1] leading-[33vw]">
          DELIVERS
        </h1>
      </div>
      <div className="rotateText">
        <h1 className="text-[40vw] text-black font-[font1] leading-[33vw]">
          SOLUTIONS
        </h1>
      </div>
      <div className="rotateText">
        <h1 className="text-[40vw] text-black font-[font1] leading-[33vw]">
          THAT
        </h1>
      </div>
      <div className="rotateText relative">
        {/* <canvas className="h-full -translate-y-8 w-[80%] absolute left-1/2 -translate-x-1/2 bg-red-600"></canvas> */}
        <h1 className="text-[40vw] text-black font-[font1] leading-[33vw]">
          CONNECTS
        </h1>
      </div>

      <div className="flex w-full items-center justify-center gap-[10vw] mt-10">
        <img
          className="w-[4vw]"
          src="src\assets\svg\wordpress.svg"
          alt="wordpress logo"
        />
        <img
          className="w-[4vw]"
          src="src\assets\svg\shopify.svg"
          alt="shopify logo"
        />
        <img
          className="w-[4vw]"
          src="src\assets\svg\react.svg"
          alt="react logo"
        />
        <img
          className="w-[4vw]"
          src="src\assets\svg\redux.svg"
          alt="redux logo"
        />
        <img
          className="w-[4vw]"
          src="src\assets\svg\mongodb.svg"
          alt="mongoDB logo"
        />
      </div>
      <div className="h-[2px] w-1/3 relative left-1/2 -translate-x-1/2 mt-32 bg-black"></div>
    </div>
  );
};

export default Page2;
