/* eslint-disable no-unused-vars */
import './Projects.css'
import themepattern from '../../assets/theme_pattern.svg'
import project_data from '../../assets/services_data'
import readmore_btn from '../../assets/arrow_icon.svg'

import React from 'react'

const Projects = () => {
  return (
    <div id='projects' className='projects'>
        <div className="project-title">
            <h1>My Projects</h1>
            <img src={themepattern} alt="" />
        </div>
        <div className="project-contaier">
            {
                project_data.map((project, index) => {
                    return <div key={index} className='project-format'>
                        <h3>{project.s_no}</h3>
                        <h2>{project.s_name}</h2>
                        <p>{project.s_desc}</p>

                        <div className="project_buttom">
                            <div className="project-source">
                                   <a href={project.s_code}>
                                        <p>Source Code</p>
                                        {/* <img src={readmore_btn} alt="" /> */}
                                   </a>
                            </div>
                            <div className="project_demo">
                               <a href={project.s_demo}>
                                <p>Demo</p>
                               </a>
                            </div>
                        </div>
                        
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default Projects