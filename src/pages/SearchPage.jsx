import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Search from '../components/search/Search'

function SearchPage() {
  return (
    <>
    <header>
        <Navbar />
    </header>
    <main className='container'>
        <section>
            <Search />
        </section>
    </main>
    </>
  )
}

export default SearchPage