import React from 'react';
import './works.css';
import scribble from '../../assets/scribble.jpg';
import { motion } from "framer-motion";

const Works = () => {
  return (
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.4,
        ease: "easeInOut",
      }}
      className="relative flex flex-col gap-4 items-center justify-center px-4"
    >
      <section id='works'>
          <h2 className="worksTitle">My Works</h2>
          <div className="worksImgs">
              <img src={scribble} alt="" className="worksImg" />
              <img src={scribble} alt="" className="worksImg" />
              <img src={scribble} alt="" className="worksImg" />
              <img src={scribble} alt="" className="worksImg" />
              <img src={scribble} alt="" className="worksImg" />
              <img src={scribble} alt="" className="worksImg" />
          </div>
          <button className="workBtn">See More</button>
      </section>
    </motion.div>
  );
}

export default Works;