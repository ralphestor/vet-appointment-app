import React, { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

import Image from "next/image";
import AppIconVerticalDots from "../../public/icons/app/icon-verticaldots";
import Info from "./Info";
import IconDoubleChevronRight from "../../public/icons/sidebar/icon-doublechevronright";
import InfoIconClient from "../../public/icons/infobox/icon-client";
import InfoIconPet from "../../public/icons/infobox/icon-pet";
import InfoIconClinic from "../../public/icons/infobox/icon-clinic";

const InfoBox = () => {
  const { isInfoOpen, closeInfoBox, activeInfo } = useContext(ThemeContext);
  return (
    <div
      className={`hidden ${!isInfoOpen && "lg:hidden"} lg:block fixed right-0 top-[115px] w-[400px] h-[calc(100vh-115px)] overflow-y-auto flex flex-col max-w-[calc(100vh-115px)] z-[9999] bg-white`}
      id="style-1"
    >
      <div>
        <button className="fixed right-[400px] top-[50%] translate-x-[50%] translate-y-[-50%] z-[99999] flex justify-center items-center w-[36px] h-[36px] bg-white border border-[#D8D3CC] rounded-[8px] hover:bg-[#FFE0CE] transition-all duration-300 ease-in-out" onClick={() => closeInfoBox()}>
          <IconDoubleChevronRight />
        </button>
      </div>
      <div className="flex flex-row px-[40px] py-[20px] border-l border-b border-[#D8D3CC]">
        <div className="flex justify-center items-center rounded-full w-[80px] h-[80px] border border-[#D8D3CC]">
          {/* <Image
            src="/images/chrissy.png"
            width={80}
            height={80}
            alt="Chrissie Lee"
          /> */}
          <InfoIconClient />
        </div>
        <div className="flex flex-col justify-center mr-auto ml-[24px]">
          <div>
            <h1 className="text-[#1C1C1E] text-[24px] font-[700]">
              {activeInfo.client.name}
            </h1>
          </div>
          <div>
            <span className="text-[#9D9C9C] font-[500]">Client</span>
          </div>
        </div>
        <div className="flex items-center">
          <button className="rounded-full p-1 hover:bg-[#FFE0CE] transition-all duration-300 ease-in-out">
            <AppIconVerticalDots />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-[20px] px-[40px] py-[20px] border-l border-b border-[#D8D3CC]">
        <div>
          <h3 className="info-headings">CONTACT INFORMATION</h3>
        </div>
        <div>
          <Info
            email={activeInfo.client.email}
            phone={activeInfo.client.phone}
            address={activeInfo.client.address}
            breed=""
            sex=""
            age=""
            birthday=""
          />
        </div>
      </div>
      <div className="flex flex-col gap-[20px] px-[40px] py-[20px] border-l border-b border-[#D8D3CC]">
        <div>
          <h3 className="info-headings">CLINIC DETAILS</h3>
        </div>
        <div className="flex flex-row items-center gap-[24px]">
          <div className="flex justify-center items-center rounded-full w-[52px] h-[52px] border border-[#D8D3CC]">
            {/* <Image
              src="/images/building.png"
              width={52}
              height={52}
              alt="Chrissie Lee"
              className="rounded-full"
            /> */}
            <InfoIconClinic />
          </div>
          <div className="flex flex-col gap-[4px]">
            <div>
              <span className="text-[#1C1C1E] font-[700]">
                {activeInfo.clinic.name}
              </span>
            </div>
            <div>
              <span className="text-[#9D9C9C] font-[500]">{activeInfo.clinic.city}</span>
            </div>
          </div>
        </div>
        <div>
          <Info
            email={activeInfo.clinic.email}
            phone={activeInfo.clinic.phone}
            address={activeInfo.clinic.address}
            breed=""
            sex=""
            age=""
            birthday=""
          />
        </div>
      </div>
      <div className="flex flex-col gap-[20px] px-[40px] py-[20px] border-l border-b border-[#D8D3CC]">
        <div>
          <h3 className="info-headings">PET DETAILS</h3>
        </div>
        <div className="flex flex-row items-center gap-[24px]">
          <div className="flex justify-center items-center rounded-full w-[52px] h-[52px] border border-[#D8D3CC]">
            {/* <Image
              src="/images/dog.png"
              width={52}
              height={52}
              alt="Chrissie Lee"
              className="rounded-full"
            /> */}
            <InfoIconPet />
          </div>
          <div className="flex flex-col gap-[4px]">
            <div>
              <span className="text-[#1C1C1E] font-[700]">{activeInfo.pet.name}</span>
            </div>
            <div>
              <span className="text-[#9D9C9C] font-[500]">{activeInfo.pet.type}</span>
            </div>
          </div>
        </div>
        <div>
          <Info
            email=""
            phone=""
            address=""
            breed={activeInfo.pet.breed}
            sex={activeInfo.pet.sex}
            age={activeInfo.pet.age}
            birthday={activeInfo.pet.birthday}
          />
        </div>
      </div>
      <div className="flex flex-col gap-[20px] px-[40px] py-[20px] border-l border-b border-[#D8D3CC]">
        <button className="rounded-[12px] bg-[#ff630b] px-[20px] py-[12px] text-white hover:bg-[#FFE0CE] hover:text-[#ff630b] transition-all duration-300 ease-in-out font-[500]">
          Reschedule Appointment
        </button>
        <button className="border border-[#D8D3CC] rounded-[12px] bg-[#FFF] px-[20px] py-[12px] text-[#9D9C9C] hover:text-[#ff630b] hover:border-customOrange transition-all duration-300 ease-in-out font-[500]">
          Cancel Appointment
        </button>
      </div>
    </div>
  );
};

export default InfoBox;
