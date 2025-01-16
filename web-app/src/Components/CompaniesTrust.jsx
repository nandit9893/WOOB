import React from "react";
import companiesIcons from "../assets/CompaniesIcon.js";
import "../../src/index.css";

const CompaniesTrust = () => {
  const loopedReviews = [...companiesIcons, ...companiesIcons];

  return (
    <div className="my-28">
      <div className="h-full my-20 sm:mx-auto mx-2 flex flex-col items-center justify-center">
        <p className="text-xl font-semibold text-gray-500">Trusted by 5000 Agencies and D2C Companies</p>
      </div>
      <div className="overflow-hidden">
        <div className="scrolling-wrapper flex gap-20" style={{ animation: "scroll 60s linear infinite", width: `${loopedReviews.length * 30}rem`,}}>
          {
            loopedReviews.map((company, index) => (
              <div key={`${company._id} -${index}`}>
                    <img src={company.icon} className="w-44" alt="" />
                  </div>
              ))
            }
        </div>
      </div>
      <div className="h-full my-20 mx-auto flex flex-col items-center justify-center bg-slate-100 sm:p-20 p-5">
          <div className="flex flex-col sm:flex-row justify-between gap-5 sm:gap-0">
            <div className="sm:w-1/3 w-full">
                <div className="flex justify-between gap-2">
                    <img className="w-10 h-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl01OQiuFdLQXORBls3xWwY6JtyY_N6WyV3w&s" alt="" />
                    <div className="flex flex-col gap-1">
                        <p className="text-lg font-bold text-slate-700">Powered by AI</p>
                        <p className="text-black font-normal">Automate influencer selection and content quality checks seamlessly.</p>
                    </div>
                </div>
            </div>
            <div className="sm:w-1/3 w-full">
                <div className="flex justify-between gap-2">
                    <img className="w-10 h-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl01OQiuFdLQXORBls3xWwY6JtyY_N6WyV3w&s" alt="" />
                    <div className="flex flex-col gap-1">
                        <p className="text-lg font-bold text-slate-700">Global Influencer Community</p>
                        <p className="text-black font-normal">Access a database of 400M influencers, with 200K actively registered on Wobb.</p>
                    </div>
                </div>
            </div>
            <div className="sm:w-1/3 w-full">
                <div className="flex justify-between gap-2">
                    <img className="w-10 h-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl01OQiuFdLQXORBls3xWwY6JtyY_N6WyV3w&s" alt="" />
                    <div className="flex flex-col gap-1">
                        <p className="text-lg font-bold text-slate-700">Shopify & WooCommerce Integrations</p>
                        <p className="text-black font-normal">Easily manage creator orders with built-in platform support.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CompaniesTrust;
