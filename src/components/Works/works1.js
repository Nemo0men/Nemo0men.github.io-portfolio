import React from 'react';
import ImageCard from './ImageCard';
import logo from '../../assets/scribble.jpg'; // Replace with your image path

const Works1 = () => {
    return (
        <div className="app">
            <h1>Image Cards</h1>
            <ImageCard 
                imageSrc={logo} 
                title="My Image Title" 
                description="This is a description of the image." 
            />
            {/* Add more ImageCard components as needed */}
        </div>
    );
};

export default Works1;