import React from 'react';

import '../css/main.css';
import '../css/outfits_features.css';

const ItemOptions = ({ outfit, itemNumber }) => {
  const itemOpts = outfit[0][itemNumber];

  return (
    <>
      <div className='item-opts-container'>
        <h4 className='sticky'>Change item</h4>
        {itemOpts.map((i, key) => (
          <div className='item-opt'>
            <img src={i.src} alt='an alternate item' />
            <div className='item-info'>
              <p>Hello</p>
              <p>{i.name}</p>
              <p>{i.price}</p>
              <p>View Details</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ItemOptions;
