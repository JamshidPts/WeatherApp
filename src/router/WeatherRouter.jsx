import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from '../pages/MainPage'
import ContextProvider from '../context/Context'
import AboutPage from '../pages/AboutPage'
import SearchPage from '../pages/SearchPage'

function WeatherRouter() {
  return (
    <ContextProvider>
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='/search' element={<SearchPage />}/>
        <Route path='/about' element={<AboutPage />}/>
      </Routes>
    </ContextProvider>
  )
}

export default WeatherRouter