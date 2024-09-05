"use client"
import React, { useState } from 'react'
const Header = ({text}) => {
    const date = new Date();
  return (
    <div className='flex px-12 justify-between'>
        <h1 className='text-2xl text-[#2a293a]'>
            {text}
            <p className='text-blue-700 text-lg'>{"4th Sep, 2024" || date.toString}</p>
        </h1>
        <button className=' text-white font-thin bg-blue-500 px-4 py-2 rounded-xl shadow-xl'>
            <p className='text-3xl'>+</p>
        </button>
    </div>
  )
}

export default Header