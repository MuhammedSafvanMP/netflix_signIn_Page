import React, { useState } from "react";
import data from "../../data";

export default function Accodian() {
  const [datashow, setDataShow] = useState(null);

  const dataShow = (currendIndex) => {
    setDataShow(currendIndex === datashow ? null : currendIndex);
    console.log(currendIndex);
  };

  return (
    <section className="text-white flex flex-col items-center justify-center w-full h-full gap-16 border-b-[7px] border-gray-700 ">
      <h1 className="pt-14 text-4xl font-bold ">Frequently Asked Questions</h1>

      <div className="flex flex-col gap-2 w-full md:w-[80%] lg:w-[60%] xl:w-[40%] mx-auto">
        {data && data.length > 0 ? (
          data.map((dataItems) => {
            return (
              <div>
                <div
                  onClick={() => dataShow(dataItems.id)}
                  className="flex justify-between px-4 md:px-8 lg:px-12 py-6 bg-_bg_primarary relative cursor-pointer"
                >
                  <p className="text-xl">{dataItems.header}</p>
                  <i className="fa-solid fa-xmark right-3 top-4 text-4xl absolute cursor-pointer"></i>
                </div>
                {datashow === dataItems.id ? (
                  <div className=" text-xl  px-4 md:px-6 lg:px-10 bg-_bg_primarary">
                    <p className="px-4 md:px-8 py-4 overflow-hidden text-overflow-ellipsis">
                      {dataItems.text1}
                    </p>
                    <p className=" px-4 md:px-8 py-2 overflow-hidden text-overflow-ellipsis">
                      {dataItems.text2}
                    </p>
                  </div>
                ) : null}
              </div>
            );
          })
        ) : (
          <div>Data not avilable !</div>
        )}
      </div>


      <p className="text-center">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="flex flex-col md:flex-row items-center gap-2 pb-16 w-full md:w-[80%] lg:w-[60%] xl:w-[40%] mx-auto">
        <input
          className="w-full md:w-1/2 px-4 py-4 rounded-md bg-black border-green-700 border-[2px]"
          type="text"
          placeholder="Email address"
        />
        <button className="w-full md:w-1/2 px-4 py-4 bg-red-700 rounded-md">
          Get Started
        </button>
      </div>

    </section>
  );
}
