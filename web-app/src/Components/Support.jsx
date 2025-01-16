import React, { useState } from "react";
import supports from "../assets/Support.js";

const Support = () => {
  const [menu, setMenu] = useState(null);

  const setMenuRefernce = (support) => {
    if(support.question === menu) {
      setMenu(null);
    } else {
      setMenu(support.question);
    }
  };

  return (
    <div className="flex flex-col my-20">
      <p className="text-lg my-2 text-blue-600 font-semibold text-center">Support</p>
      <p className="text-4xl my-2 font-semibold text-center">Frequently asked questions</p>
      <p className="text-xl text-gray-500 text-center my-2">Everything you need to know about the product and billing.</p>
      {
        supports.map((support) => (
          <div onClick={()=>setMenuRefernce(support)} className="flex flex-col mt-10 justify-center items-center sm:mx-80 mx-4 gap-10" key={support._id}>
            <div className="cursor-pointer flex justify-between w-full items-center transition-all transition-duration-300">
              <p className="text-xl font-semibold text-black">{support.question}</p>
              <p className="text-xl font-semibold text-gray-500 border-2 border-gray-500 rounded-full w-8 h-8 flex items-center justify-center">{support.question === menu ? "-" : "+"}</p>
            </div>
            {
              support.question === menu ? <p className="text-gray-600 font-medium cursor-pointer">{support.answer}</p> : null
            }
            <hr className="w-full h-1"/>
          </div>
        ))
      }
      <div className="my-10 flex flex-col items-center gap-4 justify-center mx-auto w-full sm:w-[80%] bg-slate-100 rounded-2xl p-20">
        <p className="text-xl text-black font-bold text-center">Start your free trial</p>
        <p className="text-xl font-semibold text-gray-500 text-center">Can't find the answer you're looking for? Please chat to our friendly team.</p>
        <p className="text-white bg-blue-600 p-3 rounded-lg font-bold">Get in touch</p>
      </div>
    </div>
  );
};

export default Support;
