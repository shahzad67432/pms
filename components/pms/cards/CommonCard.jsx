import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

const CommonCard = ({title, description, image, percentage, DaysToComplete, employees, color}) => {
  return(
    <div className={cn(`mt-4 w-[85%] min-h-32 rounded-xl shadow-lg text-white text-lg flex flex-col justify-between px-4` )} style={{backgroundColor: color}}>
        <div className='flex justify-between'>
            <div className='flex justify-between'>
                <Image
                    className='m-2 mt-5'
                    width={70}
                    height={70}
                    alt='card Icon'
                    src={image}
                />
                <div className='flex flex-col mt-6 w-[100%] text-start opacity-80 pr-12'>
                    <h1 className='text-sm'>{title}</h1>
                    <p className='text-xs font-thin'>{description}</p>
                </div>
            </div>
            <div className='bg-white text-[#2a293a] w-8 h-8 flex justify-center font-thin my-4 mt-6 rounded-lg items-center '>
                {DaysToComplete}
            </div>
        </div>
        <div className='flex justify-center w-[73%]'>    
            <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-300 mb-2 ml-4">
                <div className=" bg-white h-2 rounded-full" style={{width: `${percentage}%`}}></div>
            </div>
            {/* <div>{employees}</div> */}
        </div>
    </div>
  )
}

export default CommonCard