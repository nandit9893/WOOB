import React, { useState } from "react";
import campaigns from "../assets/CampaignIcons.js";

const Campaign = () => {
    const [menu, setMenu] = useState("Post Your Campaign");

    const getSelectedCampaign  = campaigns.find((item) => item.title == menu);
    
  return (
    <div className="flex flex-col sm:p-10 p-5 sm:h-screen h-auto">
      <p className="text-xl text-blue-600 mx-auto font-semibold my-1">Automated Campaign Manager</p>
      <p className="my-1 text-3xl font-bold mx-auto">How it works</p>
      <div className="my-10 flex flex-col sm:flex-row justify-between sm:mx-auto mx-0 smgap-5 gap-1">
        <span onClick={()=>setMenu("Post Your Campaign")} className={`sm:text-xl text-lg sm:p-4 p-2 font-bold cursor-pointer transition-all duration-300 ${menu === "Post Your Campaign" ? "text-white bg-blue-600 sm:p-4 p-2 rounded-full" : "text-black"}`}>1. Post Your Campaign</span>
        <span onClick={()=>setMenu("Select Creators")} className={`sm:text-xl text-lg sm:p-4 p-2 font-bold cursor-pointer transition-all duration-300 ${menu === "Select Creators" ? "text-white bg-blue-600 sm:p-4 p-2 rounded-full" : "text-black"}`}>2. Select Creators</span>
        <span onClick={()=>setMenu("Ship Your Products")} className={`sm:text-xl text-lg sm:p-4 p-2 font-bold cursor-pointer transition-all duration-300 ${menu === "Ship Your Products" ? "text-white bg-blue-600 sm:p-4 p-2 rounded-full" : "text-black"}`}>3. Ship Your Products</span>
        <span onClick={()=>setMenu("Review Content")} className={`sm:text-xl text-lg sm:p-4 p-2 font-bold cursor-pointer transition-all duration-300 ${menu === "Review Content" ? "text-white bg-blue-600 sm:p-4 p-2 rounded-full" : "text-black"}`}>4. Review Content</span>
        <span onClick={()=>setMenu("Get It Live")} className={`sm:text-xl text-lg sm:p-4 p-2 font-bold cursor-pointer transition-all duration-300 ${menu === "Get It Live" ? "text-white bg-blue-600 sm:p-4 p-2 rounded-full" : "text-black"}`}>5. Get It Live</span>
      </div>
      {
        getSelectedCampaign &&  (
            <div className="flex flex-col sm:gap-0 gap-2 sm:flex-row sm:p-20 p-5 sm:mx-8 mx-0 rounded-xl bg-slate-200 transition-opacity duration-500 ease-in-out" key={getSelectedCampaign._id}>
                <div className="flex flex-col gap-10 sm:w-1/2 w-full">
                    <p className="sm:text-5xl text-3xl font-bold text-black">{getSelectedCampaign.title}</p>
                    <p className="text-xl sm:w-[80%] w-full">{getSelectedCampaign.subTitle}</p>
                    <p className="cursor-pointer text-xl font-bold p-3 py-4 bg-blue-600 text-white sm:w-[35%] w-full rounded-full">Get started for free</p>
                </div>
                <div className="sm:w-1/2 w-full">
                    <img src={getSelectedCampaign.imageSrc} className="w-full h-full" alt="" />
                </div>
            </div>
        )
      }
    </div>
  );
};

export default Campaign;
