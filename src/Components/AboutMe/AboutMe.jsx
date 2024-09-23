/* eslint-disable no-unused-vars */
import './AboutMe.css'
import themepattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/AboutPhoto.jpg'

import React from 'react'

const AboutMe = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={themepattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>An enthusiastic and detail-oriented Junior Frontend Developer with proficient knowledge in HTML and CSS,
                         as well as third-party libraries such as jQuery and React. 
                    </p>
                    <p>Seeking to utilize my technical skills and expertise to provide value to the employer and contribute to successful projects both today and in the future.
                         Aiming to take on new challenges and utilize my coding and debugging skills for developing new features and enhance the overall user experience.
                    </p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"> <p>HTML & CSS </p> <hr style={{width: "58%"}}/> </div>
                    <div className="about-skill"> <p>REACT JS</p>  <hr style={{width: "65%"}}/> </div>
                    <div className="about-skill">  <p>JavaScript </p> <hr style={{width: "60%"}}/> </div>
                    <div className="about-skill"> <p>Git & GitHub</p> <hr style={{width: "55%"}}/> </div>
                    <div className="about-skill"> <p>Tailwind CSS </p> <hr style={{width: "50%"}}/> </div>           
                    <div className="about-skill"> <p>Bootstrap</p> <hr style={{width: "55%"}}/> </div>   
                    <div className="about-skill"> <p>PHP</p> <hr style={{width: "50%"}}/> </div>
                </div>  
            </div>   
        </div>
        <div className="about-achievements">
                    <div className="about-achievement">
                        <h1>My Education</h1>
                        <p>Bachler of Engineering : Electronic Engineering </p>
                        <span>in West Yangon Technological University.</span>
                    </div>
                    <hr/>
                    <div className="about-achievement">
                        <h1>Certificate</h1>
                        <p>React JS Course in Code Lab.</p>
                    </div>
                </div>
    </div>
  )
}

export default AboutMe