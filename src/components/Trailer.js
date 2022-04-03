import React, { useState } from 'react'
import './index.css'
import files from './trending_list';
import ReactPlayer from 'react-player'
export default function Trailer(props){
    // const [image,setImage]=useState('')
    const [url,setUrl]=useState('')
    setTimeout(() => {
        files.map(value=>{
            if(props.title===value.title){
                // setImage(value.file_name)
                setUrl(value.url) 
            }
            return null
        })
    }, 10);
    return(
        <div id='trailer'>  
            <h2>Watch Trailer</h2>
            {/*<img className="trailer-img" src={`../images/${image}`} alt='not found' width={250} height={160}/>    */}
            <ReactPlayer url={url} width={300} height={200}/> 
            {/* <button><a href="https://drive.google.com/drive/folders/18JnvtymWt0xmTa1-y6vFb5sBCvqm0o9d">Watch Series</a></button> */}
        </div>
    )
}