import React from 'react'
import ContactForm from '../components/ContactForm'
import Feature from '../components/Feature'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

function Homepage() {

  return (
    <div>
        <main>
            <Hero />
            <div className="about-us">
                <h2 className='heading'>About Us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus felis eros, scelerisque quis ipsum quis, sollicitudin blandit sapien. Pellentesque ac posuere orci. Duis quam ligula, tristique gravida lorem at, porta lobortis erat. Suspendisse et nisi sagittis, tristique mi ac, tristique leo. Quisque ut sem vitae massa porttitor ultrices. Sed eget augue rhoncus, vehicula mi vel, maximus arcu. Praesent suscipit tempor ipsum, a finibus ex rhoncus nec. Duis tincidunt a leo sed imperdiet.</p>
            </div>
            <Feature />
            <ContactForm />
        </main>
        <Footer />
    </div>
  )
}

export default Homepage