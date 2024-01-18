import AppIconLeftChevron from "../../public/icons/app/icon-leftchevron";
import AppIconRightChevron from "../../public/icons/app/icon-rightchevron";

const AppointmentHeader = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-[12px] lg:gap-0 justify-between items-center px-[40px] py-[20px]">
      <div className="flex flex-col gap-[12px] items-center lg:items-start">
        <div>
          <span className="text-[#9D9C9C] text-center lg:text-start font-medium">
            Appointments
          </span>
        </div>
        <div className="flex flex-col-reverse items-center lg:flex-row gap-[12px]">
          <div>
            <h1 className="font-[700] text-[24px] text-[#1C1C1E] text-center lg:text-start">
              June
            </h1>
          </div>
          <div className="flex flex-row gap-[12px]">
            <div>
              <button className="stroke-[#49494B] flex justify-center items-center w-[36px] h-[36px] bg-[#F2F2F1] rounded-full hover:stroke-customOrange hover:bg-[#FFE0CE] focus:stroke-customOrange focus:bg-[#F2F2F1] focus:border-customOrange focus:border-[1px] active:bg-customOrange active:stroke-white transition-all duration-300 ease-in-out">
                <AppIconLeftChevron />
              </button>
            </div>
            <div>
              <button className="stroke-[#49494B] flex justify-center items-center font-medium w-[36px] h-[36px] bg-[#F2F2F1] rounded-full hover:stroke-customOrange hover:bg-[#FFE0CE] focus:stroke-customOrange focus:bg-[#F2F2F1] focus:border-customOrange focus:border-[1px] active:bg-customOrange active:stroke-white transition-all duration-300 ease-in-out">
                <AppIconRightChevron />
              </button>
            </div>
          </div>
        </div>
        <div>
          <p className="text-[#9D9C9C] text-center lg:text-start font-medium">
            Today is Tuesday, June 6, 2023
          </p>
        </div>
      </div>
      <div>
        <button className="rounded-[12px] bg-[#ff630b] px-[20px] py-[12px] text-white hover:bg-[#FFE0CE] hover:text-[#ff630b] transition-all duration-300 ease-in-out font-[500]">
          New Appointment
        </button>
      </div>
    </div>
  );
};

export default AppointmentHeader;
