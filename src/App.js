import './App.css';
import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import Watching from './components/Watching'
import About from './components/About'
import More from './components/More';
import { Navigate } from 'react-router-dom';
import data from './data.json'
import files from './components/trending_list';
import recent_watches from './components/RecentWatch';
import noteContext from './Context/NoteContext';



function App() { 
  const user=useContext(noteContext)
  return(
    <>
    { 
      (data.users[0].username===user.username&&data.users[0].password===user.password)?
      <>
      <Navbar/>
      <Watching/>
      <More title={'Recent Watches'} files={recent_watches}/> 
      <More title={'Trending'} files={files}/> 
      <More title={'Recommended'} files={files}/>
      <About/>
      </>:<Navigate to='/login'/>
    }
    </>
  )
}
export default App;
