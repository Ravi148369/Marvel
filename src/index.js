import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main.jsx'
import Series from './Series'
import Movies from './Movies'
import Popular from './Popular'
import NotFound from './components/NotFound';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import App from './App.js';
import Acccount from './components/Account.js';
import Downlods from './components/Downlods'
ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='series' element={<Series/>}/>  
      <Route path='popular' element={<Popular/>}/>
      <Route path='movies' element={<Movies/>}/>
      <Route path='/series/:name' element={<Main/>}/>
      <Route path='/account' element={<Acccount/>}>
        <Route path='downlods' element={<Downlods/>}/>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>,
  document.getElementById('root') 
  );

  
  