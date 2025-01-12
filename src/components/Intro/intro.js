import React from 'react';
import './intro.css';
import bg from '../../assets/me.png'
import btnImg from '../../assets/suitcase.png'
import { Link } from 'react-scroll';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Intro = () => {
  const [text] = useTypewriter({
    words: ['Software Developer', 'Data Scientist', 'AI/ML Engineer'],
    loop: true,
  });
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="IntroText">I'm <span className="introName">Nehemiah</span><br />{text}<Cursor /></span>
            <p className="introPara">Designer, developer, and tech enthusiast-creating<br />exceptional experiences.</p>
            <Link to='contactPage' spy={true} smooth={true} offset={-100} duration={500}><button className="btn"><img src={btnImg} alt="Hire Me" className='btnImg'/>Hire Me</button></Link>
        </div>
        <img src={bg} alt="Profile" className="bg" />
    </section>
  )
}

export default Intro