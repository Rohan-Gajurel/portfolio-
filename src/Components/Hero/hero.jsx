import React from 'react'
import './hero.css'
import profile_img from "../../assets/profile_img.jpg"
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id="home" className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Rohan Gajurel,</span> frontend developer based in Nepal</h1>
        <p>I am a frontend developer from Kathmandu, Nepal with 10 years experience in multiple companies like F1soft and esewa.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href='#contact'>Connect with me</AnchorLink> </div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero