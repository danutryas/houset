import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/css/hero.css'

function Hero() {
  return (
    <div className='banner'>
        <div className="desc">
            <h1>Stop wasting time <span className='bold'><br />in meetings</span></h1>
            <p>Boost efficiency, save time & money <br /> with post meeting surveys.</p>
            <Link to={"/catalog"}>
            Show Catalog
            </Link>
        </div>
        <img src={process.env.PUBLIC_URL + "/CARTOON.png"} alt="meeting" />
    </div>
  )
}

export default Hero