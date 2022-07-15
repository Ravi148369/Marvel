import './App.css';
import React from 'react'
import Navbar from './components/Navbar'
import Watching from './components/Watching'
import About from './components/About'
import More from './components/More';
import files from './components/trending_list';
import recent_watches from './components/RecentWatch';

function App() { 
  return(
    <>
      <Navbar/>
      <Watching/>
      <More title={'Recent Watches'} files={recent_watches}/> 
      <More title={'Trending'} files={files}/> 
      <More title={'Recommended'} files={files}/>
      <About/>
    </>
  )
}
export default App;
