import React from 'react'
import "./Footer.css"
import {facebook,instagram,twitter} from '../../Assets'

const Footer = () => {
  return(
   <footer className='dark-grey'>
    <div className="wrapper">
      <div className="content-container">
        <div className="links">
          <a href="#"className='logo'>
            Sound<span className='red-transform'>Clao </span> 
          </a>


          <div className="social-icons">
            <a href="#">
              <img src={facebook} alt="#" />
            </a>

            <a href="#">
              <img src={instagram} alt="#" />
            </a>

            <a href="#">
              <img src={twitter} alt="#" />
            </a>
          </div>

          <div className="links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#">About us</a>
              </li>

                <li>
                  <a href="#">Courses</a>
                </li>

                <li>
                  <a href="#">Privacy</a>
                </li>
            </ul>
          </div> 
          <div className="links">
            <h3>Contact us</h3>
            <ul>
              <li>
                <a href="#">Contact@gmail.com</a>
              </li>

                <li>
                  <a href="#">0 912 900 823</a>
                </li>

               
            </ul>
          </div> 
        
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer