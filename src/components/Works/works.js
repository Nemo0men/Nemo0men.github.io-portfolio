import React, { useState } from 'react';
import './works.css';
import hand from '../../assets/hand.png';
import lmi from '../../assets/lmi.png';
import uva from '../../assets/uva.png';
import rag from '../../assets/rag.png';
import { motion } from "framer-motion";
import ImageCard from './ImageCard';

const worksData = [
  {
    image1: lmi,
    title: "GraphRAG vs. RAG: Advancing Complex Data Analysis for Government Datasets",
    description: "Working on a client project at ML@UVA for the Logistics Management Institute (LMI), exploring Microsoft's GraphRAG technology as well as other RAG algorithms to enhance retrieval-augmented generation (RAG) for complex, multi-hop reasoning questions on government-specific datasets.",
    link: "https://github.com/Nemo0men/RAG-Evaluation-Pipeline"
  },
  {
    image1: uva,
    title: "UVA Course Catalog (2024)",
    description: "Developed a JavaFX CRUD Course Review App with a team, enabling students to log in, write, view, and manage reviews for UVA courses, featuring a UI, SQLite database for persistence, and JSON output generation.",
    link: "https://github.com/Nemo0men/UVACourseCatalog"
  },
  {
    image1: hand,
    title: "Real-Time Sign Language Translator (2024)",
    description: "Leveraging Arduino TinyML technology, I developed an innovative sign language translator that bridges communication gaps for deaf and hard-of-hearing individuals. By training a sophisticated deep learning model optimized for real-time gesture recognition, the project demonstrates my expertise in embedded AI, computer vision, and assistive technology. ",
    link: "https://github.com/Nemo0men/Real-Time-ASL-Translator"
  },
  {
    image1: rag,
    title: "Simple RAG LLM for Documents (2024)",
    description: "I built a Retrieval-Augmented Generation (RAG) system from scratch that integrates document retrieval with Large Language Models to generate context-aware responses. Using Python, LangChain, OpenAI, and Chroma, I created a solution that enables precise information retrieval and intelligent query processing, showcasing my skills in AI development and machine learning technologies.",
    link: "https://github.com/Nemo0men/Simple-RAG-LLM-for-Documents"
  }
];

const Works = () => {
  return (
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="relative flex flex-col gap-4 items-center justify-center px-4"
    >
      <section id='works'>
          <h2 className="worksTitle">My Works</h2>
          <div className="worksImgs">
            {worksData.map((work, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <ImageCard 
                  image1={work.image1} 
                  title={work.title}
                  description={work.description}
                  link={work.link}
                  videoUrl={work.videoUrl}
                />
              </motion.div>
            ))}
          </div>
          <a href="https://github.com/Nemo0men" target="_blank" rel="noopener noreferrer">
            <button className="workBtn">See More</button>
          </a>
      </section>
    </motion.div>
  );
}

export default Works;