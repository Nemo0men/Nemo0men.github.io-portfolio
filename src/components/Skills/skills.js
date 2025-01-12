import React from 'react';
import './skills.css';
import user from '../../assets/user.png';
import uva from '../../assets/uva.png';
import skills from '../../assets/skills.png';
import { motion } from "framer-motion";

const Skills = () => {
  return (
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.4,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <section id='skills'>
          <span className="skillTitle">About Me</span>
          <div className="skillBars">
              <div className="skillBar">
                  <img src={user} alt="Me" className="skillBarImg" />
                  <div className="skillBarText">
                      <h2>Me</h2>
                      <p>
                          Hello! My full legal name is "Chankyu Nehemiah Kim", my preferred
                          name is "Nehemiah Kim", and my friends call me "Nemo". I am a
                          Korean-American born in Georgia and raised in Indiana and Virginia.
                          I am 20 years old and I enjoy playing the piano, cello, drums, bass,
                          electric guitar, acoustic guitar, and singing. I also play tennis and 
                          volleyball. 
                      </p>
                  </div>
              </div>

              <div className="skillBar">
                  <img src={uva} alt="Education" className="uvaSkillBarImg" />
                  <div className="skillBarText">
                      <h2>Education</h2>
                      <p>
                          I am a Computer Engineering third year student at the University of Virginia, 
                          pursuing my degree with a minor in Data Science from August 2022 
                          to May 2026, maintaining a GPA of 3.5/4.0. As a member of ML@UVA, the 
                          Mechatronics and Robotics Society, and Viva Lab, I apply advanced 
                          technologies in web development,
                           data systems, and deep learning. 
                      </p>
                  </div>
              </div>

              <div className="skillBar">
                  <img src={skills} alt="Skills" className="skillBarImg" />
                  <div className="skillBarText">
                      <h2>Skills</h2>
                      <p>
                          My skills span a comprehensive range of software development 
                          and data science technologies. In programming, I am proficient 
                          in Python, Java, JavaFX, SQL, and React. My machine learning expertise 
                          includes working with TensorFlow, LangChain, and OpenAI API. I focus 
                          on model development, data processing, and web development. I
                          also love public speaking.
                      </p>
                  </div>
              </div>
          </div>
        </section>
      </motion.div>
  )
}

export default Skills;