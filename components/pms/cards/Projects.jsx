import Header from './Header'
import CommonCard from './CommonCard'
import {projects} from '../../../lib/data'
import { getProjects } from '@/app/actions';
import { useEffect, useState } from 'react';
const Projects = ()=>{
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchProjects = async () => {
        try {
          const data = await getProjects();
          if (data) {
            setProjects(data);
          }
        } catch (err) {
          setError("Failed to load projects.");
        } finally {
          setLoading(false);
        }
      };
  
      fetchProjects();
    }, []);
    return (
        <div className="px-6 pt-10 flex flex-col h-full">
            <Header text={" Projects Allocated "}/>
            <div className='px-12 pt-6 text-gray-400 text-lg'>
                Projects
            </div>
            <div className='flex flex-col justify-center items-center ml-4 pt-44 scroll-smooth overflow-auto' style={{overflow: 'auto',}}>
                {
                    loading? <p>Loading...</p> :
                    projects.map((p)=>{
                        return (
                            <CommonCard key={p.id} title={p.title} description={p.description} image={p.image} percentage={p.percentage} DaysToComplete={p.DaysToComplete} employees={p.employees} color={p.color}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Projects;