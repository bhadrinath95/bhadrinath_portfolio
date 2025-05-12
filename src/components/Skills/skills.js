import React from 'react'
import './skills.css'
import UIDesign from '../../assets/ui-design.png'
import QATesting from '../../assets/qatesting.png'
import Cloud from '../../assets/cloud.png'

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>I build scalable backend systems, automate testing, and deliver high-quality software solutions using Python, Django, and modern DevOps practices.</span>
        <div className='skillBars'>
          <div className='skillBar'>
            <img src={UIDesign} alt="UIDesign" className='skillBarImg' />
            <div className='skillBarText'>
              <h2>Full Stack Web Development</h2>
              <p>Proficient in building end-to-end web applications using Django for the backend and React.js for interactive frontends.</p>
            </div>
          </div>
          <div className='skillBar'>
            <img src={QATesting} alt="QATesting" className='skillBarImg' />
            <div className='skillBarText'>
              <h2>Test Automation & Quality Engineering</h2>
              <p>Experienced in building Selenium-based automation frameworks and integrating them with CI/CD pipelines for consistent, high-quality delivery.</p>
            </div>
          </div>
          <div className='skillBar'>
            <img src={Cloud} alt="Cloud" className='skillBarImg' />
            <div className='skillBarText'>
              <h2>Cloud Deployment & Agile DevOps</h2>
              <p>Skilled in deploying scalable apps on AWS and supporting Agile development workflows with tools like Jenkins, JIRA, and Bitbucket.</p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Skills