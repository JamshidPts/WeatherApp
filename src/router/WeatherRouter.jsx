import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from '../pages/MainPage'
import ContextProvider from '../context/Context'

function WeatherRouter() {
  return (
    <ContextProvider>
      <Routes>
        <Route path='/' element={<MainPage />}/>
      </Routes>
    </ContextProvider>
  )
}

export default WeatherRouter