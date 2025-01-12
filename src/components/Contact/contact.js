import React from 'react';
import { useRef } from 'react';
import './contact.css';
import linkedinIcon from '../../assets/linkedin.png';
import githubIcon from '../../assets/github.png';
import instagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_tr4b6h4', 'template_37ur8tb', form.current, {
        publicKey: 'YEkRtoNEP4eab3Uof',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Message Sent Successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Message Failed to Send!');
        },
      );
  };
  return (
    <section id="contactPage">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <input type="text" className="name" placeholder='Your Name' name='your_name' />
            <input type="text" className="email" placeholder='Your Email' name='your_email' />
            <textarea className='msg' name="message" rows="5" placeholder="Your Message" />
            <button type='submit' value='Send' className="submitBtn">Submit</button>
            <div className="links">
                <a href="https://www.linkedin.com/in/nehemiah-kim-a1b087291/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinIcon} alt="LinkedIn" className="link" />
                </a>
                <a href="https://github.com/Nemo0men" target="_blank" rel="noopener noreferrer">
                    <img src={githubIcon} alt="GitHub" className="link" />
                </a>
                <a href="https://www.instagram.com/nemo__k/" target="_blank" rel="noopener noreferrer">
                    <img src={instagramIcon} alt="Instagram" className="link" />
                </a>
            </div>
        </form>
    </section>
  )
}

export default Contact;