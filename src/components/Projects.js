import React from "react";
import './projects.css';

const Projects = ()=> {
    const projectPage = (url) =>{
        window.open(url);
    };
    return(
        <section id="projects" className="projects">
            <h2>Projects</h2>
            <div className="project">
                <h3>SGram - Social Media Website</h3>
                <p>In the 6th semester of my Bachelor of Technology in Computer Sciencce & Technology, I developed a comprehensive social media website as part of my coursework. The project was built using React.js for front-end, Express.js for back-end, and MongoDB for the database.</p>
                <h4>Key Features -</h4>
                <div>
                    <ul>
                        <li>User Authentication</li>
                        <li>Post Creation and Interaction</li>
                        <li>Real-Time Chat</li>
                        <li>Search and Explore</li>
                        <li>Responsive Design</li>
                    </ul>
                </div>
                <button className="pbtn" onClick={()=>{
                    projectPage('https://github.com/vikash-4ever/Sgram')
                }} target="blank" rel="noopener noreferrer">Project </button>
            </div>
        </section>
    );
};

export default Projects;