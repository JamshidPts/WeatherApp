import React, { createContext, useContext, useEffect, useState } from 'react'
import day from "../assets/animated/day.svg"
import night from "../assets/animated/night.svg"
import dayCloud1 from "../assets/animated/cloudy-day-1.svg"
import nightCloud1 from "../assets/animated/cloudy-night-1.svg"
import dayCloud2 from "../assets/animated/cloudy-day-2.svg"
import nightCloud2 from "../assets/animated/cloudy-night-2.svg"
import cloud from "../assets/animated/cloudy.svg"
import rainy4 from "../assets/animated/rainy-4.svg"
import rainy3 from "../assets/animated/rainy-3.svg"
import thunder from "../assets/animated/thunder.svg"
import snow from "../assets/animated/snowy-6.svg"
import weather from "../assets/animated/weather.svg"


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

    const allIcons = {
      "01d": day,
      "02d": dayCloud1,
      "03d": dayCloud2,
      "04d": cloud,
      "09d": rainy4,
      "10d": rainy3,
      "11d": thunder,
      "13d": snow,
      "50d": weather,
      "01n": night,
      "02n": nightCloud1,
      "03n": nightCloud2,
      "04n": cloud,
      "09n": rainy4,
      "10n": rainy3,
      "11n": thunder,
      "13n": snow,
      "50n": weather
    };


  return (
    <Context.Provider value={{ toggleTheme, theme, allIcons }}>
        {children}
    </Context.Provider>
  )
}

export default ContextProvider