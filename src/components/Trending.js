import React from 'react'
import files from './trending_list'
export default function Trending(props){

    setTimeout(() => {
        const collection=document.getElementById(`collection${props.id}`)
        const list=()=>{ 
            for(const file in files.trending_list){
                const item=document.createElement('div');
                item.innerHTML=`<img src=./images/${files.trending_list[file]}>
                                <p>${file}</p>`
                collection.append(item) 
            }
        }
        list();
    },100);
    return(
        <div className="trending">
            <h2>{props.title}</h2>
            <div id={`collection${props.id}`}>
            </div>
        </div>
    )    
}