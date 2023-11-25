import React from "react";

export default function Nav() {
  return (
    <>
      <nav className="flex justify-around items-center p-3 w-full h-36 top-1 absolute z-20" >
          <img src="./images/logo.png" alt="netflix_logo" className="w-40 h-12" />
        <ul className="flex text-center items-center justify-between gap-3">
         
        
        <img src="./images/language.svg" className="w-5 absolute ml-3 mt-1" alt="" />

          <select className=" px-10 py-2 text-white bg-black border-gray-700 rounded-md border-[1px] cursor-pointer" >
            <option value="english">English</option>
            <option value="hindhi">हिन्दी</option>
          </select>

          <div className="bg-red-700 py-2 px-[12px] rounded-md">
          <a className=" text-white">Sign In</a>
          </div>
        </ul>
      </nav>
    </>
  );
}
