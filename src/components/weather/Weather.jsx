// Weather.jsx
import React, { useState, useEffect } from 'react';
import humidity from "../../assets/humidity.png";
import humidityWhite from "../../assets/humidityWhite.png";
import windBlack from "../../assets/wind.png";
import windWhite from "../../assets/windWhite.png";
import loadingWhite from "../../assets/loadingWhite.gif";
import loadingBlack from "../../assets/loadingBlack.gif";
import { context } from '../../context/Context';
import axios from 'axios';

function Weather() {
    const { theme, allIcons } = context();
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    fetchWeatherByLocation(latitude, longitude);
                },
                (error) => {
                    console.error("Error getting location: ", error);
                    setLoading(false);
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
            setLoading(false);
        }
    }, []);

    const fetchWeatherByLocation = async (latitude, longitude) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=605a09ba7f4e7696d2ef9d48adcf127d`;
        try {
            const response = await axios.get(url);
            setWeatherData(response.data);
        } catch (error) {
            console.error("Error fetching weather data", error);
        } finally {
            setLoading(false);
        }
    };

    const { main, weather, wind, name } = weatherData || {};
    const weatherIcon = allIcons?.[weather?.[0]?.icon] || allIcons?.["01d"];

    return (
        <div className='desktop:h-[90vh] laptop:mt-0 laptop:h-[100vh] tablet:h-[90vh] landscape-tablet:h-[120vh] phone:h-[90vh] landscape-phone:h-[130vh] grid place-items-center'>
            <div className='w-[400px] tablet:w-[350px] landscape-phone:mt-[80px] phone:w-[300px] min-h-[60vh] dark:bg-[#2a2a2a] bg-[#F2F3F4] shadow-md rounded-lg text-center p-[20px] m-auto'>
                {loading ? (
                    <div className='grid place-items-center min-h-[50vh]'>
                        <img className='w-[200px]' src={theme === "dark" ? loadingBlack : loadingWhite} alt="loading" />
                    </div>
                ) : !weatherData ? (
                    <div className='grid place-items-center min-h-[50vh]'>
                        <p className='text-[#2a2a2a] dark:text-[#E0E0E0]'>Unable to fetch weather data.</p>
                    </div>
                ) : (
                    <>
                        <h1 className='text-[35px] font-bold text-[#2a2a2a] tracking-wide dark:text-[#E0E0E0] pt-[20px]'>{name}</h1>
                        <div className='flex justify-center'>
                            <img className='w-[150px]' src={weatherIcon} alt="Weather Icon" />
                        </div>
                        <h2 className='text-[45px] font-bold text-[#2a2a2a] dark:text-[#E0E0E0]'>{main.temp}°C</h2>
                        <h2 className='text-[23px] pb-[60px] text-[#2a2a2a] dark:text-[#E0E0E0]'>{weather[0].description}</h2>
                        <div className='flex items-center justify-around'>
                            <div className='flex flex-col items-center gap-[20px]'>
                                <img className='w-[50px]' src={theme === "dark" ? humidityWhite : humidity} alt="Humidity" />
                                <div>
                                    <p className='text-[#2a2a2a] dark:text-[#E0E0E0]'>{main.humidity} %</p>
                                    <span className='text-[#2a2a2a] dark:text-[#E0E0E0]'>Humidity</span>
                                </div>
                            </div>
                            <div className='flex flex-col items-center gap-[20px]'>
                                <img className='w-[50px]' src={theme === "dark" ? windWhite : windBlack} alt="Wind Speed" />
                                <div>
                                    <p className='text-[#2a2a2a] dark:text-[#E0E0E0]'>{wind.speed} Km/h</p>
                                    <span className='text-[#2a2a2a] dark:text-[#E0E0E0]'>Wind Speed</span>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Weather;
