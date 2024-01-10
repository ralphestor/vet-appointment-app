"use client";

import React, { useState } from "react";
import IconLogo from "../../public/icons/sidebar/icon-logo";
import IconHome from "../../public/icons/sidebar/icon-home";
import IconCalendar from "../../public/icons/sidebar/icon-calendar";
import IconMail from "../../public/icons/sidebar/icon-mail";
import IconSmiley from "../../public/icons/sidebar/icon-smiley";
import IconData from "../../public/icons/sidebar/icon-data";
import IconSubscribe from "../../public/icons/sidebar/icon-subscribe";
import IconHelp from "../../public/icons/sidebar/icon-help";
import IconSettings from "../../public/icons/sidebar/icon-settings";
import IconDoubleChevronRight from "../../public/icons/sidebar/icon-doublechevronright";
import IconDoubleChevronLeft from "../../public/icons/sidebar/icon-doublechevronleft";

const Sidebar = () => {
  const [sidebarLink, setSidebarLink] = useState("Home");
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <aside
      className={`relative flex flex-col bg-[#1C1C1E] h-[100vh] min-h-[800px] transition-all duration-300 ease-in-out ${
        isMinimized === true ? "w-[120px] min-w-[120px]" : "w-[240px] min-w-[240px]"
      }`}
    >
      <div className="absolute right-[-18px] top-[50%]">
        <button
          className="flex justify-center items-center w-[36px] h-[36px] bg-[#333334] rounded-[8px] hover:bg-customOrange transition-all duration-300 ease-in-out z-[99999]"
          onClick={() => {
            setIsMinimized(!isMinimized);
          }}
        >
          {isMinimized ? <IconDoubleChevronRight /> : <IconDoubleChevronLeft />}
        </button>
      </div>
      <div className="py-[40px] border-b-[1px] border-white border-opacity-20">
        <a href="/" className="flex justify-center items-center">
          <div>
            <IconLogo width={37} height={36} color="#FF630B" />
          </div>
          <div>
            <h1
              className={`logo-text font-bold text-[16px] ml-[12px] text-customOrange ${
                isMinimized ? "hidden" : "block"
              }`}
            >
              LOREM
            </h1>
          </div>
        </a>
      </div>
      <ul className="h-full w-full py-[40px]">
        <li>
          <a
            href="#"
            className={`hover:stroke-customOrange flex flex-row gap-[12px] items-center sidebar-link py-[20px] px-[20px] transition-all duration-300 ease-in-out hover:bg-[#272729] hover:text-[#FF630B] ${
              isMinimized && "justify-center"
            } ${
              sidebarLink === "Home"
                ? "border-r-[4px] border-customOrange text-customOrange stroke-customOrange"
                : "text-white stroke-white"
            } ${sidebarLink === "Home" ? "text-[#FF630B]" : "text-white"}`}
            onClick={() => {
              setSidebarLink("Home");
            }}
          >
            <div className={``}>
              <IconHome />
            </div>
            <span
              className={`w-fit absolute transition-[transform,opacity]  ${
                isMinimized ? "opacity-0 translate-x-[-30px]" : "opacity-100 translate-x-[30px]"
              }`}
            >
              Home
            </span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`hover:fill-customOrange flex flex-row gap-[12px] items-center sidebar-link py-[20px] px-[20px] transition-all duration-300 ease-in-out hover:bg-[#272729] hover:text-[#FF630B] ${
              isMinimized && "justify-center"
            } ${
              sidebarLink === "Appointments"
                ? "border-r-[4px] border-customOrange text-customOrange fill-customOrange"
                : "text-white fill-white"
            }`}
            onClick={() => {
              setSidebarLink("Appointments");
            }}
          >
            <div>
              <IconCalendar />
            </div>
            <span
              className={`w-fit absolute transition-[transform,opacity]  ${
                isMinimized ? "opacity-0 translate-x-[-30px]" : "opacity-100 translate-x-[30px]"
              }`}
            >
              Appointments
            </span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`hover:fill-customOrange flex flex-row gap-[12px] items-center sidebar-link py-[20px] px-[20px] transition-all duration-300 ease-in-out hover:bg-[#272729] hover:text-[#FF630B] ${
              isMinimized && "justify-center"
            } ${
              sidebarLink === "Messages"
                ? "border-r-[4px] border-customOrange text-customOrange fill-customOrange"
                : "text-white fill-white"
            }`}
            onClick={() => {
              setSidebarLink("Messages");
            }}
          >
            <div>
              <IconMail />
            </div>
            <span
              className={`w-fit absolute transition-[transform,opacity]  ${
                isMinimized ? "opacity-0 translate-x-[-30px]" : "opacity-100 translate-x-[30px]"
              }`}
            >
              Messages
            </span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`hover:fill-customOrange flex flex-row gap-[12px] items-center sidebar-link py-[20px] px-[20px] transition-all duration-300 ease-in-out hover:bg-[#272729] hover:text-[#FF630B] ${
              isMinimized && "justify-center"
            } ${
              sidebarLink === "Contacts"
                ? "border-r-[4px] border-customOrange text-customOrange fill-customOrange"
                : "text-white fill-white"
            }`}
            onClick={() => {
              setSidebarLink("Contacts");
            }}
          >
            <div>
              <IconSmiley />
            </div>
            <span
              className={`w-fit absolute transition-[transform,opacity]  ${
                isMinimized ? "opacity-0 translate-x-[-30px]" : "opacity-100 translate-x-[30px]"
              }`}
            >
              Contacts
            </span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`hover:fill-customOrange flex flex-row gap-[12px] items-center sidebar-link py-[20px] px-[20px] transition-all duration-300 ease-in-out hover:bg-[#272729] hover:text-[#FF630B] ${
              isMinimized && "justify-center"
            } ${
              sidebarLink === "Data"
                ? "border-r-[4px] border-customOrange text-customOrange fill-customOrange"
                : "text-white fill-white"
            }`}
            onClick={() => {
              setSidebarLink("Data");
            }}
          >
            <div>
              <IconData />
            </div>
            <span
              className={`w-fit absolute transition-[transform,opacity]  ${
                isMinimized ? "opacity-0 translate-x-[-30px]" : "opacity-100 translate-x-[30px]"
              }`}
            >
              Data Analytics
            </span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`hover:stroke-customOrange flex flex-row gap-[12px] items-center sidebar-link py-[20px] px-[20px] transition-all duration-300 ease-in-out hover:bg-[#272729] hover:text-[#FF630B] ${
              isMinimized && "justify-center"
            } ${
              sidebarLink === "Subscription"
                ? "border-r-[4px] border-customOrange text-customOrange stroke-customOrange"
                : "text-white stroke-white"
            }`}
            onClick={() => {
              setSidebarLink("Subscription");
            }}
          >
            <div>
              <IconSubscribe />
            </div>
            <span
              className={`w-fit absolute transition-[transform,opacity]  ${
                isMinimized ? "opacity-0 translate-x-[-30px]" : "opacity-100 translate-x-[30px]"
              }`}
            >
              Subscription
            </span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`hover:fill-customOrange flex flex-row gap-[12px] items-center sidebar-link py-[20px] px-[20px] transition-all duration-300 ease-in-out hover:bg-[#272729] hover:text-[#FF630B] ${
              isMinimized && "justify-center"
            } ${
              sidebarLink === "Help"
                ? "border-r-[4px] border-customOrange text-customOrange fill-customOrange"
                : "text-white fill-white"
            }`}
            onClick={() => {
              setSidebarLink("Help");
            }}
          >
            <div>
              <IconHelp />
            </div>
            <span
              className={`w-fit absolute transition-[transform,opacity]  ${
                isMinimized ? "opacity-0 translate-x-[-30px]" : "opacity-100 translate-x-[30px]"
              }`}
            >
              Help Center
            </span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`hover:fill-customOrange flex flex-row gap-[12px] items-center sidebar-link py-[20px] px-[20px] transition-all duration-300 ease-in-out hover:bg-[#272729] hover:text-[#FF630B] ${
              isMinimized && "justify-center"
            } ${
              sidebarLink === "Settings"
                ? "border-r-[4px] border-customOrange text-customOrange fill-customOrange"
                : "text-white fill-white"
            }`}
            onClick={() => {
              setSidebarLink("Settings");
            }}
          >
            <div>
              <IconSettings />
            </div>
            <span
              className={`w-fit absolute transition-[transform,opacity]  ${
                isMinimized ? "opacity-0 translate-x-[-30px]" : "opacity-100 translate-x-[30px]"
              }`}
            >
              Settings
            </span>
          </a>
        </li>
      </ul>
      <div className="flex flex-col justify-center items-center mx-[10px] py-[40px] border-t-[1px] border-white border-opacity-20 gap-[12px]">
        <div>
          <IconLogo width={20} height={20} color="#FF630B" />
        </div>
        <div>
          <h1 className="sidebar-copy text-white text-opacity-50">
            &copy; Lorem 2023
          </h1>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
