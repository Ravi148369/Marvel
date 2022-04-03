import React from 'react'
import Navbar from './components/Navbar'
import More from './components/More'
import files from './components/trending_list'
export default function Popular(){
    return(
        <>
            <Navbar/>
            <More title={'Latest & Trending'}files={files}/>
            <More title={'New Release'}files={files}/>
            <More title={'Based on Your Likes'}files={files}/>
            <More title={'Top rated Series'}files={files}/>
            <More title={'Top picks for you'}files={files}/>
            <More title={'Popular Shows'}files={files}/>
        </>
    )
}