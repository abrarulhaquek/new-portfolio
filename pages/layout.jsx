// components/Layout.js
import React from 'react';
import { useTheme } from './ThemeChanger';

const Layout = ({ children }) => {
    const { theme, themeColors } = useTheme();
    const colors = themeColors[theme];


    return (
        <div
            className="layout-container"
            style={{ background: colors.background, color: colors.text }}
        >
            {children}
        </div>
    );
};

export default Layout;

