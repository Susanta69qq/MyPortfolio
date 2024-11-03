import React from "react";
import 'remixicon/fonts/remixicon.css'

function Header() {
  return (
    <div>
      <div className="fixed w-full flex items-center justify-end z-10 p-20">
        <button className="bg-black px-4 py-2 rounded-full border-2 hover:bg-gray-500">Hire me</button>
        <i className="ri-more-2-fill text-2xl ml-3"></i>
      </div>
    </div>
  );
}

export default Header;
