// eslint-disable-next-line no-unused-vars
import React, { useState, createContext, useContext } from "react";

// Create the ThemeContext
export const ThemeContext = createContext();

// Create the ThemeProvider
// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("dark");

    const handleToggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    };

    return (
        <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Create the DarkLight component
export const DarkLight = () => {
    const { theme, handleToggleTheme } = useContext(ThemeContext);

    return (
        <div
            className={`min-h-screen border flex flex-col justify-center items-center px-[500px] ${
                theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
            }`}
        >
            <h1 className={`my-4 text-4xl ${theme === "dark" ? "text-white" : "text-black"}`}>Dark Light Mode Website</h1>
            <p className={`my-2 text-3xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>Hello!! My React Fans 👍</p>
            <button
                onClick={handleToggleTheme}
                title={theme === "dark" ? "Switch to Light Mode" : "Switch to dark mode"}
                className={`bg-red-500 hover:bg-red-700 text-white text-4xl font-bold rounded-lg mt-4 ${theme === "dark" ? "px-5" : 'px-6'} p-4`}>
                {theme === "dark" ? "☼" : "☾"}
            </button>
        </div>
    );
};

// App Component
const MixedComponent = () => {
    return (
        <ThemeProvider>
            <DarkLight />
        </ThemeProvider>
    );
};

export default MixedComponent;
