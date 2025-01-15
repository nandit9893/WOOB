import React, { useState } from "react";
import campaigns from "../assets/CampaignIcons.js";

const Campaign = () => {
    const [menu, setMenu] = useState("Post Your Campaign");

    const getSelectedCampaign  = campaigns.find((item) => item.title == menu);
    
  return (
    <div className="flex flex-col p-10 h-screen">
      <p className="text-xl text-blue-600 mx-auto font-semibold my-1">Automated Campaign Manager</p>
      <p className="my-1 text-3xl font-bold mx-auto">How it works</p>
      <div className="my-10 flex justify-between mx-auto gap-5">
        <span onClick={()=>setMenu("Post Your Campaign")} className={`text-xl p-4 font-bold cursor-pointer transition-all duration-300 ${menu === "Post Your Campaign" ? "text-white bg-blue-600 p-4 rounded-full" : "text-black"}`}>1. Post Your Campaign</span>
        <span onClick={()=>setMenu("Select Creators")} className={`text-xl p-4 font-bold cursor-pointer transition-all duration-300 ${menu === "Select Creators" ? "text-white bg-blue-600 p-4 rounded-full" : "text-black"}`}>2. Select Creators</span>
        <span onClick={()=>setMenu("Ship Your Products")} className={`text-xl p-4 font-bold cursor-pointer transition-all duration-300 ${menu === "Ship Your Products" ? "text-white bg-blue-600 p-4 rounded-full" : "text-black"}`}>3. Ship Your Products</span>
        <span onClick={()=>setMenu("Review Content")} className={`text-xl p-4 font-bold cursor-pointer transition-all duration-300 ${menu === "Review Content" ? "text-white bg-blue-600 p-4 rounded-full" : "text-black"}`}>4. Review Content</span>
        <span onClick={()=>setMenu("Get It Live")} className={`text-xl p-4 font-bold cursor-pointer transition-all duration-300 ${menu === "Get It Live" ? "text-white bg-blue-600 p-4 rounded-full" : "text-black"}`}>5. Get It Live</span>
      </div>
      {
        getSelectedCampaign &&  (
            <div className="flex justify-between p-20 mx-8 rounded-xl bg-slate-200 transition-opacity duration-500 ease-in-out" key={getSelectedCampaign._id}>
                <div className="flex flex-col gap-10 w-1/2">
                    <p className="text-5xl font-bold text-black">{getSelectedCampaign.title}</p>
                    <p className="text-xl w-[80%]">{getSelectedCampaign.subTitle}</p>
                    <p className="cursor-pointer text-xl font-bold p-3 py-4 bg-blue-600 text-white w-[35%] rounded-full">Get started for free</p>
                </div>
                <div className="w-1/2">
                    <img src={getSelectedCampaign.imageSrc} className="w-full h-full" alt="" />
                </div>
            </div>
        )
      }
    </div>
  );
};

export default Campaign;
