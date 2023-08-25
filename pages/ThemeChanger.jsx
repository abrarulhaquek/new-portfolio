// themeContext.js
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeChanger = ({ children }) => {
    const [theme, setTheme] = useState('dark'); // or 'dark'
    const themeColors = {
        light: {
            background: 'white',
            text: 'black',
            // other colors
        },
        dark: {
            background: 'black',
            text: 'white',
            // other colors
        }
    };

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
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


