import React from 'react'

function Navbar() {
  return (
    <div className='container'>
      <div className='text-white font-sans font-bold p-[15px] w-full phone:bg-[orange] phone:flex phone:justify-between tablet:bg-[red] laptop:bg-[blue] desktop:bg-[black]'>
        <a href="">Home</a>
        <a href="">Search city</a>
        <a href="">About us</a>
      </div>
    </div>
  )
}

export default Navbar