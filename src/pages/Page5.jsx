import React from "react";

function Page5() {
  return (
    <div className="h-screen relative p-10 bg-white">
      <div className="h-full w-full overflow-hidden bg-black rounded-[50px]">
        <video
          loop
          muted
          autoPlay="true"
          src="videos/moon.mp4"
          className="h-full w-full object-cover"
        ></video>
        <h1 className="absolute bottom-[5vw] right-[5vw] text-white text-[20vw] font-[font1]">
          ABOUT
        </h1>
      </div>
    </div>
  );
}

export default Page5;
