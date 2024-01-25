import React, { useState, useContext, ChangeEvent } from "react";
import { ThemeContext } from "@/context/ThemeContext";

import AppointmentList from "./AppointmentList";
import vetData from "@/data/veterinary.json";

const AppointmentTable = () => {
  const { setData, selectedVet, setSelectedVet } = useContext(ThemeContext);

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedVet(event.target.value);
  };

  return (
    <table className="border-t border-[#D8D3CC]">
      <thead className="border-b border-[#D8D3CC]">
        <tr>
          <th className="flex flex-col sm:flex-row justify-center items-center gap-[4px] py-[20px] table-header">
            <h1>Schedule board for:</h1>
            <select className="border border-[#D8D3CC] rounded-[4px] px-[10px]" onChange={handleSelectChange} defaultValue={selectedVet}>
              <option value="">Select Vet Name</option>
              {vetData.map((vet) => {
                return <option key={vet.vet_id} id={vet.vet_id} value={vet.vet_id}>{vet.veterinary_name}</option>;
              })}
            </select>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-[#D8D3CC] grid grid-cols-[140px,auto]">
          <th className="border-r border-[#D8D3CC] h-[99px] flex items-center justify-center table-header">
            12:00 AM
          </th>
          <td className="relative">
            <div className="absolute w-full">
              <AppointmentList />
            </div>
          </td>
        </tr>
        <tr className="border-b border-[#D8D3CC] grid grid-cols-[140px,auto]">
          <th className="border-r border-[#D8D3CC] h-[99px] flex items-center justify-center table-header">
            1:00 AM
          </th>
          <td></td>
        </tr>
        <tr className="border-b border-[#D8D3CC] grid grid-cols-[140px,auto]">
          <th className="border-r border-[#D8D3CC] h-[99px] flex items-center justify-center table-header">
            2:00 AM
          </th>
          <td></td>
        </tr>
        <tr className="border-b border-[#D8D3CC] grid grid-cols-[140px,auto]">
          <th className="border-r border-[#D8D3CC] h-[99px] flex items-center justify-center table-header">
            3:00 AM
          </th>
          <td></td>
        </tr>
        <tr className="border-b border-[#D8D3CC] grid grid-cols-[140px,auto]">
          <th className="border-r border-[#D8D3CC] h-[99px] flex items-center justify-center table-header">
            4:00 AM
          </th>
          <td></td>
        </tr>
        <tr className="border-b border-[#D8D3CC] grid grid-cols-[140px,auto]">
          <th className="border-r border-[#D8D3CC] h-[99px] flex items-center justify-center table-header">
            5:00 AM
          </th>
          <td></td>
        </tr>
        <tr className="border-b border-[#D8D3CC] grid grid-cols-[140px,auto]">
          <th className="border-r border-[#D8D3CC] h-[99px] flex items-center justify-center table-header">
            6:00 AM
          </th>
          <td></td>
        </tr>
        <tr className="border-b border-[#D8D3CC] grid grid-cols-[140px,auto]">
          <th className="border-r border-[#D8D3CC] h-[99px] flex items-center justify-center table-header">
            7:00 AM
          </th>
          <td></td>
        </tr>
        <tr className="border-b border-[#D8D3CC] grid grid-cols-[140px,auto]">
          <th className="border-r border-[#D8D3CC] h-[99px] flex items-center justify-center table-header">
            8:00 AM
          </th>
          <td></td>
        </tr>
        <tr className="border-b border-[#D8D3CC] grid grid-cols-[140px,auto]">
          <th className="border-r border-[#D8D3CC] h-[99px] flex items-center justify-center table-header">
            9:00 AM
          </th>
          <td></td>
        </tr>
        <tr className="border-b border-[#D8D3CC] grid grid-cols-[140px,auto]">
          <th className="border-r border-[#D8D3CC] h-[99px] flex items-center justify-center table-header">
            10:00 AM
          </th>
          <td></td>
        </tr>
        <tr className="border-b border-[#D8D3CC] grid grid-cols-[140px,auto]">
          <th className="border-r border-[#D8D3CC] h-[99px] flex items-center justify-center table-header">
            11:00 AM
          </th>
          <td></td>
        </tr>
        <tr className="border-b border-[#D8D3CC] grid grid-cols-[140px,auto]">
          <th className="border-r border-[#D8D3CC] h-[99px] flex items-center justify-center table-header">
            12:00 PM
          </th>
          <td></td>
        </tr>
        <tr className="border-b border-[#D8D3CC] grid grid-cols-[140px,auto]">
          <th className="border-r border-[#D8D3CC] h-[99px] flex items-center justify-center table-header">
            1:00 PM
          </th>
          <td></td>
        </tr>
        <tr className="border-b border-[#D8D3CC] grid grid-cols-[140px,auto]">
          <th className="border-r border-[#D8D3CC] h-[99px] flex items-center justify-center table-header">
            2:00 PM
          </th>
          <td></td>
        </tr>
        <tr className="border-b border-[#D8D3CC] grid grid-cols-[140px,auto]">
          <th className="border-r border-[#D8D3CC] h-[99px] flex items-center justify-center table-header">
            3:00 PM
          </th>
          <td></td>
        </tr>
        <tr className="border-b border-[#D8D3CC] grid grid-cols-[140px,auto]">
          <th className="border-r border-[#D8D3CC] h-[99px] flex items-center justify-center table-header">
            4:00 PM
          </th>
          <td></td>
        </tr>
        <tr className="border-b border-[#D8D3CC] grid grid-cols-[140px,auto]">
          <th className="border-r border-[#D8D3CC] h-[99px] flex items-center justify-center table-header">
            5:00 PM
          </th>
          <td></td>
        </tr>
        <tr className="border-b border-[#D8D3CC] grid grid-cols-[140px,auto]">
          <th className="border-r border-[#D8D3CC] h-[99px] flex items-center justify-center table-header">
            6:00 PM
          </th>
          <td></td>
        </tr>
        <tr className="border-b border-[#D8D3CC] grid grid-cols-[140px,auto]">
          <th className="border-r border-[#D8D3CC] h-[99px] flex items-center justify-center table-header">
            7:00 PM
          </th>
          <td></td>
        </tr>
        <tr className="border-b border-[#D8D3CC] grid grid-cols-[140px,auto]">
          <th className="border-r border-[#D8D3CC] h-[99px] flex items-center justify-center table-header">
            8:00 PM
          </th>
          <td></td>
        </tr>
        <tr className="border-b border-[#D8D3CC] grid grid-cols-[140px,auto]">
          <th className="border-r border-[#D8D3CC] h-[99px] flex items-center justify-center table-header">
            9:00 PM
          </th>
          <td></td>
        </tr>
        <tr className="border-b border-[#D8D3CC] grid grid-cols-[140px,auto]">
          <th className="border-r border-[#D8D3CC] h-[99px] flex items-center justify-center table-header">
            10:00 PM
          </th>
          <td></td>
        </tr>
        <tr className="border-b border-[#D8D3CC] grid grid-cols-[140px,auto]">
          <th className="border-r border-[#D8D3CC] h-[99px] flex items-center justify-center table-header">
            11:00 PM
          </th>
          <td></td>
        </tr>
        <tr className="grid grid-cols-[140px,auto]">
          <th className="border-r border-[#D8D3CC] h-[99px] flex items-center justify-center table-header">
            12:00 AM
          </th>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
};

export default AppointmentTable;
