import React from "react";
import influencers from "../assets/Influencer.js";

const InfluencerDiscovery = () => {
  return (
    <div className="my-10 px-20 py-40 bg-slate-100">
      <p className="text-xl font-semibold text-center my-2 text-blue-600">Influencer Discovery</p>
      <p className="text-4xl font-bold text-center my-2">Plus, a Built-In Tool for Influencer Discovery and Outreach</p>
      {
        influencers && influencers.map((item) => ( 
            <div className="flex justify-between p-20 mx-8 rounded-xl bg-white h-screen my-10" key={item._id}>
                <div className="flex flex-col gap-10 w-1/2">
                    <p className="text-5xl font-bold text-black">{item.title}</p>
                    <p className="text-xl w-[80%]">{item.subTitle}</p>
                    <span className="cursor-pointer text-xl font-bold px-3 py-4 w-36 bg-blue-600 text-white rounded-full">Get started</span>
                </div>
                <div className="w-1/2">
                    <img src={item.imageSrc} className="w-full h-full" alt="" />
                </div>
            </div>
        ))
      }
    </div>
  );
};

export default InfluencerDiscovery;
