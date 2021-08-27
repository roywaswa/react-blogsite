import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
      <header className='navbar-header'>
        <span>theBlog</span>
      </header>
      <nav className='navbar-links'>
        <Link to='/'><span className='nav-link'>home</span></Link>
        <Link to='/create-post'><span className='nav-link'>post</span></Link>
        <Link to='/about'><span className='nav-link'>about</span></Link>
      </nav>
    </div>
  )
}
