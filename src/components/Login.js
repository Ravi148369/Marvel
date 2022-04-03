import React,{useState,useContext} from 'react'
import './login.css'
import { useNavigate } from "react-router-dom";
import data from '../data.json'
import noteContext from '../Context/NoteContext';


export default function Login(){
    const [Uname,setUname]=useState('')
    const [password,setPassword]=useState('')
    const user=useContext(noteContext)
    let navigate=useNavigate()
    const Submit=()=>{          
        user.username=Uname
        user.password=password
        if(data.users[0].username===user.username){
            if(data.users[0].password===user.password){
                navigate('/')
            }
            else
            alert('passoword is incorrect')
        }
        else
            alert("user doesn't exist")
        }
        
        return(
            <div className="log-in">
                <div className="center">
                    <h1>Login Page</h1>
                    <label htmlFor="username">Username</label>      
                    <br/>
                    <input type="text" placeholder='Username' id='username' onChange={e=>setUname(e.target.value)}/>
                    <br/>
                    <br/>
                    <label htmlFor="password">Password</label>
                    <br/>
                    <input type="password" placeholder='Password' id='password' onChange={e=>setPassword(e.target.value)}/>
                    <br/>
                    <button onClick={Submit}>Login</button>
                </div>
            </div>
        )
}