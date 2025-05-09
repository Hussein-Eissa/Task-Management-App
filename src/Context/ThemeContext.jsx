// src/Context/ThemeContext.jsx
import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(prev => !prev);

  const themeClass = darkMode ? "bg-dark text-white" : "bg-light text-dark";

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme, themeClass }}>
      {children}
    </ThemeContext.Provider>
  );
};
