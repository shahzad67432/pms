"use client"
import { cn } from "@/lib/utils";
import { useContext, useState } from "react";
import MyContext from "../../../context/navContext.jsx";

const ListComp = ({href, isActive, onClick})=>{
    return (
        <h1 onClick={ onClick }  className={cn(`text-gray-300 py-4 px-0 pr-16 text-lg text-start items-start cursor-pointer`, isActive ? " text-[#196aff] text-2xl" : "")} >
            {href}
        </h1>
    )
}

export default ListComp;