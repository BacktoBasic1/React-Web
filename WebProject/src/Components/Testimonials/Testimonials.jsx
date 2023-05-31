import React from 'react'
import "./Testimonial.css"
import {testimonial1,testimonial2,testimonial3} from '../../Assets'

const Testimonials = () => {
  return (
    <section id='Testimonials' className='black'>
      <div className="wrapper">
        <h2>What our students say?</h2>

        <div className="content-container">
          <div className="testimonial">
            <img src={testimonial1} alt="" />
            <div className="reviewer-details">
              <div className="name">Jackie Chan</div>
              <div className="company-name">Amazon</div>
              <div className="review">This course is so awesome.</div>
            </div>
          </div>
          <div className="testimonial">
            <img src={testimonial2} alt="" />
            <div className="reviewer-details">
              <div className="name">Thanh Bình</div>
              <div className="company-name">UIT</div>
              <div className="review">I want to learn more about VOX and DAW.</div>
            </div>
          </div>
          <div className="testimonial">
            <img src={testimonial3} alt="" />
            <div className="reviewer-details">
              <div className="name">Minh Anh</div>
              <div className="company-name">Google</div>
              <div className="review">This course is all I need to start my own journey.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials