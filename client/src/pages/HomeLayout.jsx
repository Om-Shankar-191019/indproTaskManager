import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <main>
      <nav className={`w-full sticky top-0 z-50 `}>
        <Header />
      </nav>
      <Outlet />
    </main>
  );
};

export default HomeLayout;
