import React from 'react';
import './intro.css';
import bg from '../../assets/fish.png'
import btnImg from '../../assets/suitcase.png'
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="IntroText">I'm <span className="introName">Nehemiah</span><br />Computer Engineer</span>
            <p className="introPara">I am a skilled AI/ML engineer with experience with creating <br />the smart products you need.</p>
            <Link><button className="btn"><img src={btnImg} alt="Hire Me" className='btnImg'/>Hire Me</button></Link>
        </div>
        <img src={bg} alt="Profile" className="bg" />
    </section>
  )
}

export default Intro