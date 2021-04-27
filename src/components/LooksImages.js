import React from 'react';
import { outfits } from '../js/outfits';

const LooksImages = ({ changeOutfit }) => {
  return (
    <>
      <div className='section-header'>
        <h2>Your Lookbook</h2>
        <p className='subhead'>Styles for every mood</p>
        <div className='grid-container'>
          {outfits.map((outfit, key) => (
            <button
              key={key}
              className='look-img-trigger'
              onClick={() => changeOutfit(outfit.id)}>
              <figure>
                <img src={outfit.outfit_img} alt='an awesome outfit' />
              </figure>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default LooksImages;
