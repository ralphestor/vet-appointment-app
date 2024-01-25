"use client";

import React, { useState, useContext, use } from "react";
import AppIconConsult from "../../public/icons/app/icon-consult";
import AppIconVaccine from "../../public/icons/app/icon-vaccine";
import AppIconVerticalDots from "../../public/icons/app/icon-verticaldots";
import AppIconVet from "../../public/icons/app/icon-client";
import { ThemeContext } from "@/context/ThemeContext";

interface AppointmentProps {
  id: string;
  title: string;
  type: string;
  timeStartHr: string;
  timeStartMin: string;
  timeEndHr: string;
  timeEndMin: string;
  startMeridiem: string;
  endMeridiem: string;
  clientName: string;
  startingY: number;
  componentHeight: number;
}

const Appointment = ({
  id,
  title,
  type,
  timeStartHr,
  timeStartMin,
  timeEndHr,
  timeEndMin,
  startMeridiem,
  endMeridiem,
  clientName,
  startingY,
  componentHeight,
}: AppointmentProps) => {
  const { setIsInfoOpen, openInfoBox, remove } = useContext(ThemeContext);
  const [showActionBox, setShowActionBox] = useState(false);
  return (
    <section
      className={`absolute w-[calc(100%-40px)] grid grid-cols-[36px,auto,20px] gap-[12px] mx-[20px] p-[20px] ${
        type === "consult"
          ? "consult-appointment"
          : type === "vaccine"
          ? "vaccine-appointment"
          : ""
      }`}
      style={{ top: `${startingY}px`, height: `${componentHeight}px` }}
    >
      <div>
        <div
          className={`w-[36px] h-[36px] rounded-full ${
            type === "consult"
              ? "consult-icon"
              : type === "vaccine"
              ? "vaccine-icon"
              : ""
          }`}
        >
          {type === "consult" ? <AppIconConsult /> : <AppIconVaccine />}
        </div>
      </div>
      <div className="flex flex-col gap-[12px]">
        <div className="flex flex-col text-left gap-[8px]">
          <button className="w-fit" onClick={() => openInfoBox(id)}>
            <h1 className="flex items-center text-[#1C1C1E] text-[16px] font-[700]">
              {title}
            </h1>
          </button>

          <span className="flex items-center text-[#1C1C1E] text-[12px] font -[500]">
            {timeStartHr}:{timeStartMin} {startMeridiem} - {timeEndHr}:
            {timeEndMin} {endMeridiem}
          </span>
        </div>
        <div
          className={`${
            type === "consult"
              ? "stroke-[#9747FF]"
              : type === "vaccine"
              ? "stroke-[#FF9447]"
              : ""
          }  flex gap-[8px] items-center text-left`}
        >
          <AppIconVet />
          <span className="text-[#1C1C1E] text-[12px] font-[500]">
            {clientName}
          </span>
        </div>
      </div>
      <div className="relative flex flex-row">
        <button
          className={`flex justify-center items-center w-[30px] h-[30px] p-1 rounded-full transition-all duration-300 ease-in-out ${
            type === "consult"
              ? "hover:bg-[#EADAFF]"
              : type === "vaccine"
              ? "hover:bg-[#FFEADA]"
              : ""
          }  `}
          onClick={() => setShowActionBox(!showActionBox)}
        >
          <AppIconVerticalDots />
        </button>
        <ul
          className={`${
            !showActionBox && "hidden"
          } w-[100px] absolute right-0 translate-y-[30px] bg-[#FFFFFF80] border ${
            type === "consult"
              ? "border-[#9747FF]"
              : type === "vaccine"
              ? "border-[#FF9447]"
              : ""
          }`}
        >
          <li className="">
            <button
              className={`flex w-full pl-[10px] font-medium text-black hover:text-white transition-all duration-300 ease-in-out ${
                type === "consult"
                  ? "hover:bg-[#9747FF]"
                  : type === "vaccine"
                  ? "hover:bg-[#FF9447]"
                  : ""
              }`}
              onClick={() => {
                openInfoBox(id);
                setShowActionBox(!showActionBox);
              }}
            >
              View Info
            </button>
          </li>
          <li>
            <button
              className={`flex w-full pl-[10px] font-medium text-black hover:text-white transition-all duration-300 ease-in-out ${
                type === "consult"
                  ? "hover:bg-[#9747FF]"
                  : type === "vaccine"
                  ? "hover:bg-[#FF9447]"
                  : ""
              }`}
            >
              Update
            </button>
          </li>
          <li>
            <button
              className={`flex w-full pl-[10px] font-medium text-black hover:text-white transition-all duration-300 ease-in-out ${
                type === "consult"
                  ? "hover:bg-[#9747FF]"
                  : type === "vaccine"
                  ? "hover:bg-[#FF9447]"
                  : ""
              }`}
              onClick={() => remove(id)}
            >
              Delete
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Appointment;
