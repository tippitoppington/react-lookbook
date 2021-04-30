import React from 'react';
import { outfits } from '../data/outfits';

const LooksImages = ({ changeOutfit }) => {
  return (
    <>
      <div className='grid-container'>
        {outfits.map((outfit, key) => (
          <button
            key={key}
            className='look-img-trigger'
            onClick={() => changeOutfit(outfit.id)}>
            <figure>
              <img src={outfit.outfit_img} alt='an awesome look' />
            </figure>
          </button>
        ))}
      </div>
    </>
  );
};

export default LooksImages;
