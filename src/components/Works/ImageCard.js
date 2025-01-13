import React from 'react';
import './ImageCard.css';

const ImageCard = ({ image1, title, description, link, videoUrl }) => {
  return (
    <div className="image-card">
      {videoUrl ? (
        <video width="100%" height="200" controls>
          <source src={videoUrl} type="video/quicktime" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img src={image1} alt={title} className="image1" />
      )}
      <h3>{title}</h3>
      <p className="description">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button className="see-more-button">See More on GitHub</button>
      </a>
    </div>
  );
};

export default ImageCard;