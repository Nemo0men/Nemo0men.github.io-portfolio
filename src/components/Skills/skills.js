import React from 'react';
import './skills.css';
import scribble from '../../assets/scribble.jpg';

const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">What I do</span>
        <span className="skillDescription">I am a skilled computer engineer to train machine learning</span>
        <div className="skillBars">

            <div className="skillBar">
                <img src={scribble} alt="Scribble" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>stuff</h2>
                    <p>stuff</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={scribble} alt="Scribble" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>stuff</h2>
                    <p>stuff</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={scribble} alt="Scribble" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>stuff</h2>
                    <p>stuff</p>
                </div>
            </div>


        </div>
    </section>
  )
}

export default Skills