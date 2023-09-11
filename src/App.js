import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from './component/Navbar'
import './App.css';
import About from './component/About';
// import Contact from './component/Contact';
// import Services from './component/Services';
import Home from './component/Home';
import Login from './component/Login';
import Signup from './component/Signup';
import Musiclist from './component/Musiclist';

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/aboutus' element={<About/>}/>
        {/* <Route path='/contact' element={<Contact/>}/> */}
        {/* <Route path='/services' element={<Services/>}/> */}
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/songlist' element={<Musiclist/>}/>
      </Routes>
    </>
  )
}

export default App