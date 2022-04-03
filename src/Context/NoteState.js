import noteContext from './NoteContext'
import React from 'react'
const NoteState=(props)=>{  
    const state={
        username:'default',
        password:'default'
    }
    return(
        <noteContext.Provider value={state}>
            {props.children}
        </noteContext.Provider>
    )
}
export default  NoteState