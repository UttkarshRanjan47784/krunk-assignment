import React from "react";

export default function ChatMyMessage() {
  return (
    <div className="h-fit w-full space-y-[5px] grid">
      <div className="h-fit w-[213px] rounded-[15px] py-[10px] px-[15px] bg-myLightGreen place-self-end">
        <p className="text-[13px]">
          I am looking for a hand bag, with long strap .
        </p>
      </div>
      <div className="px-[10px] place-self-end">
        <p className="text-[10px]">4:46 PM</p>
      </div>
    </div>
  );
}
