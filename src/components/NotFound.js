import './index.css'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import React from 'react'
import data from '../data.json'



export default function NotFound(){
    // data.users[0].username['user']='username';
    console.log(data.users.push({'user':'ravi.148369'}));
    (data.users[0].username===data.users[1].user)?console.log('hello world'):console.log('bye world');
    return(
        <div >
            <Navbar/>
            <div className="NotFound">
                <h1>404</h1>
                <h2>Oh Page Not Found</h2>
                <button><Link to='/'>Return to Home</Link></button>
            </div>
        </div>
    )
}