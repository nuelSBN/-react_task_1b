import React from "react";
import dropdown from "../assets/dropdown.svg";

export default function VideoHeader() {
  return (
    <div className="flex h-[35px] items-center">
      <p className="py-2 w-[5%] text-[#666666] font-thin">#</p>
      <p className=" py-2 w-[60%] text-[#666666] font-thin">Title</p>
      <p className=" py-2 w-[20%] text-[#666666] font-thin justify-center">
        Author
      </p>
      <p className="py-2 w-[10%] text-[#666666] font-thin flex items-center gap-2">
        <span> Most Liked</span>
        <img src={dropdown} alt="" />
      </p>
    </div>
  );
}
