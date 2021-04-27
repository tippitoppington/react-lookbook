import React from 'react';
import LooksImages from './LooksImages';
import '../css/main.css';
import '../css/outfits_features.css';

const LooksGrid = () => {
  return (
    <>
      <div className='section-header'>
        <h2>Your Lookbook</h2>
        <p className='subhead'>Styles for every mood</p>
        <div className='grid-container'>
          <LooksImages />
        </div>
      </div>
    </>
  );
};

export default LooksGrid;
