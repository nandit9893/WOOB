import React, { useEffect, useRef, useState } from "react";
import HeroImage from "./HeroImage";

const Hero = () => {
  const typedElement = useRef(null);
  const arrayOfTitle = ["Barter Campaigns", "UGC Content", "Marketplace Reviews"];
  const [currentTitle, setCurrentTitle] = useState(arrayOfTitle[0]);

  useEffect(() => {
    const intervalID = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * arrayOfTitle.length);
      setCurrentTitle(arrayOfTitle[randomIndex]);
    }, 1000); 
    return () => clearInterval(intervalID);
  }, []);

  return (
    <div className="h-full my-20 mx-auto flex flex-col items-center justify-center">
      <p className="w-96 rounded-xl font-semibold bg-gray-400 p-2 text-white my-1">Automate Barter Campaigns with AI for 7 days</p>
      <p className="text-6xl my-4 font-bold">Instantly Partner with Influencers</p>
      <p className="text-6xl my-4 font-bold">{" "}for <span ref={typedElement} className="text-6xl my-4 font-bold text-blue-600 transition-opacity duration-700 opacity-0 keyframes fadeInOut" style={{ opacity: 1 }}>{currentTitle}</span></p>
      <div className="flex flex-col max-w-3xl my-5">
        <p className="text-center font-medium text-xl text-gray-500">Run campaigns where influencers promote your brand in exchange for</p>
        <p className="text-center font-medium text-xl text-gray-500">products. Automate hiring and content quality checks with AI, and discover</p>
        <p className="text-center font-medium text-xl text-gray-500">the perfect creators from a 400M+ influencer database.</p>
      </div>
      <p className="text-white font-bold p-4 bg-blue-600 my-5 text-xl rounded-lg">Start Your Free Campaign</p>
      <HeroImage />
    </div>
  );
};

export default Hero;
