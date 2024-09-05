import MyProvider, { MyContext } from '@/context/navContext';
import ListComp from './ui/ListComp'
import PromotionComp from './ui/Promotion'
import { useContext, useState } from 'react';
const Sidebar = ()=>{
    const [activeHref, setActiveHref] = useState(null);
    const {setNavPath} = useContext(MyContext)
    const handleClick = (href)=>{
        setActiveHref(href)
        setNavPath(href)
    }
    return (
        <div id='sidebarComp' className="p-4 flex flex-col justify-between text-center items-center">
            <div className="flex">
                <h1 className="pt-12 text-[#2a293a] text-xl font-extrabold font-mono"> System </h1>
            </div>
            <div className='mb-4'>
                <ListComp isActive={activeHref == 'projects'} onClick = { ()=>{handleClick('projects')} } href={'projects'} />
                <ListComp isActive={activeHref == 'careers'} onClick = { ()=> { handleClick('careers') } } href={'careers'} />
                <ListComp isActive={activeHref == 'tasks'} onClick = { ()=> {handleClick('tasks') } } href={'tasks'} />
                <ListComp isActive={activeHref == 'promotion'} onClick = {()=> {handleClick('promotion')}} href={'promotion'} />
            </div>
            <div className='h-[20%] w-[80%]'>
                <PromotionComp />
            </div>
        </div>
    )
}

export default Sidebar;