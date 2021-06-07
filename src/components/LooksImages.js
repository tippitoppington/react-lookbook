import React from 'react';
import { outfits } from '../data/outfits-data';

const LooksImages = ({ setOutfitId }) => {
  return (
    <>
      <div className='grid-container'>
        {outfits.map((outfit, key) => (
          <button
            key={key}
            className='look-img-trigger'
            onClick={() => setOutfitId(outfit.id)}>
            <figure>
              <img
                src={outfit.outfit_img}
                alt='an awesome look'
                loading='lazy'
                decoding='async'
              />
            </figure>
          </button>
        ))}
      </div>
    </>
  );
};

export default LooksImages;
