import React from 'react'
import downlod_list from './Downlod_list'
import { Link } from 'react-router-dom'
import '../index.css'
export default function Downlods(){
    let id=0
    let list=[];
    return(
        <div className='downlods'>
            <div className="downlod-icons">
                <h1>Downlods</h1>
                <i className='material-icons'>library_add</i> 	
            </div>  
        {
            downlod_list.reverse().map((value)=>{
                if(!(list.includes(value.file_name))){
                list[id]=value.file_name
                return(
                       <div key={`id${id++}`} className='downlod'>
                        <Link to={`/series/${value.title}`}><img src={`../images/${value.file_name}`} alt="not found" width={260} height={140} /></Link>
                        <div>
                            <h3>{`${value.title}`}</h3>
                            <div className="downlod-icons">
                                <h4>S01 - E01</h4> 
                                <i className='material-icons'>file_download</i>
                            </div>
                            <p>Dr. Stephen Strange casts a forbidden spell that opens the door to the multiverse, including an alternate version of himself, whose threat to humanity is too great for the combined forces of Strange, Wong, and Wanda Maximoff.</p>
                        </div>
                    </div>
                )
            }
            return null
        })
            
        }
        </div>
    )
}