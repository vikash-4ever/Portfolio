import React from "react";
import './contact.css';
import { AiOutlineMail, AiOutlinePhone, AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

const Contact = ()=>{

    const mailClicked = (email) =>{
        window.location.href = `mailto${email}`;
    };

    const phoneClicked = (phone) =>{
        window.location.href = `tel:${phone}`;
    };
    
    const linkClicked = (url) => {
        window.open(url, '_blank');
    }
    return(
        <section id="contact" className="contact">
            <h2>Contact Me</h2>
            <div className="contactBox">
                <AiOutlineMail size={32} onClick={() =>{
                    mailClicked('vishwakarmavikash673@gmail.com');
                }}/>
                <AiOutlinePhone size={32} onClick={()=>{
                    phoneClicked('+919644687080');
                }}/>
                <AiOutlineLinkedin size={32} onClick={()=>{
                    linkClicked('https://www.linkedin.com/in/vikash-4ever');
                }}/>
                <AiOutlineGithub size={32} onClick={()=>{
                    linkClicked('https://github.com/vikash-4ever');
                }}/>
            </div>
        </section>
    );
};
export default Contact;