import React, { useState, useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

import ReactDOM from "react-dom";
import { useForm, SubmitHandler } from "react-hook-form";

import AppIconLeftChevron from "../../public/icons/app/icon-leftchevron";
import vetData from "@/data/veterinary.json";

enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

interface IFormInput {
  firstName: String;
  gender: GenderEnum;
}

const AppointmentForm = () => {
  const { isExpand, setIsFormOpen } = useContext(ThemeContext);
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  return (
    <form
      className={`flex flex-col w-full mt-[280px] sm:mt-[230px] lg:mt-[116px] transition-all duration-300 ease-in-out ml-0 ${
        isExpand
          ? "lg:ml-[240px] lg:w-[calc(100%-240px)]"
          : "lg:ml-[120px] lg:w-[calc(100%-120px)]"
      } `}
    >
      <header className="flex flex-col justify-center gap-[10px] border-b border-[#D8D3CC] px-[40px] py-[20px]">
        <button
          className="flex flex-row justify-center items-center w-fit border border-[#D8D3CC] rounded-[12px] bg-[#FFF] px-[20px] py-[12px] text-[#49494B] hover:text-[#ff630b] hover:border-customOrange transition-all duration-300 ease-in-out font-[500] stroke-[#49494B] hover:stroke-customOrange gap-[4px]"
          onClick={() => setIsFormOpen(false)}
        >
          <AppIconLeftChevron />
          <span>Back</span>
        </button>
        <h1 className="font-[700] text-[24px] text-[#1C1C1E]">
          New Appointment
        </h1>
      </header>
      <section className="px-[40px] py-[20px] flex flex-col gap-[10px] border-b border-[#D8D3CC]">
        <div className="font-[700]">Appointment Details</div>
        <div className="flex flex-row gap-[10px]">
          <label htmlFor="FullName">Title:</label>
          <input
            name="FullName"
            id="FullName"
            className="px-[10px] outline-none bg-gray-100 rounded"
          />
        </div>
        <div className="flex flex-row gap-[10px]">
          <label htmlFor="FullName">Appointment Date:</label>
          <input
            name="FullName"
            id="FullName"
            className="px-[10px] outline-none bg-gray-100 rounded"
          />
        </div>
        <div className="flex flex-row gap-[10px]">
          <label htmlFor="FullName">Time Start:</label>
          <input
            name="FullName"
            id="FullName"
            className="px-[10px] outline-none bg-gray-100 rounded"
          />
        </div>
        <div className="flex flex-row gap-[10px]">
          <label htmlFor="FullName">Time End:</label>
          <input
            name="FullName"
            id="FullName"
            className="px-[10px] outline-none bg-gray-100 rounded"
          />
        </div>
        <div className="flex flex-row gap-[10px]">
          <label>Purpose:</label>
          <select
            {...register("gender")}
            className="px-[10px] outline-none bg-gray-100 rounded"
          >
            <option value="consult">Consultation</option>
            <option value="vaccine">Vaccination</option>
          </select>
        </div>
        <div className="flex flex-row gap-[10px]">
          <label>Choose Clinic Branch</label>
          <select
            {...register("gender")}
            className="px-[10px] outline-none bg-gray-100 rounded"
          >
            <option value="Grow Bow Vett">Grow Bow Vett</option>
          </select>
        </div>
        <div className="flex flex-row gap-[10px]">
          <label>Choose Veterinarian</label>
          <select
            {...register("gender")}
            className="px-[10px] outline-none bg-gray-100 rounded"
          >
            {vetData.map((vet) => {
              return (
                <option key={vet.vet_id} id={vet.vet_id} value={vet.vet_id}>
                  {vet.veterinary_name}
                </option>
              );
            })}
          </select>
        </div>
      </section>

      <section className="px-[40px] py-[20px] flex flex-col gap-[10px] border-b border-[#D8D3CC]">
        <div className="font-[700]">Client Details</div>
        <div className="flex flex-row gap-[10px]">
          <label htmlFor="FullName">Full Name:</label>
          <input
            name="FullName"
            id="FullName"
            className="px-[10px] outline-none bg-gray-100 rounded"
          />
        </div>
        <div className="flex flex-row gap-[10px]">
          <label htmlFor="clientEmail">Email:</label>
          <input
            name="clientEmail"
            id="clientEmail"
            className="px-[10px] outline-none bg-gray-100 rounded"
          />
        </div>
        <div className="flex flex-row gap-[10px]">
          <label htmlFor="clientPhone">Phone:</label>
          <input
            name="clientPhone"
            id="clientPhone"
            className="px-[10px] outline-none bg-gray-100 rounded"
          />
        </div>
        <div className="flex flex-row gap-[10px]">
          <label htmlFor="clientAddress">Address:</label>
          <input
            name="clientAddress"
            id="clientAddress"
            className="px-[10px] outline-none bg-gray-100 rounded"
          />
        </div>
        <div className="flex flex-row gap-[10px]">
          <label htmlFor="clientImage">Image URL:</label>
          <input
            name="clientImage"
            id="clientImage"
            className="px-[10px] outline-none bg-gray-100 rounded"
          />
        </div>
      </section>

      <section className="px-[40px] py-[20px] flex flex-col gap-[10px] border-b border-[#D8D3CC]">
        <div className="font-[700]">Pet Details</div>
        <div className="flex flex-row gap-[10px]">
          <label htmlFor="petName">Pet Name:</label>
          <input
            name="petName"
            id="petName"
            className="px-[10px] outline-none bg-gray-100 rounded"
          />
        </div>
        <div className="flex flex-row gap-[10px]">
          <label htmlFor="petType">Type of Animal:</label>
          <input
            name="petType"
            id="petType"
            className="px-[10px] outline-none bg-gray-100 rounded"
          />
        </div>
        <div className="flex flex-row gap-[10px]">
          <label htmlFor="petBreed">Breed:</label>
          <input
            name="petBreed"
            id="petBreed"
            className="px-[10px] outline-none bg-gray-100 rounded"
          />
        </div>
        <div className="flex flex-row gap-[10px]">
          <label htmlFor="petSex">Sex:</label>
          <select
            {...register("gender")}
            className="px-[10px] outline-none bg-gray-100 rounded"
          >
            <option value="consult">Male</option>
            <option value="vaccine">Female</option>
          </select>
        </div>
        <div className="flex flex-row gap-[10px]">
          <label htmlFor="petAge">Age:</label>
          <input
            name="petAge"
            id="petAge"
            className="px-[10px] outline-none bg-gray-100 rounded"
          />
        </div>
        <div className="flex flex-row gap-[10px]">
          <label htmlFor="petAge">Birthday:</label>
          <input
            name="petBirthday"
            id="petBirthday"
            className="px-[10px] outline-none bg-gray-100 rounded"
          />
        </div>
      </section>
      <input
        type="submit"
        className="rounded-[12px] bg-[#ff630b] px-[20px] py-[12px] text-white hover:bg-[#FFE0CE] hover:text-[#ff630b] transition-all duration-300 ease-in-out font-[500] mx-[40px] my-[20px]"
      />
    </form>
  );
};

export default AppointmentForm;
