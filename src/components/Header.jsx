import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";

function Header() {
  const [onClick, setOnClick] = useState(false);

  const handleClick = () => {
    setOnClick(!onClick);
  };
  return (
    <div>
      <div className="fixed w-full flex items-center justify-end z-[100] p-20">
        <button
          onClick={() => handleClick()}
          className="bg-black w-[120px] px-4 py-2 rounded-full border-2 hover:bg-gray-500 transition-all duration-300 z-[100]"
        >
          {onClick ? <i className="ri-close-large-line"></i> : "Hire me"}
        </button>
        <i className="ri-more-2-fill text-2xl ml-3"></i>
      </div>
      <div className="bg-white relative">
        <div
          className={`fixed inset-0 bg-white transition-transform duration-300 ${
            onClick ? "translate-x-0" : "translate-x-full"
          } z-[99] p-6`}
        >
          <div
            className="w-full h-full rounded-[50px] flex items-end justify-between py-12 px-6"
            style={{
              backgroundImage: "url(/images/earth.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="flex flex-col gap-2 items-start justify-start">
              <span className="flex items-center gap-[1.5vw] font-[font3] text-[1.1vw]">
                <i className="ri-at-line text-gray-400"></i>{" "}
                <a
                  href="mailto:susantaray786@gmail"
                  className="cursor-pointer hover:scale-110 transition-transform duration-300"
                >
                  <h4>susantaray786@gmail.com</h4>
                </a>
              </span>
              <span className="flex items-center gap-[1.5vw] font-[font3] text-[1.1vw]">
                <i className="ri-global-line text-gray-400"></i>
                <a
                  href="https://inertiawebtech.netlify.app/"
                  target="_blank"
                  className="cursor-pointer hover:scale-110 transition-transform duration-300"
                >
                  <h4>inertiawebtech.com</h4>
                </a>
              </span>
            </div>
            <div className="flex flex-col items-end justify-end h-full px-24 py-16">
              <h1 className="text-[#8F8F8F] text-[8vw] font-[font1] leading-[8vw]">
                SUSANTA
              </h1>
              <h1 className="text-[4.25vw] font-[font1] leading-[2vw]">
                [RAY]
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
