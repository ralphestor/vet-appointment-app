import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import Appointment from "./Appointment";
import appointmentData from "@/data/appointments.json";

interface Client {
  name: string;
  email: string;
  phone: string;
  address: string;
  imageUrl: string;
}

interface Clinic {
  name: string;
  city: string;
  email: string;
  phone: string;
  address: string;
  imageUrl: string;
}

interface Pet {
  name: string;
  type: string;
  breed: string;
  sex: string;
  age: string;
  birthday: string;
  imageUrl: string;
}

interface AppointmentData {
  id: string;
  title: string;
  purpose: string;
  date: string;
  time_start_hr: number;
  time_start_min: number;
  time_end_hr: number;
  time_end_min: number;
  vet_id: string;
  client: Client;
  clinic: Clinic;
  pet: Pet;
}

const AppointmentList = () => {
  const { data, setData, selectedVet } = useContext(ThemeContext);

  useEffect(() => {
    setData(appointmentData)
  }, [setData]);

  useEffect(() => {
    console.log(data.filter((appointment: AppointmentData) => appointment.vet_id === selectedVet))
  }, [selectedVet]);

  return (
    <div>
      {data.filter((appointment: AppointmentData) => appointment.vet_id === selectedVet).map((appointment:AppointmentData) => (
        <Appointment
          key={appointment.id}
          id={appointment.id}
          title={appointment.title}
          type={appointment.purpose}
          timeStartHr={
            appointment.time_start_hr > 12
              ? (appointment.time_start_hr - 12).toLocaleString("en-US", {
                  minimumIntegerDigits: 1,
                  useGrouping: false,
                })
              : appointment.time_start_hr.toLocaleString("en-US", {
                  minimumIntegerDigits: 1,
                  useGrouping: false,
                })
          }
          timeStartMin={appointment.time_start_min.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })}
          timeEndHr={
            appointment.time_end_hr > 12
              ? (appointment.time_end_hr - 12).toLocaleString("en-US", {
                  minimumIntegerDigits: 1,
                  useGrouping: false,
                })
              : appointment.time_end_hr.toLocaleString("en-US", {
                  minimumIntegerDigits: 1,
                  useGrouping: false,
                })
          }
          timeEndMin={appointment.time_end_min.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })}
          startMeridiem={appointment.time_start_hr > 12 ? "PM" : "AM"}
          endMeridiem={appointment.time_end_hr > 12 ? "PM" : "AM"}
          clientName={appointment.client.name}
          startingY={((appointment.time_start_hr*60)+appointment.time_start_min)*1.666666667}
          componentHeight={((appointment.time_end_hr*60+appointment.time_end_min)-(appointment.time_start_hr*60+appointment.time_start_min))*1.666666667}
        />
      ))}
    </div>
  );
};

export default AppointmentList;
