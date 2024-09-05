import Sidebar from './Sidebar'
import CardsComp from './cards/Cards'
const DashboardComp = ()=>{

    return (
        <>
            <div className='h-[calc(100vh-32px)]  flex w-full'>
                <div id='sidebar' className='h-full'>
                    <Sidebar/>
                </div>
                <div id='cardsCol' className=' rounded-2xl mt-6 mb-4 h-[calc(100%-40px)] '>
                    <CardsComp/>
                </div>
                <div id='Stats' className=' h-full p-6 text-[#2a293a] text-lg font-semibold'>
                    <p> Collaboration </p>
                </div>
            </div>
        </>
    )
}

export default DashboardComp;