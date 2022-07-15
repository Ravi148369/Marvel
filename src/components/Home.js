import React from 'react'
export default function Home(props){
    return(
        <div className='home-watching'>
            <img src={`../images/${props.title}.jpg`} alt="Not found" width={600}/>            
        </div>
    )
}