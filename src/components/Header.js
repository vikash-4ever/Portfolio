import React from "react";
import './header.css';

const Header = () =>{
    const scrollToSection = (id) =>{
        document.getElementById(id).scrollIntoView({behavior:'smooth'});
    };
    return(
        <header className="header">
            <h1>My Portfolio</h1>
            <nav>
                <button className="hbtn" onClick={()=> scrollToSection('about')}>About</button>
                <button className="hbtn" onClick={()=> scrollToSection('projects')}>Projects</button>
                <button className="hbtn" onClick={()=> scrollToSection('experience')}>Experience</button>
                <button className="hbtn" onClick={()=> scrollToSection('contact')}>Contact</button>
            </nav>
        </header>
    );
};

export default Header;