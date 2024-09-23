/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import './Hero.css'
import React from 'react'
import profile_img from '../../assets/Profile.jpg'
import Resume from '../../assets/Junior Frontend Developer.pdf'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I am Yoon Nandar Maung,</span> frontend developer based in Myanmar.</h1>
        <p>I am a junior Frontend developer from Yangon, Myanmar with proficient knowledge in HTML and CSS as well as third-party libraries such as jQuery, Redux, and React. </p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink href="#contact" offset={50} className='a-link'> Connect With Me</AnchorLink></div>
                <div className="hero-resume">
                    <a href={Resume} download>My Resume</a>
                </div>
        </div>
    </div>
  )
}

export default Hero