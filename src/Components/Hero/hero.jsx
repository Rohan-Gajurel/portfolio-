import React from 'react'
import './hero.css'
import profile_img from "../../assets/profile_img.svg"

const Hero = () => {
  return (
    <div className='hero'>
        {/* <img src={profile_img} alt="" /> */}
        <h1><span>I'm Rohan Gajurel,</span> frontend developer based in Nepal</h1>
        <p>I am a frontend developer from Kathmandu, Nepal.</p>
        <div className="hero-action">
            <div className="hero-connect">Connect with me </div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero