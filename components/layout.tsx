"use client";
import React, { ReactNode } from "react";
//@ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return <div className="bg-black text-white">{children}</div>;
};

export default Layout;
