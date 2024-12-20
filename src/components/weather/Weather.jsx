import React from 'react'
import humidity from "../../assets/humidity.png"
import humidityWhite from "../../assets/humidityWhite.png"
import wind from "../../assets/wind.png"
import windWhite from "../../assets/windWhite.png"
import day from "../../assets/animated/day.svg"
import night from "../../assets/animated/night.svg"
import { context } from '../../context/Context'

function Weather() {
    const { theme } = context();

  return (
    <div className='flex items-center justify-center flex-col h-[90.7vh]'>
        <div className='w-[400px] dark:bg-[#2a2a2a] min-h-[450px] shadow-md rounded-lg text-center p-[20px]'>
            <h1 className='text-[25px] font-bold text-[#2a2a2a] tracking-wide dark:text-[#E0E0E0]'>Your Location</h1>
            <div className='flex justify-center'>
                <img className='w-[150px]' src={day} alt="Day" />
            </div>
            <h2 className='text-[45px] font-bold text-[#2a2a2a] dark:text-[#E0E0E0]'>16°C</h2>
            <h2 className='text-[23px] pb-[60px] text-[#2a2a2a] dark:text-[#E0E0E0]'>Tashkent</h2>
            <div className='flex items-center justify-around'>
                <div className='flex items-center gap-[20px]'>
                    <img className='w-[50px]' src={theme === "dark" ? humidityWhite : humidity} alt="Humidity" />
                    <div>
                        <p className='text-[#2a2a2a] dark:text-[#E0E0E0]'>91 %</p>
                        <span className='text-[#2a2a2a] dark:text-[#E0E0E0]'>Humidity</span>
                    </div>
                </div>
                <div className='flex items-center gap-[20px]'>
                    <img className='w-[50px]' src={theme === "dark" ? windWhite : wind} alt="Wind Speed" />
                    <div>
                        <p className='text-[#2a2a2a] dark:text-[#E0E0E0]'>3.6 Km/h</p>
                        <span className='text-[#2a2a2a] dark:text-[#E0E0E0]'>Wind Speed</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Weather
