import React from "react";

export default function ChatOtherMessage() {
  return (
    <div className="h-fit w-full space-y-[5px]">
      <div className="h-fit w-[250px] rounded-[15px] py-[10px] px-[15px] bg-gradient-to-br from-mySkyBlue to-mySkyBlue/20">
        <p className="text-[13px]">
          Hi Sam! I am your personal shopping assistant , how can i help you
          today ?
        </p>
      </div>
      <div className="px-[10px]">
        <p className="text-[10px]">4:45 PM</p>
      </div>
    </div>
  );
}
