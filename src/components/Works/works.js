import React from 'react';
import './works.css';
import scribble from '../../assets/scribble.jpg';


const Works = () => {
  return (
    <section id='works'>
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="worksDesc">This is all my work!</span>
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
  );
}

export default Works;