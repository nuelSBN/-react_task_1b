import React from "react";
import Header from "../components/Header";
import SecondHeader from "../components/SecondHeader";
import VideoList from "../components/VideoList";

const AdminDashboardPage = () => {
  return (
    <main className="flex flex-col items-center text-gray-700 bg-[#111111] h-full w-full">
      <Header />
      <SecondHeader />
      <VideoList />
    </main>
  );
};

export default AdminDashboardPage;
