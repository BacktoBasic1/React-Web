import React from "react";
import "/Users/phuong.nguyen24/Downloads/VSC Folder/HTML/HTML/viteProject/src/Components/Header/Header.css";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <header>
        <div className="wrapper">
            <Navbar/>
            <div className="cta">
                <p className="course-name">Sound Design Masterclass</p>
                <h1>Learn the Art of Sound Design</h1>
                <a href="#"className="demo-btn">
                    Demo Lesson
                </a>
            </div>
        </div>
    </header>
    
  )
};

export default Header