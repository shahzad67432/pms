"use client"
import MyProvider from '../context/navContext'
const Provider = ({children})=>{
    return (
        <MyProvider>
            {children}
        </MyProvider>
    )
}

export default Provider