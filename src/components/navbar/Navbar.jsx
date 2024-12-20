import React, { useState } from 'react';
import logo from '../../assets/navbar_logo.png';
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
    <nav className='container'>
      <div className='dark:bg-[#2a2a2a] dark:text-[#E0E0E0] shadow-md rounded-b-md px-[20px] py-[10px] justify-between items-center desktop:flex laptop:flex tablet:flex phone:flex'>
        {/* Логотип */}
        <div className='w-[70px] tablet:w-[60px] phone:w-[55px]'>
          <img src={logo} alt="weather" />
        </div>

        {/* Основные кнопки (скрываются на маленьких экранах) */}
        <div className='text-[20px] font-medium flex gap-[50px] tablet:hidden phone:hidden'>
          <button><a href="#">Home</a></button>
          <button><a href="#">Search City</a></button>
          <button><a href="#">About us</a></button>
        </div>

        {/* Темная тема и бургер-меню */}
        <div className='flex justify-center items-center gap-[30px]'>
          <button onClick={toggleTheme}>
            <img src={theme === 'light' ? darkMode : lightMode} alt="Theme Toggle" className="w-[50px] tablet:w-[40px] phone:w-[35px]" />
          </button>
          <button className="desktop:hidden laptop:hidden tablet:block phone:block tablet:w-[35px] phone:w-[30px]" onClick={toggleMenu}>
            <img src={theme === 'light' ? burgerBlack : burgerWhite} alt="Burger Menu" />
          </button>
        </div>
      </div>

      {/* Анимированное бургер-меню */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out desktop:hidden laptop:hidden tablet:block phone:block bg-[#1A1A1A] text-[#E0E0E0] ${
          menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <button className="w-full text-left p-2"><a href="#">Home</a></button>
        <button className="w-full text-left p-2"><a href="#">Search City</a></button>
        <button className="w-full text-left p-2"><a href="#">About us</a></button>
      </div>
    </nav>
  );
}

export default Navbar;
