import React from 'react'
import './Contact.css'
import theme_pattern from "../../assets/theme_pattern.svg"
import mail_icon from '../../assets/mail_icon.svg'
import location_ico from '../../assets/location_icon.svg'
import call_icon from'../../assets/call_icon.svg'


const Contact = () => {
  return (
    <div className='contat'>
        <div className="contact-title">
            <h1>Get in Touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section"><div className="contact-left">
            <h1>Let's talk</h1>
            <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt="" />
                    <p>rohangajurel17@gmail.com</p>
                </div>
            <div className="contsct-detail"><img src={call_icon} alt="" />
            <p>9749355705</p>
            </div>
            <div className="contsct-detail">
                <img src={location_ico} alt="" />
                <p>Kathmandu Nepal</p>
            </div>
            </div>
            </div>
            <form action="" className="contact-right"><label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name'/>
            <label htmlFor="">Your Email</label>
            <input type="text" placeholder='Enter your email' name='email'/>
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows={8} placeholder='Enter your message'></textarea>
            <button type="button"className='contact-submit'>Submit now</button>
            </form>
            </div>
    </div>
  )
}

export default Contact