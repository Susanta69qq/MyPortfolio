import React from "react";

function TiltText({refer}) {
  return (
    <div id="tiltDiv" ref={refer} className="mt-[8vw] max-sm:text-center max-sm:mt-[20vw]">
      <h1 className="text-[4vw] max-sm:text-[8vw] font-[font3] leading-[5vw] max-sm:leading-[10vw]">
        I AM A <span className="text-[#ff0000]">FULL-STACK</span>
      </h1>
      <h1 className="text-[5vw] max-sm:text-[7.5vw] font-[font3] leading-[5vw] max-sm:leading-[10vw]">
        WEBDEVELOPER/DESIGNER
      </h1>
      <h1 className="text-[4vw] max-sm:text-[8vw] font-[font3] leading-[5vw] max-sm:leading-[10vw]">TO HIRE</h1>
    </div>
  );
}

export default TiltText;
