import React, { useState } from 'react'
import './index.css'
import files from './trending_list';
import downlod_list from './Downlod_list';
import recent_watches from './RecentWatch';
export default function Image(props){
    const [image,setImage]=useState('')
    const [title,setTitle]=useState('')
    const [genre,setGenre]=useState('')
    setTimeout(() => {
        files.map(value=>{
            if(props.title===value.title){
                setImage(value.file_name) 
                setTitle(value.title)
                setGenre(value.genre)
            }
            return null
        }) 
        document.getElementById('imageholder').style.background =`linear-gradient(to right, #030b17,rgba(255, 255, 255, 0)), url('../images/${image}')`   
        document.getElementById('imageholder').style.backgroundSize='cover'
        document.getElementById('title').textContent=title
        document.getElementById('genre').textContent=genre
    },10);
    function onClick(){
        console.log(downlod_list);
        downlod_list.push({file_name:`${image}`,title:`${title}`})
        console.log(downlod_list);
    }
    function addList(){
        recent_watches.push({file_name:image,title:title})
    }
    return(
        <>
        <div className="image">
            <div className="side">
                <div className="content">
                    <h2 id='title'>notfound</h2>
                    <h3 id='genre'>notfound</h3>
                    <p>Dr. Stephen Strange casts a forbidden spell that opens the door to the multiverse, including an alternate version of himself, whose threat to humanity is too great for the combined forces of Strange, Wong, and Wanda Maximoff.</p>
                    <div className='watch-movie'>
                        <div className='watchmovie'>
                            <button onClick={addList}>
                                <i className='material-icons'>play_arrow</i>
                                <h2>Watch Movie</h2>
                            </button>
                        </div>
                        <div className='watch-later'>
                            <button onClick={onClick}>
                                <i className='material-icons'>library_add</i>
                                <h2>Watch later</h2>
                            </button>
                        </div>
                    </div>
                </div>
                <div id="imageholder">
                </div>
            </div>
        </div>
        {/* <div className="video-player">
            <video width="750" height="500" controls >
                <source src="../Videos/Video.mkv" type="video/mp4"/>
                Your browser doesnot support video tag
            </video>
        </div> */}
        <div className="languages">
            <b>Available in:</b>
            <a href="hindi">Hindi</a>
            <a href="/english">English</a>
            <a href="/tamil">Tamil</a>
            <a href="/telugu">Telugu</a>
        </div>
        </>
    )
}