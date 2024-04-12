import React from "react";
import bfc from "../assets/briefcase.png";
import cr from "../assets/chev-right.png";
import tick from "../assets/tick.png";
import slider from "../assets/slider.png";
import check2 from "../assets/check-2.png";
import check1 from "../assets/check-1.png";

export default function Recommendation() {
  const arr = ["Color", "Size", "Material"];

  const renderTags = arr.map((item) => {
    return (
      <div
        className="w-fit h-fit py-[2px] px-[10px] text-[#737373] font-medium bg-[#F4F4F4] text-[13px] rounded-[5px] flex justify-center items-center space-x-[5px]"
        key={item + Math.random()}
      >
        <p>{item}</p>
        <img src={check1} />
      </div>
    );
  });

  return (
    <div className="space-y-[10px]">
      <div className="h-fit w-full space-y-[5px]">
        <div className="h-fit w-[250px] rounded-[15px] p-[10px] bg-gradient-to-br from-mySkyBlue to-mySkyBlue/20 space-y-[10px]">
          <div className="text-[13px] bg-white rounded-[10px] p-[10px] space-x-[10px] flex justify-center items-center">
            <img src={bfc} />
            <div className="grid w-full gap-[7px]">
              <div className="flex items-center space-x-[5px]">
                <p className="text-[13px] font-medium">
                  Bags on <span className="font-semibold">Timpu</span>
                </p>
                <img src={tick} />
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[12px] whitespace-nowrap text-[#949494]">
                  1223 Products
                </p>
                <img src={cr} />
              </div>
            </div>
          </div>
          <p className="text-[13px]">
            Or set filter and help us choose the best bag for you.
          </p>
        </div>
        <div className="px-[10px]">
          <p className="text-[10px]">4:48 PM</p>
        </div>
      </div>
      <div className="w-full h- space-y-[10px]">
        <div className="flex">
          <div className="w-full text-[13px]">Select filters</div>
          <div className="flex justify-center items-center space-x-[2px]">
            <img src={slider} className="" />
            <p className="text-[13px]">Filter</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-[10px]">
          <div className="w-fit h-fit py-[2px] px-[10px] text-[#4C82EF] font-medium bg-myTag text-[13px] rounded-[5px] border-[1px] border-[#4C82EF] flex justify-center items-center space-x-[5px]">
            Strap - <span>Long</span>
            <img src={check2} />
          </div>
          {renderTags}
        </div>
      </div>
    </div>
  );
}
