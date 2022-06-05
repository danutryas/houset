import React from 'react'
import '../styles/css/contact-form.css'

function ContactForm() {
  return (
    <div className='contact'>
        <div className="accent">
            <h2>
            Join <br />With Us
            </h2>
        </div>
        <form >
            <input type="text" placeholder='First name'/>
            <input type="text" placeholder='Last name'/>
            <input type="email" placeholder='Email'/>
            <input type="tel" placeholder='Phone Number'/>
            <input type="submit" value={"Contact Us"} className="submit"/>

        </form>
    </div>
  )
}

export default ContactForm