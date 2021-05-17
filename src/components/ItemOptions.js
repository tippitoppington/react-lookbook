import React from 'react';
import '../css/main.css';
import '../css/outfits_features.css';

const ItemOptions = ({ outfit, itemCategory, handleOption, visible }) => {
  const itemCat = outfit[0][itemCategory];

  //handleOptions function on item category that updates the item list array with chosen item option, by looping through all item options, setting chosen to false and just true on the clicked item.
  //i in itemOpts is the item #
  return (
    <>
      <div
        className={
          visible === 'true'
            ? 'item-opts-container visible'
            : 'item-opts-container'
        }>
        <div className='panel-header sticky'>
          <h4>Change item</h4>
        </div>
        {itemCat.map((opt, key) => (
          <div className='item-opt' key={key}>
            <img
              src={opt.src}
              alt='an alternate item'
              onClick={() => handleOption(itemCategory, opt.opt)}
            />
            <div className='item-info'>
              <p>Hello</p>
              <p>{opt.name}</p>
              <p>{opt.price}</p>
              <p>View Details</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ItemOptions;
