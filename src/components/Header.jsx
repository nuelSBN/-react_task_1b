import React, { useContext } from "react";
import { AuthContext } from "../authContext";
import profile from "../assets/Icons-left.svg";
import { useNavigate } from "react-router";

export default function Header() {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/admin/login");
  };

  return (
    <header className="w-[80%] flex justify-between h-[96px] items-center">
      <h1 className="text-[3rem] font-black text-[#FFFFFF] leading-[1.25rem]">
        App
      </h1>
      <button
        type="button"
        className="bg-[#9BFF00] text-[#050505] border rounded-[2.5rem] h-[3rem] w-[8rem] font-thin text-[1rem] leading-[1.25rem] flex gap-1 items-center justify-center"
        onClick={handleLogout}
      >
        <img src={profile} alt="Profile Icon" />
        <span className="text-[#050505] font-thin"> Logout</span>
      </button>
    </header>
  );
}
