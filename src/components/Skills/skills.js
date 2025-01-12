import React from 'react';
import './skills.css';
import user from '../../assets/user.png';
import education from '../../assets/education.png';
import skills from '../../assets/skills.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">About Me</span>
        {/* <span className="skillDescription">I am a skilled computer engineer to train machine learning</span> */}
        <div className="skillBars">

            <div className="skillBar">
                <img src={education} alt="Education" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Education</h2>
                    <ul>
                        <li>Computer Science Degree</li>
                        <li>Machine Learning Certification</li>
                        <li>Web Development Bootcamp</li>
                    </ul>
                </div>
            </div>

            <div className="skillBar">
                <img src={user} alt="User" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>User</h2>
                    <p>stuff</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={skills} alt="Skills" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Skills</h2>
                    <p>stuff</p>
                </div>
            </div>


        </div>
    </section>
  )
}

export default Skills