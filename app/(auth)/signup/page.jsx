"use client"
import { createUser } from '@/app/actions'
import { redirect } from 'next/navigation'
import React, { useState } from 'react'

const page = () => {
    const [name,  setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const createUserFunc = async()=>{
        try{
            const response = await createUser({name, email, password})
            if(response.success){
                redirect('/dashboard')
            }
        }catch(err){
            console.error("error while creating the user", err)
        }
    }
  return (
    <div className='w-full h-full flex justify-center items-center'>
        <div className='w-[30%] h-[60%] bg-[#2a293a] rounded-lg'>
            <div className='h-[80%] p-12 flex flex-col text-white'>
                <label htmlFor="text" className=''>Name</label>
                <input type="text" placeholder='Enter your name' className='p-3 rounded-lg text-[#2a293a]' onChange={(e)=>{setName(e.target.value)}}/>
                <label htmlFor="email">Email</label>
                <input type="text" placeholder='Enter your email' className='p-3 rounded-lg text-[#2a293a]' onChange={(e)=>{setEmail(e.target.value)}}/>
                <label htmlFor="password">Password</label>
                <input type="text" placeholder='Enter your password' className='p-3 rounded-lg text-[#2a293a]' onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
            <div className='flex w-[100%] items-center justify-center'>
                <button className='bg-white mt-4 p-2 px-4 rounded-lg shadow-md text-[#2a293a] font-semibold' 
                    onClick={()=>{
                        createUserFunc()
                    }}
                >
                    Sign Up
                </button>
            </div>
        </div>
    </div>
  )
}

export default page