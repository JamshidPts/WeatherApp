import React, { useState } from 'react';
import humidity from "../../assets/humidity.png";
import humidityWhite from "../../assets/humidityWhite.png";
import wind from "../../assets/wind.png";
import preWeather from "../../assets/animated/weather.svg";
import windWhite from "../../assets/windWhite.png";
import searchBlack from "../../assets/searchBlack.png";
import searchWhite from "../../assets/searchWhite.png";
import loadingWhite from "../../assets/loadingWhite.gif"
import loadingBlack from "../../assets/loadingBlack.gif"
import { context } from '../../context/Context';
import { search } from '../../api/weather';

function Search() {
    const { theme, allIcons } = context();
    const [weatherData, setWeatherData] = useState(null); // Начальное состояние null
    const [city, setCity] = useState('');
    const [loading, setLoading] = useState(false); // Состояние для отслеживания загрузки

    const handleSearch = async () => {
        if (!city.trim()) {
            console.error("Please enter a valid city");
            return;
        }

        setLoading(true); // Устанавливаем состояние загрузки в true

        const data = await search(city); // Передаём город

        if (data) {
            const icon = allIcons[data.weather[0].icon] || preWeather;
            setWeatherData({
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                temp: Math.floor(data.main.temp),
                location: data.name,
                icon: icon,
            }); // Сохраняем данные, если запрос успешен
        } else {
            setWeatherData(null); // Если данных нет, устанавливаем null
        }

        setLoading(false); // Устанавливаем состояние загрузки в false
    };

    return (
            <div className='desktop:h-[90vh] laptop:mt-0 laptop:h-[90vh] tablet:h-[90vh] landscape-tablet:h-[120vh] phone:h-[90vh] landscape-phone:h-[130vh] grid place-items-center'>
                <div className='w-[400px] landscape-phone:mt-20 tablet:w-[350px] phone:w-[300px] min-h-[60vh] dark:bg-[#2a2a2a] bg-[#F2F3F4] shadow-md rounded-lg text-center p-[20px] m-auto'>
                    <div className='flex items-center justify-center gap-[10px] p-[5px] m-[10px] '>
                        <input
                            className='p-[10px] rounded-md outline-[#2a2a2a] phone:w-[200px] border border-[#2a2a2a] placeholder:text-[#2a2a2a]'
                            type="text"
                            placeholder='Enter your city'
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                        <button type='submit' onClick={handleSearch}>
                            <img className='w-[30px] cursor-pointer' src={theme === "dark" ? searchWhite : searchBlack} alt="Search" />
                        </button>
                    </div>

                    {loading ? (
                        <div className='grid place-items-center min-h-[50vh]'><img className='w-[200px]' src={theme === "dark" ? loadingBlack : loadingWhite} alt="loading" /></div>
                    ) : weatherData ? (
                        <>
                            <div className='flex justify-center'>
                                <img className='w-[150px]' src={weatherData.icon} alt="Weather" />
                            </div>
                            <h2 className='text-[45px] font-bold text-[#2a2a2a] dark:text-[#E0E0E0]'>
                                {weatherData.temp}°C
                            </h2>
                            <h2 className='text-[23px] pb-[60px] text-[#2a2a2a] dark:text-[#E0E0E0]'>
                                {weatherData.location ? weatherData.location : "City"}
                            </h2>
                            <div className='flex items-center justify-around'>
                                <div className='flex flex-col items-center gap-[20px]'>
                                    <img className='w-[50px]' src={theme === "dark" ? humidityWhite : humidity} alt="Humidity" />
                                    <div>
                                        <p className='text-[#2a2a2a] text-[22px] dark:text-[#E0E0E0]'>{weatherData.humidity} %</p>
                                        <span className='text-[#2a2a2a] dark:text-[#E0E0E0]'>Humidity</span>
                                    </div>
                                </div>
                                <div className='flex flex-col items-center gap-[20px]'>
                                    <img className='w-[50px]' src={theme === "dark" ? windWhite : wind} alt="Wind Speed" />
                                    <div>
                                        <p className='text-[#2a2a2a] text-[20px] dark:text-[#E0E0E0]'>{weatherData.windSpeed} Km/h</p>
                                        <span className='text-[#2a2a2a] dark:text-[#E0E0E0]'>Wind Speed</span>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className={`grid place-items-center min-h-[50vh] text-[20px] ${theme === "dark" ? "text-[#E0E0E0]" : "text-[#2a2a2a]"}`}>Search your city</div> // Сообщение, если данных нет
                    )}
                </div>
            </div>
    );
}

export default Search;
