import React from "react";

function Page3() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="relative">
        <img className="w-full" src="src/assets/macbook.webp" alt="macbook image" />
        <div className="absolute top-1/3 left-1/4 bg-white p-16 rounded-xl">
          <ul className="text-[1.75vw] font-[font6]">
            <li className="text-black">Responsive Design 💻</li>
            <li className="text-black">iOS and Android Development 📲</li>
            <li className="text-black">Backend Development 🖥</li>
            <li className="text-black">E-commerce Solutions 🛒</li>
            <li className="text-black">Brand Building 🏗</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Page3;
