import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Weather from '../components/weather/Weather'

function MainPage() {
  return (
    <>
    <header>
        <Navbar />
    </header>
    <main className='container'>
      <section className=''>
        <Weather />
      </section>
    </main>
    </>
  )
}

export default MainPage