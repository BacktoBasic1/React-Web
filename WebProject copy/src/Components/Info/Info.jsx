import React from 'react'
import "./Info.css"
import { studentIcon, videoIcon,bgElement2 } from '../../Assets'

const Info = () => {
  return (
    <section id='info'className='pink'>
      <div className="wrapper">
        <div className="content-container">
          <div className="info-content">
            <img src={studentIcon} alt="" />
            <div className="amount1">23,000+</div>
            <div className="type">Student</div>
          </div>
          <div className="info-content">
            <img src={videoIcon} alt="#" />
            <div className="amount2">30 Hours</div>
            <div className="type">Video Contents</div>
          </div>
        </div>
        <img className='bgElement2' src={bgElement2} alt="" />
      </div>
    </section>
  )
}

export default Info