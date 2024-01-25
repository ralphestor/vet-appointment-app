"use client";

import React, { createContext, useState } from "react";
export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isExpand, setIsExpand] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [selectedVet, setSelectedVet] = useState("")
  const [activeInfo, setActiveInfo] = useState({
    "id": "",
    "title": "",
    "purpose": "",
    "date": "",
    "time_start_hr": 0,
    "time_start_min": 0,
    "time_end_hr": 0,
    "time_end_min": 0,
    "vet_id": "",
    "client": {
      "name": "",
      "email": "",
      "phone": "",
      "address": "",
      "imageUrl": ""
    },
    "clinic": {
      "name": "",
      "city": "",
      "email": "",
      "phone": "",
      "address": "",
      "imageUrl": ""
    },
    "pet": {
      "name": "",
      "type": "",
      "breed": "",
      "sex": "",
      "age": "",
      "birthday": "",
      "imageUrl": ""
    }
  })

  const toggleExpand = () => {
    setIsExpand(!isExpand);
  };

  const closeInfoBox = () => {
    setIsInfoOpen(false);
  }

  const openInfoBox = (id) => {
    setIsInfoOpen(true);
    setActiveInfo(data.find(info => info.id === id))
    console.log(activeInfo);
  }

  function remove(id) {
    setData(data.filter(d => d.id !== id));
  }

  return (
    <ThemeContext.Provider value={{ data, setData, isExpand, isInfoOpen, isFormOpen, setIsFormOpen, toggleExpand, closeInfoBox, openInfoBox, activeInfo, selectedVet, setSelectedVet, remove}}>
      <div>{children}</div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
