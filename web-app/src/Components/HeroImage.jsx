import React from "react";
import logo_1 from "../assets/logo_1.png";
import images from "../assets/HeroImageIcons.js";
import downward_icon from "../assets/downward_icon.png";

const HeroImage = () => {
  return (
    <div className="p-6 my-14 w-[700px] rounded-3xl h-96 relative transition-transform duration-300 hover:scale-110 cursor-pointer" style={{ background: "linear-gradient(190deg, rgb(0, 31, 255) 40%, rgb(210 187 196 / 52%) 90%)"}}>
      <div className="p-2 w-full h-full bg-[#bcbbd2] rounded-3xl">
        <div className="bg-white w-full h-full rounded-3xl p-2">
            <div className="flex items-center my-3 mx-4 gap-3">
               <img src={logo_1} className="w-9 h-9" alt="" />
               <p className="text-black font-bold text-lg">Influencer Discovery</p>
            </div>
            <hr className="w-full h-1"/>
            <div className="flex items-center justify-start gap-3 p-4">
                <p className="text-lg font-semibold">Showing 1.30M Profiles</p>
                <div className="flex gap-1">
                    <p>✅</p>
                    <p className="text-gray-600 font-semibold">Select</p>
                </div>
                <p className="bg-blue-950 px-3 text-white font-semibold">Invite</p>
            </div>
            <div className="flex flex-col gap-2 p-4">
                {
                    images.map((image) => (
                        <div className="flex gap-3 items-center justify-center" key={image._id}>
                            <img src={image.image} className="w-8 h-8 rounded-full" alt="" />
                            <hr className="w-full h-[3px] bg-gray-500"/>
                            <hr className="w-full h-[3px] bg-gray-500"/>
                        </div>
                    ))
                }
            </div>
        </div>
        <div className="p-2 bg-[#bcbbd2] absolute h-80 z-20 rounded-3xl w-64 -top-10 -right-24">
            <div className="w-full h-full bg-white rounded-3xl p-4 relative">
                <p className="text-lg font-semibold text-black">Influencer Details:</p>
                <hr className="w-full h-1 my-2"/>
                <p className="text-gray-800">Sponsored Post Performance</p>
                <hr className="w-full h-[4px] bg-gray-200 my-2"/>
                <hr className="w-full h-[4px] bg-gray-200 my-2"/>
                <div className="flex gap-2">
                    <div className="w-3 h-[90px] bg-white relative">
                        <div className="w-full h-[95px] bg-gray-300 absolute bottom-0 rounded-t-lg"></div>
                    </div>
                    <div className="w-3 h-[90px] bg-white relative">
                        <div className="w-full h-[90px] bg-blue-300 absolute bottom-0 rounded-t-lg"></div>
                    </div>
                    <div className="w-3 h-[90px] bg-white relative">
                        <div className="w-full h-[85px] bg-green-300 absolute bottom-0 rounded-t-lg"></div>
                    </div>
                    <div className="w-3 h-[90px] bg-white relative">
                        <div className="w-full h-[80px] bg-red-300 absolute bottom-0 rounded-t-lg"></div>
                    </div>
                    <div className="w-3 h-[90px] bg-white relative">
                        <div className="w-full h-[75px] bg-orange-300 absolute bottom-0 rounded-t-lg"></div>
                    </div>
                    <div className="w-3 h-[90px] bg-white relative">
                        <div className="w-full h-[70px] bg-teal-300 absolute bottom-0 rounded-t-lg"></div>
                    </div>
                    <div className="w-3 h-[90px] bg-white relative">
                        <div className="w-full h-[65px] bg-indigo-300 absolute bottom-0 rounded-t-lg"></div>
                    </div>
                    <div className="w-3 h-[90px] bg-white relative">
                        <div className="w-full h-[60px] bg-blue-300 absolute bottom-0 rounded-t-lg"></div>
                    </div>
                    <div className="w-3 h-[90px] bg-white relative">
                        <div className="w-full h-[55px] bg-gray-300 absolute bottom-0 rounded-t-lg"></div>
                    </div>
                    <div className="w-3 h-[90px] bg-white relative">
                        <div className="w-full h-[50px] bg-blue-300 absolute bottom-0 rounded-t-lg"></div>
                    </div>
                    <div className="w-3 h-[90px] bg-white relative">
                        <div className="w-full h-[45px] bg-teal-300 absolute bottom-0 rounded-t-lg"></div>
                    </div>
                </div>
                <hr className="w-52 h-[2px] bg-gray-400 absolute top-52"/>
                <div className="flex flex-col my-3">
                    <p>Influencers Lookalike</p>
                    <div className="flex gap-2 items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-red-500 flex items-center justify-center">
                            <div className="w-10 h-10 rounded-full bg-white"></div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <hr className="w-32 h-[4px] bg-gray-200"/>
                            <hr className="w-32 h-[4px] bg-gray-200"/>
                            <hr className="w-32 h-[4px] bg-gray-200"/>
                            <hr className="w-32 h-[4px] bg-gray-200"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="p-2 bg-[#bcbbd2] absolute h-60 z-20 rounded-3xl w-52 top-64 left-32">
            <div className="w-full h-full bg-white rounded-3xl p-4">
                <p className="text-lg font-semibold text-black">Filter By:</p>
                <hr className="w-full h-1 my-2"/>
                <div className="flex justify-between my-2 items-center">
                    <p>Followers</p>
                    <img src={downward_icon} className="w-3 h-3" alt="" />
                </div>
                <div className="flex justify-between my-2 items-center">
                    <p>Engagement</p>
                    <img src={downward_icon} className="w-3 h-3" alt="" />
                </div>
                <div className="flex justify-between my-2 items-center">
                    <p>Location</p>
                    <img src={downward_icon} className="w-3 h-3" alt="" />
                </div>
                <div className="flex justify-between my-2 items-center">
                    <p>Partnerships</p>
                    <img src={downward_icon} className="w-3 h-3" alt="" />
                </div>
                <hr className="w-full h-[4px] bg-gray-200 my-2"/>
                <hr className="w-full h-[4px] bg-gray-200 my-2"/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
