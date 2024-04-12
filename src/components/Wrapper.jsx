import React from "react";
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";

export default function Wrapper() {
  return (
    <div className="w-[360px] h-[800px] rounded-[20px] border-[7px] top-[110px] left-[780px] border-white bg-white grid grid-rows-8">
      <ChatHeader />
      <ChatBody />
      <ChatFooter />
    </div>
  );
}
