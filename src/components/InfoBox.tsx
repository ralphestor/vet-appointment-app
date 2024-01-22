import Image from "next/image";
import AppIconVerticalDots from "../../public/icons/app/icon-verticaldots";
import Info from "./Info";

const InfoBox = () => {
  return (
    <div className="hidden lg:block fixed right-0 top-[115px] w-[400px] h-[calc(100vh-115px)] overflow-y-auto flex flex-col max-w-[calc(100vh-115px)] z-[9999] bg-white" id="style-1">
      <div className="flex flex-row px-[40px] py-[20px] border-l border-b border-[#D8D3CC]">
        <div>
          <Image
            src="/images/chrissy.png"
            width={80}
            height={80}
            alt="Chrissie Lee"
          />
        </div>
        <div className="flex flex-col justify-center mr-auto ml-[24px]">
          <div>
            <h1 className="text-[#1C1C1E] text-[24px] font-[700]">
              Chrissie Lee
            </h1>
          </div>
          <div>
            <span className="text-[#9D9C9C] font-[500]">Client</span>
          </div>
        </div>
        <div className="flex items-center">
          <button className="rounded-full p-1 hover:bg-customOrange transition-all duration-300 ease-in-out">
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
            email="chrissielee@gmail.com"
            phone="+01 234 567 8910"
            address="1st Avenue, Golden Street, Springville Village, San Diego,
            California"
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
          <div className="rounded-full">
            <Image
              src="/images/building.png"
              width={52}
              height={52}
              alt="Chrissie Lee"
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col gap-[4px]">
            <div>
              <span className="text-[#1C1C1E] font-[700]">Silvervale Towers</span>
            </div>
            <div>
              <span className="text-[#9D9C9C] font-[500]">Los Angeles</span>
            </div>
          </div>
        </div>
        <div>
          <Info
            email="chrissielee@gmail.com"
            phone="+01 234 567 8910"
            address="1st Avenue, Golden Street, Springville Village, San Diego,
            California"
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
          <div className="rounded-full">
            <Image
              src="/images/dog.png"
              width={52}
              height={52}
              alt="Chrissie Lee"
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col gap-[4px]">
            <div>
              <span className="text-[#1C1C1E] font-[700]">Brownie</span>
            </div>
            <div>
              <span className="text-[#9D9C9C] font-[500]">Dog</span>
            </div>
          </div>
        </div>
        <div>
          <Info
            email=""
            phone=""
            address=""
            breed="French Bulldog"
            sex="Male"
            age="10 months"
            birthday="January 12, 2023"
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
