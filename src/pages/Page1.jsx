import React, { useRef, useState } from "react";

import Page1Bottom from "../components/Page1Bottom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TiltText from "../components/TiltText";

function Page1() {
  const tiltRef = useRef(null);
  const [xVal, setXVal] = useState(0);
  const [yVal, setYVal] = useState(0);

  const mouseMoving = (e) => {
    setXVal(
      (e.clientX -
        tiltRef.current.getBoundingClientRect().x -
        tiltRef.current.getBoundingClientRect().width / 2) /
        60
    );
    setYVal(
      -(
        e.clientY -
        tiltRef.current.getBoundingClientRect().y -
        tiltRef.current.getBoundingClientRect().height / 2
      ) / 10
    );
  };

  useGSAP(() => {
    gsap.to(tiltRef.current, {
      transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
      duration: 1.5,
      ease: "elastic-out(1, 0.3)",
    });
  }, [xVal, yVal]);

  return (
    <div
      onMouseMove={(e) => {
        mouseMoving(e);
      }}
      className="h-screen max-sm:h-[70vh] bg-white p-6 max-sm:p-0"
    >
      <div
        id="page1-in"
        className="h-full w-full p-20 max-sm:py-[20vw] max-sm:px-[3vw] bg-[url(https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] 
        bg-cover rounded-[40px] max-sm:rounded-[0] shadow-xl shadow-gray-700 max-sm:flex max-sm:justify-center"
      >
        <TiltText refer={tiltRef} />
        <Page1Bottom />
      </div>
    </div>
  );
}

export default Page1;
