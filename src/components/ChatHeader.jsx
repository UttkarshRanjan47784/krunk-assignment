import React from "react";

import botimg from "../assets/bot.png";
import ellipse from "../assets/ellipse.png";
import tick from "../assets/tick.png";

export default function ChatHeader() {
  return (
    <div className="bg-mySkyBlue rounded-t-[20px] flex items-center justify-between py-[10px] px-[20px] h-[80px] w-full">
      <div className="flex">
        <img src={botimg} className="size-[50px]" />
        <div className="grid px-3">
          <div className="flex space-x-2 items-center">
            <div className="text-lg font-[600] text-[#4C82EF]">Timpu</div>
            <img src={tick} className="size-4" />
          </div>
          <div className="text-[#4C82EF] font-medium">Chat assistant</div>
        </div>
      </div>
      <div className="flex justify-center items-center pt-4 gap-[5px]">
        <img src={ellipse} className="size-2 bg-white" />
        <p className="text-[#4C82EF]">Online</p>
      </div>
    </div>
  );
}
