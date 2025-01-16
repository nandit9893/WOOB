import React from "react";
import influencers from "../assets/Influencer.js";

const InfluencerDiscovery = () => {
  return (
    <div className="my-10 sm:px-20 px-0 py-40 bg-slate-100">
      <p className="text-xl font-semibold text-center my-2 text-blue-600">Influencer Discovery</p>
      <p className="sm:text-4xl text-2xl font-bold text-center my-2">Plus, a Built-In Tool for Influencer Discovery and Outreach</p>
      {
        influencers && influencers.map((item) => ( 
              <div className="flex flex-col sm:flex-row justify-between sm:p-20 p-5 sm:mx-8 rounded-xl bg-white sm:h-screen h-[900px] my-10" key={item._id}>
                <div className="flex flex-col gap-10 sm:w-1/2 w-full">
                    <p className="sm:text-5xl text-3xl font-bold text-black">{item.title}</p>
                    <p className="text-xl sm:w-[80%] w-full">{item.subTitle}</p>
                    <span className="cursor-pointer text-xl font-bold px-3 py-4 w-36 bg-blue-600 text-white rounded-full">Get started</span>
                </div>
                <div className="sm:w-1/2 w-full">
                    <img src={item.imageSrc} className="w-full h-full" alt="" />
                </div>
            </div>
        ))
      }
    </div>
  );
};

export default InfluencerDiscovery;
