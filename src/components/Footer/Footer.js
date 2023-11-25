import React from "react";

export default function Footer() {
  return (
    <footer className="text-_footer_text flex flex-col justify-center gap-7 w-full py-10">

      <p className="pl-80">
        QuestionsCall <a href="">000-800-919-1694</a>
      </p>
      <div className="flex pr-36 justify-center  items-center gap-32  underline decoration-[2px]">
        <div className=" flex flex-col px-7 py-9 ">
          <a  href="">FAQ</a>
          <a href="">Account</a>
          <a href="">Investor Relations</a>
          <a href="">Ways to watch</a>
        </div>
        <div className=" flex flex-col px-7 py-9">
          <a href="">Privacy</a>
          <a href="">Corporate information</a>
          <a href="">Speed Test</a>
          <a href="">Only on Netflix</a>
        </div>
        <div className=" flex flex-col px-7 py-9">
          <a href="">Help Center</a>
          <a href="">Media Centre</a>
          <a href="">Jobs</a>
          <a href="">Terms of Use</a>
        </div>
        <div className=" flex flex-col px-7 py-9">
          <a href="">Cookie Preferences</a>
          <a href="">Contact Us</a>
          <a href="">Legal Notices</a>
        </div>
      </div>

      

       
      <ul className="px-80">
            <img src="./images/language.svg" className="w-5 absolute ml-3 mt-3" alt="" />
         <select className=" px-12 py-2  bg-black text-white border-white border-[1px]  " >
           <option value="english">English</option>
           <option value="hindhi">हिन्दी</option>
         </select>
       </ul> 
       <span className="pl-80">Netflix India</span>
    </footer>
  );
}
