import React from "react";
import pc from "../assets/paperclip.png";
import { Button } from "./ui/button";
import cr from "../assets/chev-r-white.png";
import logo from "../assets/Logo.svg";

export default function ChatFooter() {
  return (
    <div className="bg-mySkyBlue  rounded-b-[20px] p-2.5 space-y-[10px] place-self-end w-full">
      <div className="flex items-center justify-center space-x-[5px]">
        <div className="flex items-center justify-center w-full bg-white rounded-[10px] pl-[20px] pr-[10px]">
          <input
            type="text"
            className="w-full h-[40px] text-[13px]"
            placeholder="Type your message"
          ></input>
          <img src={pc} />
        </div>
        <Button className="w-[70px] h-[40px] rounded-[10px] bg-[#4C82EF]">
          <img src={cr} className="h-[15px] w-[7.5px]" />
        </Button>
      </div>
      <div className="flex justify-center items-center gap-1">
        <span className="text-[#B1B1B1] text-[13px]">Powered by</span>{" "}
        <span className="text-[#7A7F8C] font-semibold text-[13px]">
          {" "}
          Krunk.ai
        </span>
        <img src={logo} />
      </div>
    </div>
  );
}
