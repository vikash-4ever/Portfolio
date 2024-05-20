import React from "react";
import './about.css';
import myImage from '../assets/myimg.jpg';
import Resume from '../assets/resume.pdf';

const About = ()=>{

    return(
        <section id="about" className="about">
            
            <div className="tisec">
            <div className="text">
            <h2>About Me</h2>
                <p>Hello, I'm Vikash Vishwakarma, currently in my 4th year pursuing a Bachelor of Technology degree in Computer Science & Engineering from Rewa Engineering College, Rewa. As a full stack web developer, I specialize in creating dynamic and responsive web applications, leveraging my skills in both front-end & back-end development. I am passionate about coding and continuously enhancing my expertise in modern web technologies.
                I aim to leverage my skills and knowledge to contribute to innovative projects in the field of web development. My goal is to continually evolve as a developer and to be a part of a dynamic team that pushes the boundaries of Technology.</p>
                <a href={Resume} download="resume.pdf"><button className="rbtn" rel="noopener noreferrer">My Resume</button></a>
            </div>
            <div className="image">
                <img src={myImage} alt=""/>
            </div>
            </div>
        </section>
    );
};
export default About; 