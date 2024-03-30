import React from 'react'
import logo from '../assets/logo.png'
import {FaSearch} from 'react-icons/fa'
import '../Components/Header.css'

export default function Header() {
  return (
    <div className='header'>
      <div className="navigator">
        <div className="left-navigator">
            <img src={logo} alt="logo" className='logo'/>
           <form className='header-form'>
            <input type="text" placeholder='Search . . .' />
            <FaSearch className='fa'/>
           </form>
        </div>
        <div className="right-navigator">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Blog</li>
                <li>Signin</li>
                
            </ul>
        </div>
      </div>
    </div>
  )
}
