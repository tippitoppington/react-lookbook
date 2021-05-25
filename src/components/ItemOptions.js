import React from 'react';
import '../css/main.css';
import '../css/outfits_features.css';
import { outfits } from '../data/outfits';

const ItemOptions = ({
  selectedOutfit,
  itemCategory,
  handleOption,
  visible,
}) => {
  const outfit = outfits.filter((o) => o.id === selectedOutfit.id);
  let itemCatOpts = outfit[0][itemCategory];

  //handleOptions function updates the selectedOutfit array with the clicked item option, and adds an active state to the selected option.

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
        {itemCatOpts.map((opt, i) => (
          <div className='item-opt ' key={i}>
            <img
              className='item-opt'
              src={opt.src}
              alt='an alternate item'
              onClick={(e) =>
                handleOption(selectedOutfit.id, itemCategory, opt.opt)
              }
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
