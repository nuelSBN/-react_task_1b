import React from "react";

export default function SecondHeader() {
  return (
    <div className="h-[88px] w-[80%] flex justify-between items-center">
      <h1 className="text-[40px] font-thin leading-[48px]">
        Today’s leaderboard
      </h1>
      <div className="h-[56px] w-[418px] rounded-lg bg-[#1D1D1D] flex justify-center items-center gap-4">
        <p className="font-thin text-white text-base leading-[20px]">
          30 May 2022
        </p>
        .
        <button className="px-[10px] py-[4px] bg-[#9BFF00] flex gap-2 rounded-lg font-thin text-black text-sm leading-[20px]">
          Submissions OPEN
        </button>
        .<p>11:34</p>
      </div>
    </div>
  );
}
