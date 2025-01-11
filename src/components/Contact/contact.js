import React from 'react';
import './contact.css';
import linkedinIcon from '../../assets/linkedin.png';
import githubIcon from '../../assets/github.png';
import instagramIcon from '../../assets/instagram.png';

const Contact = () => {
  return (
    <section id="contactPage">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
        <form className="contactForm">
            <input type="text" className="name" placeholder='Your Name' />
            <input type="text" className="email" placeholder='Your Email'   />
            <textarea className='msg' name="message" rows="5" placeholder="Your Message"></textarea>
            <button type='submit' value='Send' className="submitBtn">Submit</button>
            <div className="links">
                <img src={linkedinIcon} alt="LinkedIn" className="link" />
                <img src={githubIcon} alt="GitHub" className="link" />
                <img src={instagramIcon} alt="Instagram" className="link" />
            </div>
        </form>
    </section>
  )
}

export default Contact;