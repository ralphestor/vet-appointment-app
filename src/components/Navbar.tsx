"use client"

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  return (
    <>
      <MobileNav toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} />
    </>
  );
};

export default Navbar;
