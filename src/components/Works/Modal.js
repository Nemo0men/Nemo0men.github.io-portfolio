import React from 'react';
import './modal.css'; // Create a CSS file for modal styles

const Modal = ({ isOpen, onClose, title, description, link }) => {
  if (!isOpen) return null; // Don't render if not open

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <button onClick={onClose} className="close-button">Close</button>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button className="see-more-button">See More on GitHub</button>
        </a>
      </div>
    </div>
  );
};

export default Modal; 