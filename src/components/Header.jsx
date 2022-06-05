import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/css/header.css'

function Header() {
  return (
    <header>
        <Link to="/" className='cta-home'>Houset</Link>
        <Link to="/catalog" className='cta-catalog'>Show Catalog</Link>
    </header>
  )
}

export default Header