import InfoIconAge from "../../public/icons/infobox/icon-age";
import InfoIconBreed from "../../public/icons/infobox/icon-breed";
import InfoIconCalendar from "../../public/icons/infobox/icon-calendar";
import InfoIconMessage from "../../public/icons/infobox/icon-message";
import InfoIconPhone from "../../public/icons/infobox/icon-phone";
import InfoIconPin from "../../public/icons/infobox/icon-pin";
import InfoIconSex from "../../public/icons/infobox/icon-sex";

interface InfoProps {
  email: string;
  phone: string;
  address: string;
  breed: string;
  sex: string;
  age: string;
  birthday: string;
}

const Info = ({
  email,
  phone,
  address,
  breed,
  sex,
  age,
  birthday,
}: InfoProps) => {
  return (
    <section className="flex flex-col gap-[20px]">
      {email && (
        <div className="flex flex-row gap-[20px]">
          <div className="flex flex-row gap-[8px]">
            <div>
              <InfoIconMessage />
            </div>
            <div className="w-[70px]">
              <span className="text-[#9D9C9C] font-medium">Email</span>
            </div>
          </div>
          <div>
            <span className="text-[#1C1C1E] font-medium">{email}</span>
          </div>
        </div>
      )}
      {phone && (
        <div className="flex flex-row gap-[20px]">
          <div className="flex flex-row gap-[8px]">
            <div>
              <InfoIconPhone />
            </div>
            <div className="w-[70px]">
              <span className="text-[#9D9C9C] font-medium">Phone</span>
            </div>
          </div>
          <div>
            <span className="text-[#1C1C1E] font-medium">{phone}</span>
          </div>
        </div>
      )}
      {address && (
        <div className="flex flex-row gap-[20px]">
          <div className="flex flex-row gap-[8px]">
            <div>
              <InfoIconPin />
            </div>
            <div className="w-[70px]">
              <span className="text-[#9D9C9C] font-medium">Address</span>
            </div>
          </div>
          <div>
            <span className="text-[#1C1C1E] font-medium">{address}</span>
          </div>
        </div>
      )}
      {breed && (
        <div className="flex flex-row gap-[20px]">
          <div className="flex flex-row gap-[8px]">
            <div>
              <InfoIconBreed />
            </div>
            <div className="w-[70px]">
              <span className="text-[#9D9C9C] font-medium">Breed</span>
            </div>
          </div>
          <div>
            <span className="text-[#1C1C1E] font-medium">{breed}</span>
          </div>
        </div>
      )}

      {sex && (
        <div className="flex flex-row gap-[20px]">
          <div className="flex flex-row gap-[8px]">
            <div>
              <InfoIconSex />
            </div>
            <div className="w-[70px]">
              <span className="text-[#9D9C9C] font-medium">Sex</span>
            </div>
          </div>
          <div>
            <span className="text-[#1C1C1E] font-medium">{sex}</span>
          </div>
        </div>
      )}

      {age && (
        <div className="flex flex-row gap-[20px]">
          <div className="flex flex-row gap-[8px]">
            <div>
              <InfoIconAge />
            </div>
            <div className="w-[70px]">
              <span className="text-[#9D9C9C] font-medium">Age</span>
            </div>
          </div>
          <div>
            <span className="text-[#1C1C1E] font-medium">{age}</span>
          </div>
        </div>
      )}

      {birthday && (
        <div className="flex flex-row gap-[20px]">
          <div className="flex flex-row gap-[8px]">
            <div>
              <InfoIconCalendar />
            </div>
            <div className="w-[70px]">
              <span className="text-[#9D9C9C] font-medium">Birthday</span>
            </div>
          </div>
          <div>
            <span className="text-[#1C1C1E] font-medium">{birthday}</span>
          </div>
        </div>
      )}
    </section>
  );
};

export default Info;
