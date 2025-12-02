// ThemeChanger.js
import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeChangerProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // or 'dark'
  const themeColors = {
    light: {
      background: "white",
      text: "black",
    },
    dark: {
      background: "black",
      text: "white",
    },
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, themeColors, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
