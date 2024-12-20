import React, { useState } from 'react';
import logo from '../../assets/animated/weather.svg';
import lightMode from "../../assets/lightMode.png";
import darkMode from "../../assets/darkMode.png";
import burgerBlack from '../../assets/burgerBlack.png';
import burgerWhite from '../../assets/burgerWhite.png';
import { context } from '../../context/Context';

function Navbar() {
  const { theme, toggleTheme } = context();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="container">
      <div className="dark:bg-[#2a2a2a] dark:text-[#E0E0E0] shadow-md desktop:rounded-b-md laptop:rounded-b-md px-[20px] py-[10px] justify-between items-center desktop:flex laptop:flex tablet:flex phone:flex">
        <div className="w-[70px] tablet:w-[60px] phone:w-[55px]">
          <img src={logo} alt="weather"/>
        </div>
        <div className="text-[20px] font-sans flex gap-[50px] tablet:hidden phone:hidden">
          <button><a href="/">Home</a></button>
          <button><a href="/search">Search City</a></button>
          <button><a href="/about">About us</a></button>
        </div>
        <div className="flex justify-center items-center gap-[30px]">
          <button onClick={toggleTheme}>
            <img src={theme === 'light' ? darkMode : lightMode} alt="Theme Toggle" className="w-[50px] tablet:w-[35px] phone:w-[30px]" />
          </button>
          <button
            className="desktop:hidden laptop:hidden tablet:block phone:block tablet:w-[35px] phone:w-[30px]"
            onClick={toggleMenu}
          >
            <img src={theme === 'light' ? burgerBlack : burgerWhite} alt="Burger Menu" />
          </button>
        </div>
      </div>
      <div className={`transition-all duration-500 ease-in-out ${menuOpen ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'} desktop:hidden laptop:hidden tablet:block phone:block bg-[#2a2a2a] text-[#E0E0E0]`}>
        <button className="w-full text-center p-2"><a href="/">Home</a></button>
        <button className="w-full text-center p-2"><a href="/search">Search City</a></button>
        <button className="w-full text-center p-2"><a href="/about">About us</a></button>
      </div>
    </nav>
  );
}

export default Navbar;
