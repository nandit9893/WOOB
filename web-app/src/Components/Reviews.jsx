import React from "react";
import reviews from "../assets/ReviewsCards.js";
import "../index.css";

const Reviews = () => {
  const loopedReviews = [...reviews, ...reviews];

  return (
    <div className="flex flex-col gap-5 my-10">
      <p className="text-4xl font-bold text-black text-center my-2">Reviews</p>
      <p className="text-xl font-semibold text-gray-600 text-center my-2">Hear from some of our amazing customers who are building faster.</p>
      <div className="overflow-hidden">
        <div className="flex gap-5 move-x-y" style={{ animation: "scroll 60s linear infinite", width: `${loopedReviews.length * 30}rem`,}}>
          {
            loopedReviews.map((review, index) => (
              <div className="bg-gray-100 rounded-lg w-96 p-5 gap-5 shadow-xl" key={`${review._id}-${index}`}>
                <p className={`text-2xl ${ review.ratings > 3 ? "text-green-400" : "text-red-500"} mb-5`}>{"★".repeat(review.ratings)}</p>
                <p className="text-xl font-semibold">{review.title}</p>
                <p className="text-lg font-normal mt-10">"{review.description}"</p>
                <div className="flex gap-2 items-center my-5 justify-between">
                  <div className="flex gap-2 items-center">
                    <img src={review.customerImage} className="w-12 h-12 rounded-full" alt=""/>
                    <div className="flex flex-col">
                      <p className="text-lg font-semibold text-black">{review.customerName}</p>
                      <p className="text-lg font-normal text-gray-500">{review.organization}</p>
                    </div>
                  </div>
                  <img src={review.companyLogo} alt="" className="w-20"/>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Reviews;
