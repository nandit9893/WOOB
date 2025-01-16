import React from "react";
import logo_1 from "../assets/logo_1.png";

const Navbar = () => {
  return (
    <div className="flex justify-between px-20 py-5 bg-white">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-1">
          <img className="w-10 h-10" src={logo_1} alt="" />
          <h2 className="text-2xl text-blue-950 font-bold">Wobb</h2>
        </div>
        <div className="flex items-center gap-10">
          <p className="text-lg font-semibold text-black">Home</p>
          <p className="text-lg font-semibold text-black">Features</p>
          <p className="text-lg font-semibold text-black">Resources</p>
          <p className="text-lg font-semibold text-black">Pricing</p>
        </div>
      </div>
      <div className="flex gap-10 items-center">
        <p className="text-gray-800 font-semibold text-lg">Login</p>
        <div className="flex justify-center items-center bg-blue-600 p-3 rounded">
          <p className="text-white font-bold">Get Started - </p>
          <p className="text-white font-semibold">It's Free</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
