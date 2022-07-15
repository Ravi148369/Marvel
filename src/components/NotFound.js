import './index.css'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import React from 'react'


export default function NotFound(){
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