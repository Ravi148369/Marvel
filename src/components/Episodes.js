import React,{useState} from 'react'
import files from './trending_list'



export default function Episode(props){
    const [image,setImage]=useState('')
    const [episode,setEpisode]=useState(0)

    setTimeout(() => {
        files.map(value=>{
            if(props.title===value.title){
                setImage(value.file_name) 
                setEpisode(value.episode)
            }
            return null
        })
        const episodes=document.getElementById('episode')
        if(episodes!=null){
            episodes.innerHTML=''
            for(let i=1;i<=episode;i++){
                const item=document.createElement('div')
                item.innerHTML=`<img src=../images/${image} alt='not found' width=240px height=130px>
                <div>
                <i class='material-icons'>play_arrow</i> <p>S${1}-E${i}</p>
                </div>`
                episodes.append(item)   
            }
        }   
    },5);
    return(
        <>
        {
            (episode!==0)?
            <div className='episodes'>
                <h2>Episodes</h2>
                <div id='episode'>
                </div>
            </div>:<></>
        }
        </>
    )
}   