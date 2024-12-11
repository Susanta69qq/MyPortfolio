import React, { useEffect, useState } from "react";

function Page1Bottom() {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <div className="absolute bottom-0 left-0 w-full p-10 sm:p-16 md:p-24 max-sm:bottom-1/3">
      <div>
        <h2 className="text-2xl text-[#ff0000] font-[font2] max-sm:text-lg max-sm:text-center max-sm:leading-5">
          WEB DEVELOPMENT | MOBILE APP DEVELOPMENT | BRAND DESIGN
        </h2>
        <h3 className="text-[1.25vw] text-gray-400 font-[font3] max-sm:text-sm max-sm:text-center max-sm:mt-2">
          PRECISION FREELANCE
        </h3>

        {isMobile ? (
          <div className="mt-[5vw]">
            <h5 className="text-[1.25vw] text-gray-400 font-[font3] max-sm:text-sm max-sm:text-center max-sm:mt-2">
              For Business Queries
            </h5>
            <div className="businessEnquiry flex flex-col justify-center items-center">
              <a
                className="text-[1vw] text-[#ff0000] font-[font3] max-sm:text-sm max-sm:text-center max-sm:mt-2"
                href="mailto:inertiawebtech786@gmail.com"
              >
                <span>
                  <i className="ri-mail-add-line mr-[2vw]"></i>
                </span>
                inertiawebtech786@gmail.com
              </a>
              <a
                className="text-[1vw] text-[#ff0000] font-[font3] max-sm:text-sm max-sm:text-center max-sm:mt-2"
                href={"https://inertiawebtech.com"}
                target="_blank"
              >
                <span>
                  <i className="ri-global-line mr-[2vw]"></i>
                </span>
                inertiawebtech.com
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Page1Bottom;
