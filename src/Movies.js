import React from 'react'
import Navbar from './components/Navbar'
import More from './components/More'
import files from './components/trending_list'
export default function Movies(){
    return(
        <>
            <Navbar/>
            <More title={'Latest & Trending'}files={files}/>
            <More title={'Recommended For You'}files={files}/>
            <More title={'Based on Your Likes'}files={files}/>
            <More title={'Top rated Movies'}files={files}/>
            <More title={'Top picks for you'}files={files}/>
            <More title={'Multiplex Movies'}files={files}/>
        </> 
    )
}