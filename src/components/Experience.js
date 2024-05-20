import React from "react";
import './experience.css';

const Experience = () =>{
    const viewCertificate = (url) =>{
        window.open(url);
    };
    return(
        <section id="experience" className="experience">
            <h2>Experience</h2>
            <div className="job">
                <h3>React JS</h3>
                <p>Crafted captivating social media platform, and working on a e-commerce website to gain more experience in this technology.</p>
                <p>I have completed a certification course in Front-end web development offered by Great Learning Academy.</p>
                <button className="cbtn" onClick={()=>{
                    viewCertificate('https://verify.mygreatlearning.com/verify/DHMDSRYN');
                }} target="blank" rel="noopener noreferrer">View Certificate</button>
            </div>
        </section>
    );
};

export default Experience;