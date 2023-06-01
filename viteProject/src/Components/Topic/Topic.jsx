import React from 'react'
import { useState } from 'react';
import "./Topic.css";
import { daw, frequencies, music_master, vocal_process, vocal_training, bgElement1 } from "../../Assets"

const Topic = () => {
  const[currentImage, setCurrentImage] = useState(frequencies);
  


  return (
    <section id='topics'className='black'>
      <div className="wrapper">
        <h2>What will you learn?</h2>
        <div className="content-container">
          <ul className='Topic-list'>
            <li onMouseDownCapture={() => setCurrentImage(frequencies)}>What are frequencies?</li>
            <li onMouseDownCapture={() => setCurrentImage(daw)}>Using the DAW</li>
            <li onMouseDownCapture={() => setCurrentImage(vocal_process)}>Vocals Processing</li>
            <li onMouseDownCapture={() => setCurrentImage(vocal_training)}>Vocal Training</li>
            <li onMouseDownCapture={() => setCurrentImage(music_master)}>Music Master</li>
          </ul>
          <div className="topic-image">
            <img src={currentImage} alt="" />
          </div>
        </div>
        <img src={bgElement1} className="bg-element1"></img>
      </div>
    </section>
  )

}

export default Topic