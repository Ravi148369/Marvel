import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import '../index.css'
export default function Setting(){
    return(
        <div className="setting">
            <div className="card">
                <button><i className='material-icons'>file_download</i> <Link to={'/account/downlods'}>Watch later</Link></button>
                <button><i className='material-icons'>person</i><Link to={'/account/downlods'}>Account</Link></button>
                <button><i className='material-icons'>settings</i><Link to={'/account/downlods'}>Setting</Link></button>
                <button><i className='material-icons'>library_books</i><Link to={'/account/downlods'}>terms & condition</Link></button>
                <button> <i className='material-icons'>group</i><Link to={'/account/downlods'}>Contact Us</Link></button>
                <button> <i className='material-icons'>help</i><Link to={'/account/downlods'}>Help</Link></button>
                <button> <i className='material-icons'>exit_to_app</i><Link to={'/account/signout'}>Sign Out</Link></button>
                <p>App Version:1.0.0.1</p> 
            </div>
            <div className="outlet">
                <Outlet/>
            </div>
        </div>
    )
}