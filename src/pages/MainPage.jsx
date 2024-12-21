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
      <section>
        <Weather />
      </section>
    </main>
    </>
  )
}

export default MainPage