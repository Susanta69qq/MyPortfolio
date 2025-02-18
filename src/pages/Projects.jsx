import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

const Projects = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(".rotateHead", {
      transform: "rotateX(-100deg)",
      opacity: 0,
      duration: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: ".rotateHead",
        start: "top 60%",
        end: "top -80%",
      },
    });
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      ".border",
      {
        scaleX: 0,
        opacity: 1,
        transformOrigin: "left center",
      },
      {
        scaleX: 1,
        duration: 1.5,
        stagger: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".border",
          start: "top 90%",
          end: "top 50%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="min-h-screen p-10 bg-white">
      <div className="section4 h-full w-full bg-black rounded-[50px]">
        {/* Studio Lux */}
        <div className="px-[2vw] py-[5vw]">
          <a href="https://portfolioproject001.netlify.app/" target="_blank">
            <h1 className="rotateHead text-white font-[font1] text-[12vw] leading-[10vw] cursor-pointer">
              STUDIO LUX
            </h1>
          </a>
          <div className="flex items-center justify-between">
            <h3 className="text-gray-400 font-[font3] text-[1.2vw]">
              Real Estate / Prototype
            </h3>
            <h3 className="text-white font-[font3] text-[1.2vw]">01</h3>
          </div>
          <div className="border w-full h-[1px] bg-gray-400"></div>
        </div>

        {/* Le Flair Studios */}
        <div className="px-[2vw]">
          <a href="https://portfolioproject002.netlify.app/" target="_blank">
            <h1 className="rotateHead text-white font-[font1] text-[12vw] leading-[10vw] cursor-pointer">
              LE FLAIR STUDIOS
            </h1>
          </a>
          <div className="flex items-center justify-between">
            <h3 className="text-gray-400 font-[font3] text-[1.2vw]">
              Shopping Ecommerce / Prototype
            </h3>
            <h3 className="text-white font-[font3] text-[1.2vw]">02</h3>
          </div>
          <div className="border w-full h-[1px] bg-gray-400"></div>
        </div>

        {/* Watch House */}
        <div className="px-[2vw] py-[5vw]">
          <a href="https://portfolioproject003.netlify.app/" target="_blank">
            <h1 className="rotateHead text-white font-[font1] text-[12vw] leading-[10vw] cursor-pointer">
              WATCH HOUSE
            </h1>
          </a>
          <div className="flex items-center justify-between">
            <h3 className="text-gray-400 font-[font3] text-[1.2vw]">
              Premium Coffee Brand / Prototype
            </h3>
            <h3 className="text-white font-[font3] text-[1.2vw]">03</h3>
          </div>
          <div className="border w-full h-[1px] bg-gray-400"></div>
        </div>

        {/* Inertia Web Tech */}
        <div className="px-[2vw] pb-[5vw]">
          <a href="https://inertiawebtech.netlify.app/" target="_blank">
            <h1 className="rotateHead text-white font-[font1] text-[12vw] leading-[10vw] cursor-pointer">
              INERTIA WEB TECH
            </h1>
          </a>
          <div className="flex items-center justify-between">
            <h3 className="text-gray-400 font-[font3] text-[1.2vw]">
              IT BUSINESS / Personal Brand
            </h3>
            <h3 className="text-white font-[font3] text-[1.2vw]">04</h3>
          </div>
          <div className="border w-full h-[1px] bg-gray-400"></div>
        </div>

        {/* Rahasya Fragrances */}
        <div className="px-[2vw] pb-[5vw]">
          <a href="https://rahasyafragrances.netlify.app/" target="_blank">
            <h1 className="rotateHead text-white font-[font1] text-[12vw] leading-[10vw] cursor-pointer">
              RAHASYA FRAGRANCES
            </h1>
          </a>
          <div className="flex items-center justify-between">
            <h3 className="text-gray-400 font-[font3] text-[1.2vw]">
              Premium Perfume Brand / Personal Brand
            </h3>
            <h3 className="text-white font-[font3] text-[1.2vw]">05</h3>
          </div>
          <div className="border w-full h-[1px] bg-gray-400"></div>
        </div>

        {/* ZippyTaxi */}
        <div className="px-[2vw] pb-[5vw]">
          <a href="https://zippytaxi.netlify.app/" target="_blank">
            <h1 className="rotateHead text-white font-[font1] text-[12vw] leading-[10vw] cursor-pointer">
              ZIPPY TAXI
            </h1>
          </a>
          <div className="flex items-center justify-between">
            <h3 className="text-gray-400 font-[font3] text-[1.2vw]">
              Taxi Service / Prototype
            </h3>
            <h3 className="text-white font-[font3] text-[1.2vw]">06</h3>
          </div>
          <div className="border w-full h-[1px] bg-gray-400"></div>
        </div>

        {/* AICA ai agent */}
        <div className="px-[2vw] pb-[5vw]">
          <a href="https://aicaproject.netlify.app/" target="_blank">
            <h1 className="rotateHead text-white font-[font1] text-[12vw] leading-[10vw] cursor-pointer">
              AICA AI AGENT
            </h1>
          </a>
          <div className="flex items-center justify-between">
            <h3 className="text-gray-400 font-[font3] text-[1.2vw]">
              AI Chatbot & Project Manager / Prototype
            </h3>
            <h3 className="text-white font-[font3] text-[1.2vw]">07</h3>
          </div>
          <div className="border w-full h-[1px] bg-gray-400"></div>
        </div>

        {/* Ai Trip Planner */}
        <div className="px-[2vw] pb-[5vw]">
          <a href="https://airtripplanner.netlify.app/" target="_blank">
            <h1 className="rotateHead text-white font-[font1] text-[12vw] leading-[10vw] cursor-pointer">
              AI TRIP PLANNER
            </h1>
          </a>
          <div className="flex items-center justify-between">
            <h3 className="text-gray-400 font-[font3] text-[1.2vw]">
              AI Trip Planner / Prototype
            </h3>
            <h3 className="text-white font-[font3] text-[1.2vw]">08</h3>
          </div>
          <div className="border w-full h-[1px] bg-gray-400"></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
