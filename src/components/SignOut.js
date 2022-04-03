import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import noteContext from '../Context/NoteContext'

export default function SignOut(){
    const user=useContext(noteContext)
    user.username=''
    user.password=''
    return(
        <Navigate to={'/'}/>
    )
}