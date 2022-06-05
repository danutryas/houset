import React from 'react'
import {ReactComponent as automationIcon} from '../assets/icon-automation.svg'
import {ReactComponent as emailIcon} from '../assets/icon-email.svg'
import {ReactComponent as scheduleIcon} from '../assets/icon-schedule.svg'
import '../styles/css/features.css'

function Feature() {
    const features = [
        {title:"Click Google integration",desc:"Aliquam ut porttitor leo a diam. Eget duis at tellus at urna condimentum mattis.",img: scheduleIcon},
        {title:"Customization",desc:"Consequat mauris nunc congue nisi. Aliquam etiam erat velit scelerisque in dictum non. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae.",img:automationIcon},
        {title:"Automation",desc:"Interdum velit laoreet id donec ultrices tincidunt arcu non. Turpis egestas pretium aenean pharetra magna ac.",img:emailIcon}
    ]
  return (
    <div className="how-it-work">
        <h2 className="heading">How it Works?</h2>
        <div className="things">
        {features.map((feature,i) => {
            const Icon = feature.img
            return(
                <div className="feature" key={i}>
                    <Icon className='icon'/>
                    <h4>{feature.title}</h4>
                    <p>{feature.desc}</p>
                </div>
            )
        })}
        </div>
    </div>
  )
}

export default Feature