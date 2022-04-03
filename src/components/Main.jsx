import React, { useContext, useEffect, useState} from 'react'
import './main.css'
import More from './More'
import Image from './Image'
import About from './About'
import Navbar from './Navbar'
import Trailer from './Trailer'
import Episode from './Episodes'    
import { Navigate, useParams } from 'react-router-dom'
import files from './trending_list'
import data from '../data.json'
import noteContext from '../Context/NoteContext'

export default function Main(){
    const params=useParams()
    const [episodes,setEpisodes]=useState(8)
    const user=useContext(noteContext)
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
        {
        (data.users[0].username===user.username&&data.users[0].password===user.password)?
        <>
            <Navbar/>
            <Image title={params.name}/>
            {
                (episodes!==0)&&<Episode title={params.name}/>
            }
            <Trailer title={params.name}/>
            <More title={'More like this'} files={files}/>
            <About/>
        </>:<Navigate to='/login'/>
        }
        </div>
    )
}