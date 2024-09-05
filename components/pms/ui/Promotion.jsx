"use client"
import { MyContext } from "@/context/navContext"
import Image from "next/image"
import Link from "next/link"
import { useContext } from "react"

const PromotionComp = ()=>{
    const {setNavPath} = useContext(MyContext)
    return (
        <div className="bg-[#2a293a] text-white rounded-lg h-[100%] text-sm font-thin pt-6 flex flex-col items-center">
            <h1 className="w-[65%]">
                Check out your <span className="text-white font-normal underline">Promotion</span>
            </h1>
                <Image
                    onClick={()=>{ setNavPath('promotion') }}
                    className="pt-2 cursor-pointer"
                    width={32}
                    height={32}
                    alt="promo"
                    src={'./promo.svg'}
                />
        </div>
    )
}

export default PromotionComp