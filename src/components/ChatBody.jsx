import React from "react";
import ChatOtherMessage from "./ChatOtherMessage";
import ChatMyMessage from "./ChatMyMessage";
import PopularTags from "./PopularTags";
import Recommendation from "./Recommendation";

export default function ChatBody() {
  return (
    <div className="row-span-6 px-[5px]">
      <div className="p-[10px] pt-[50px] space-y-[20px]">
        <ChatOtherMessage />
        <ChatMyMessage />
        <PopularTags />
        <Recommendation />
      </div>
    </div>
  );
}
