import React, { useState } from "react";
import inspirationCards from "../assets/InspirationCards.js";
import logo_1 from "../assets/logo_1.png";
import "../index.css";

const InspirationCards = () => {
    const [activeVideo, setActiveVideo] = useState(null);

    const handleMouseEnter = (videoID) => {
        setActiveVideo(videoID);
    }

    const handleMouseLeave = () => {
        setActiveVideo(null); 
    };
    

  return (
    <div className="flex flex-col sm:mt-96 mt-10 h-[100vh] sm:p-0 p-3">
      <p className="mt-10 sm:text-5xl text-2xl font-bold mx-auto flex flex-col items-center justify-center">Just Some Examples to Get{" "}</p>
      <p className="mb-10 text-5xl font-bold mx-auto flex flex-col items-center justify-center">You Inspired!</p>
      <div className="flex justify-between mx-40">
      {
        activeVideo ? 
        (
            <iframe src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`} allow="autoplay; encrypted-media" allowFullScreen title="Active Video" className="w-80 h-[500px]"></iframe>
        ) 
        : 
        <div className="flex flex-col gap-8">
            <p className="text-5xl font-semibold text-blue-600">Get the results</p>
            <img src={logo_1} className="w-80 h-72" alt="" />
        </div>
      }
        <div className="body">
            <div className="row">
                {
                    inspirationCards.slice(0, 3).map((card) => (
                        <img onMouseLeave={handleMouseLeave} onMouseEnter={() => handleMouseEnter(card.videoID)} src={card.thumbanil} alt="" key={card._id} />
                    ))
                }
            </div>
            <div className="row">
                {
                    inspirationCards.slice(3, 5).map((card) => (
                        <img onMouseLeave={handleMouseLeave} onMouseEnter={() => handleMouseEnter(card.videoID)} src={card.thumbanil} alt="" key={card._id} />
                    ))
                }
            </div>
            <div className="row">
                {
                    inspirationCards.slice(5, 8).map((card) => (
                        <img onMouseLeave={handleMouseLeave} onMouseEnter={() => handleMouseEnter(card.videoID)} src={card.thumbanil} alt="" key={card._id} />
                    ))
                }
            </div>
        </div>
      </div>
    </div>
  );
};

export default InspirationCards;
