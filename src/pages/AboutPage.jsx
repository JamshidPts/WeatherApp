import React from 'react'
import Navbar from '../components/navbar/Navbar'
import About from '../components/about/About'

function AboutPage() {
  return (
    <>
    <header>
        <Navbar />
    </header> 
    <main className='container'>
        <section>
            <About />
        </section>
    </main> 
    </>
  )
}

export default AboutPage