import React from 'react'
import { Link } from 'react-router-dom'

export default function More(props){
    let id=0
    const list=[]
    return(
        <>
        {
            (props.files.length!==0)?
            <div className='more-like'>
                <h2>{props.title}</h2>
                <div className='more'>
                    {
                            props.files.reverse().map((value)=>{
                            if(!(list.includes(value.file_name))){
                                list[id]=value.file_name
                                return(
                                    <div key={id++}>
                                        <Link to={`/series/${value.title}`}><img src={`../images/${value.file_name}`} alt="not found" width={260} height={140} /></Link>
                                        <h4>{`${value.title}`}</h4>
                                    </div>
                                )               
                            }
                            return null
                        })
                    }
                </div>
            </div>:<></>
        }
        </>
    )
}