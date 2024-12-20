import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from '../pages/MainPage'
import ContextProvider from '../context/Context'
import Search from '../components/search/Search'

function WeatherRouter() {
  return (
    <ContextProvider>
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='/search' element={<Search />}/>
      </Routes>
    </ContextProvider>
  )
}

export default WeatherRouter