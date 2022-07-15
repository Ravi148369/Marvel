import React, { useEffect, useState} from 'react'
import './main.css'
import More from './More'
import Image from './Image'
import About from './About'
import Navbar from './Navbar'
import Trailer from './Trailer'
import Episode from './Episodes'    
import {useParams } from 'react-router-dom'
import files from './trending_list'
export default function Main(){
    const params=useParams()
    const [episodes,setEpisodes]=useState(8)
    useEffect(() => {
        files.map(value=>{
            if(params.name===value.title){
                setEpisodes(value.episode) 
            }
            return null
        }) 
    }, [Image]);
    return(
        <div className='series'>    
            <Navbar/>
            <Image title={params.name}/>
            {
                (episodes!==0)&&<Episode title={params.name}/>
            }
            <Trailer title={params.name}/>
            <More title={'More like this'} files={files}/>
            <About/>
        </div>
    )
}