import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import SignUp from './Pages/SignUp'
import Profile from './Pages/Profile'
import SignIn from './Pages/SignIn'

export default function App() {
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/signin' element={<SignIn/>}/>
    <Route path='/profile' element={<Profile/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
  )
}
