"use client";

import React, { createContext, useState } from "react";
export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isExpand, setIsExpand] = useState(true);
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  const toggleExpand = () => {
    setIsExpand(!isExpand);
  };

  const toggleInfoOpen = () => {
    setIsInfoOpen(!isInfoOpen);
  }

  return (
    <ThemeContext.Provider value={{ isExpand, isInfoOpen, toggleExpand, toggleInfoOpen }}>
      <div>{children}</div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
