import React from "react";
import cr from "../assets/chevron-right.png";
import "@fontsource/poppins/500.css";

export default function PopularTags() {
  const arr = ["Clutch", "Fabric Lining", "Baggit", "Multi Compartment"];

  const renderTags = arr.map((item) => {
    return (
      <div
        className="w-fit h-fit py-[5px] px-[10px] text-[#4C82EF] font-medium bg-myTag text-[13px] rounded-[5px] border-[1px] border-[#4C82EF]"
        key={item + Math.random()}
      >
        {item}
      </div>
    );
  });

  return (
    <div className="w-full h-fit space-y-[10px]">
      <p className="text-[13px] text-[#949494]">Popular tags for handbag</p>
      <div className="w-full h-fit flex space-x-[5px] relative">
        <div className="h-fit flex space-x-[10px] whitespace-nowrap w-[289px] overflow-x-auto">
          {renderTags}
        </div>
        <div className="w-fit h-fit absolute right-0 top-1/2 -translate-y-1/2 ml-2 cursor-pointer">
          <img className="size-[24px]" src={cr} />
        </div>
      </div>
    </div>
  );
}
