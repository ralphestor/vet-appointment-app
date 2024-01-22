import AppIconConsult from "../../public/icons/app/icon-consult";
import AppIconVaccine from "../../public/icons/app/icon-vaccine";
import AppIconVerticalDots from "../../public/icons/app/icon-verticaldots";
import AppIconVet from "../../public/icons/app/icon-client";

interface AppointmentProps {
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
  componentHeight
}: AppointmentProps) => {
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
          className={`${
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
          <h1 className="flex items-center text-[#1C1C1E] text-[16px] font-[700]">
            {title}
          </h1>

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
      <div className="flex flex-row">
        <button className="rounded-full p-1 hover:bg-[#EADAFF] transition-all duration-300 ease-in-out">
          <AppIconVerticalDots />
        </button>
      </div>
    </section>
  );
};

export default Appointment;
