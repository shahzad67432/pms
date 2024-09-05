import Projects from './Projects'
import Careers from './Careers'
import Promotion from './Promotion'
import Tasks from './Tasks'
import { useContext } from 'react'
import { MyContext } from '@/context/navContext'

const CardsComp = ()=>{
    const {navPath} = useContext(MyContext)
    return (
        <div className='h-full'>
            {navPath  == "projects" ? <Projects/> :  navPath  == "careers" ? <Careers/> : navPath  == "tasks" ? <Tasks/> : navPath  == "promotion" ? <Promotion/> : <></>}
        </div>
    )
}

export default CardsComp;