import React, { ReactNode } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="bg-black text-white">{children}</div>;
};

export default Layout;
