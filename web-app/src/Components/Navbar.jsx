import React, { useEffect, useState } from "react";
import logo_1 from "../assets/logo_1.png";
import hamburger from "../assets/hamburger.png";
import "../../src/index.css";

const Navbar = () => {
  const [hamburgerState, setHamburgerState] = useState(false);
  const [links, setLinks] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 400) {
        setHamburgerState(true);
      } else {
        setHamburgerState(false);
      }
    };
    
    handleResize(); 

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleLinks = () => {
    setLinks((prev) => !prev);
  };

  return (
    <div>
      {
        hamburgerState && window.innerWidth <= 400 ? 
        (
          <div className="flex flex-col">
            <div className="flex justify-between sm:px-20 px-5 sm:py-5 py-2 bg-white">
              <div className="flex items-center gap-3">
                <img className="w-10 h-10" src={logo_1} alt="Logo" />
                <h2 className="text-2xl text-blue-950 font-bold">Wobb</h2>
              </div>
              <img
                onClick={toggleLinks}
                src={hamburger}
                className="w-10 h-10 sm:hidden block cursor-pointer"
                alt="Hamburger Menu"
              />
            </div>
            {
              links && (
                <div className="flex flex-col gap-3 mt-2 p-5 navbar">
                  <p onClick={toggleLinks} className="cursor-pointer text-lg font-semibold">Home</p>
                  <p onClick={toggleLinks} className="cursor-pointer text-lg font-semibold">Features</p>
                  <p onClick={toggleLinks} className="cursor-pointer text-lg font-semibold">Resources</p>
                  <p onClick={toggleLinks} className="cursor-pointer text-lg font-semibold">Pricing</p>
                  <p onClick={toggleLinks} className="cursor-pointer w-full text-white text-xl bg-blue-600 p-2 text-center rounded-lg font-semibold">Get Started - <span className="font-normal">It's Free</span></p>
                  <p onClick={toggleLinks} className="cursor-pointer w-full text-center border-2 border-gray-200 p-2 rounded-lg font-semibold text-xl">Login</p>
                </div>
              )
            }
          </div>
        ) 
        : 
        (
          <div className="flex justify-between sm:px-20 px-5 sm:py-5 py-2 bg-white">
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-1">
                <img className="w-10 h-10" src={logo_1} alt="Logo" />
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
        )
      }
    </div>
  );
};

export default Navbar;
