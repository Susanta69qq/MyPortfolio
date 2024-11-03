import React from "react";

function TiltText({refer}) {
  return (
    <div id="tiltDiv" ref={refer} className="mt-[8vw]">
      <h1 className="text-[4vw] font-[font3] leading-[5vw]">
        I AM A <span className="text-[#ff0000]">FULL-STACK</span>
      </h1>
      <h1 className="text-[5vw] font-[font3] leading-[5vw]">
        WEBDEVELOPER/DESIGNER
      </h1>
      <h1 className="text-[4vw] font-[font3] leading-[5vw]">TO HIRE</h1>
    </div>
  );
}

export default TiltText;
