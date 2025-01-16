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
    <div className="flex flex-col sm:mt-96 mt-10 h-[120vh] sm:p-0 p-1">
      <p className="mt-10 sm:text-5xl text-2xl font-bold mx-auto flex flex-col items-center justify-center">Just Some Examples to Get{" "}</p>
      <p className="mb-10 text-5xl font-bold mx-auto flex flex-col items-center justify-center">You Inspired!</p>
      <div className="flex flex-col sm:flex-row justify-between sm:mx-40 mx-2">
        {
          activeVideo ? 
          (
              <iframe src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`} allow="autoplay; encrypted-media" allowFullScreen title="Active Video" className="sm:block hidden w-80 h-[500px]"></iframe>
          ) 
          : 
          <div className="flex flex-col gap-8">
              <p className="text-5xl font-semibold text-blue-600">Get the results</p>
              <img src={logo_1} className="sm:block hidden w-80 h-72" alt="" />
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
        <div className="grid grid-cols-2 gap-4 my-5">
            {
              inspirationCards.map((item) => (
                <div className="gap-4" key={item._id}>
                  {
                    activeVideo === item.videoID ?
                    (
                      <iframe src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`} allow="autoplay; encrypted-media" allowFullScreen title="Active Video" className="w-40 h-52 rounded-xl"></iframe>
                    )
                    :
                    (
                      <img onMouseLeave={handleMouseLeave} onMouseEnter={() => handleMouseEnter(item.videoID)} src={item.thumbanil} className="w-48 h-52 rounded-xl" alt="" />
                    )
                  }
                </div>
              ))
            }
        </div>
      </div>
    </div>
  );
};

export default InspirationCards;
