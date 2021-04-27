import React from 'react';
import { images } from '../js/images';
import '../css/main.css';
import '../css/products.css';

const Browse = () => {
  return (
    <>
      {images.map((image, key) => (
        <div className='outfit-img-group' key={key}>
          <figure>
            <img
              src={`./img/${image.id}/${image.outfit_img}`}
              alt='an awesome outfit'
              className='outfit-image'
            />
          </figure>
          <figure>
            <img
              src={`./img/${image.id}/${image.outfit_img}`}
              alt='a large outfit'
              className='item-lg'
            />
          </figure>
          <figure>
            <img
              src={`${image.th_img}/item${image.id}_th.png`}
              alt='an thumbnail outfit'
              className='item-th'
            />
          </figure>
        </div>
      ))}
    </>
  );
};

export default Browse;
