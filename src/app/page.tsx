"use client";

import React, { useState, useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import SearchBar from "@/components/SearchBar";

// Icons
import AppIconDownChevron from "../../public/icons/app/icon-downchevron";
import AppIconNotif from "../../public/icons/app/icon-notif";
import AppIconSettings from "../../public/icons/app/icon-settings";
import AppIconLogout from "../../public/icons/app/icon-logout";
import AppointmentHeader from "@/components/AppointmentHeader";
import AppointmentTable from "@/components/AppointmentTable";
import InfoBox from "@/components/InfoBox";

export default function Home() {
  const { isExpand } = useContext(ThemeContext);
  return (
    <main className={`relative w-[calc(100vw-17px)] ${
      isExpand ? "lg:w-[calc(100vw-240px-17px)]" : "lg:w-[calc(100vw-120px-17px)]"
    }`}>
      <header
        className={`bg-white w-full ${
          isExpand ? "lg:w-[calc(100vw-240px)]" : "lg:w-[calc(100vw-120px)]"
        } fixed top-0 right-0 flex flex-col-reverse gap-[20px] lg:gap-0 px-[40px] py-[20px] lg:grid lg:grid-cols-[auto,max-content] justify-items-center items-center h-[200px] sm:h-[150px] lg:h-[115px] border-b-[1px] border-[#D8D3CC] z-[999] transition-width duration-300 ease-in-out translate-y-[80px] lg:translate-y-0`}
      >
        <div className="w-full px-[40px]">
          <SearchBar />
        </div>
        <div className="flex flex-col sm:flex-row gap-[12px] justify-between lg:justify-center items-center w-full pr-[40px] pl-[40px] lg:pl-0">
          <div>
            <button className="flex flex-row gap-[12px] justify-center items-center text-[#1C1C1E] hover:text-customOrange hover:stroke-customOrange hover:fill-customOrange transition-all duration-300 ease-in-out">
              <div>
                <Image
                  src="/images/avatar.png"
                  width={36}
                  height={36}
                  alt="Avatar"
                />
              </div>
              <div className="flex flex-row justify-center items-center gap-[4px]">
                <div className="w-full">
                  <span className="w-full text-[#1C1C1E] font-[600]">
                    Jane Dee
                  </span>
                </div>
                <div>
                  <AppIconDownChevron />
                </div>
              </div>
            </button>
          </div>

          <div className="flex flex-row gap-[12px]">
            <div>
              <button className="stroke-[#49494B] flex justify-center items-center w-[36px] h-[36px] bg-[#F2F2F1] rounded-full hover:stroke-customOrange hover:bg-[#FFE0CE] focus:stroke-customOrange focus:bg-[#F2F2F1] focus:border-customOrange focus:border-[1px] active:bg-customOrange active:stroke-white transition-all duration-300 ease-in-out">
                <AppIconNotif />
              </button>
            </div>
            <div>
              <button className="fill-[#49494B] stroke-[#49494B] stroke-[0.1px] flex justify-center items-center w-[36px] h-[36px] bg-[#F2F2F1] rounded-full hover:stroke-customOrange hover:fill-customOrange hover:bg-[#FFE0CE] focus:stroke-customOrange focus:fill-customOrange focus:bg-[#F2F2F1] focus:border-customOrange focus:border-[1px] active:bg-customOrange active:stroke-white active:fill-white transition-all duration-300 ease-in-out">
                <AppIconSettings />
              </button>
            </div>
            <div>
              <button className="stroke-[#49494B] flex justify-center items-center w-[36px] h-[36px] bg-[#F2F2F1] rounded-full hover:stroke-customOrange hover:bg-[#FFE0CE] focus:stroke-customOrange focus:bg-[#F2F2F1] focus:border-customOrange focus:border-[1px] active:bg-customOrange active:stroke-white transition-all duration-300 ease-in-out">
                <AppIconLogout />
              </button>
            </div>
          </div>
        </div>
      </header>
      <article className="relative w-full">
        <section
          className={`relative w-[100%] flex flex-col mt-[280px] sm:mt-[230px] lg:mt-[116px] transition-all duration-300 ease-in-out ml-0 ${
            isExpand ? "lg:ml-[240px]" : "lg:ml-[120px]"
          } `}
        >
          <>
            <AppointmentHeader />
          </>
          <>
            <AppointmentTable />
          </>
        </section>
        <section>
          <InfoBox />
        </section>
      </article>
    </main>
  );
}
