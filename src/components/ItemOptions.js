import React from 'react';
import '../css/main.css';
import '../css/outfits_features.css';

const ItemOptions = ({ outfit, itemOptions, visible }) => {
  const itemOpts = outfit[0][itemOptions];
  //handle click on item option that updates the item list array with chosen item option, by looping through all item options, setting chosen to false and just true on the clicked item.
  return (
    <>
      <div
        className={
          visible == 'true'
            ? 'item-opts-container visible'
            : 'item-opts-container'
        }>
        <div className='panel-header sticky'>
          <h4>Change item</h4>
        </div>
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
