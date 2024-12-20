import React, { createContext, useContext, useEffect, useState } from 'react'

export const Context = createContext();
export const context = () => useContext(Context);

function ContextProvider({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  
    useEffect(() => {
      const root = window.document.documentElement;
      const body = window.document.body;
      
      if (theme === "dark") {
        root.classList.add("dark");
        body.style.backgroundColor = "#1A1A1A";
      } else {
        root.classList.remove("dark");
        body.style.backgroundColor = "#F5F5F5";
      }
      localStorage.setItem("theme", theme);
    }, [theme]);
  
    const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

  return (
    <Context.Provider value={{ toggleTheme, theme }}>
        {children}
    </Context.Provider>
  )
}

export default ContextProvider