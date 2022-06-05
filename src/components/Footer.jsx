import React from 'react'
import '../styles/css/footer.css'
import {RiInstagramLine,
RiDribbbleFill,
RiTwitterFill,
RiYoutubeFill} from 'react-icons/ri'
import { IconContext } from 'react-icons'
import { Link } from 'react-router-dom'

function Footer() {
    const features = [
        {title:"Home",links:["About us","Blog","Careers","Pricing"]},
        {title:"Legal",links:["Terms & Conditions","Privacy & Policy"]},
        {title:"Help",links:["FAQ","Contact Us"]},
    ]

  return (
    <footer>
        <div className="profile">
            <h1>Houset</h1>
            <ul className='social media'>
                <IconContext.Provider value={{color:"white"}}>
                <li>
                    <Link to="/"><RiInstagramLine/></Link>
                </li>
                <li>
                    <Link to="/"><RiDribbbleFill /></Link>
                </li>
                <li>
                    <Link to="/"><RiTwitterFill /></Link>
                </li>
                <li>
                    <Link to="/"><RiYoutubeFill /></Link>
                </li>
                </IconContext.Provider>
            </ul>
        </div>
        <div className="links">
            {features.map((feature,i) => {
                return(
                    <div className="link" key={i}>
                        <h5>{feature.title}</h5>
                        <ul>
                            {feature.links.map((link,i) => (
                                <li key={i}><Link to="/">{link}</Link></li>
                            ))}
                        </ul>
                    </div>
                )
            })}
        </div>
    </footer>
  )
}

export default Footer