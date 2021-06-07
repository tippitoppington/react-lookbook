import React from 'react';

import { outfits } from '../data/outfits-data';

const ItemList = ({ selectedOutfit, handleCategory, open }) => {
  let outfit = outfits.filter((o) => o.id === selectedOutfit.id);
  let item_01 = outfit[0].item_01.filter(
    (o) => o.opt === selectedOutfit.item_01
  );
  let item_02 = outfit[0].item_02.filter(
    (o) => o.opt === selectedOutfit.item_02
  );
  let item_03 = outfit[0].item_03.filter(
    (o) => o.opt === selectedOutfit.item_03
  );
  let item_04 = outfit[0].item_04.filter(
    (o) => o.opt === selectedOutfit.item_04
  );
  let item_05 = outfit[0].item_05.filter(
    (o) => o.opt === selectedOutfit.item_05
  );

  return (
    <>
      <div
        className={open === 'true' ? 'item_list open' : 'item_list'}
        style={outfit.style}>
        <button className='tooltip'>
          Select an item to personalize this look.
        </button>
        <div className='tall_group'>
          {
            <div className='item'>
              <img
                src={item_01[0].src}
                alt='an awesome first item'
                onClick={() => handleCategory('item_01')}
              />
              <p>{item_01[0].price}</p>
            </div>
          }

          <div className='item'>
            <img
              src={item_02[0].src}
              alt='an awesome second item'
              onClick={() => handleCategory('item_02')}
            />
            <p>{item_02[0].price}</p>
          </div>
        </div>

        <div className='short_group'>
          <div className='item'>
            <img
              src={item_03[0].src}
              alt='an awesome third item'
              className='item'
              onClick={() => handleCategory('item_03')}
            />
            <p>{item_03[0].price}</p>
          </div>

          <div className='item'>
            <img
              src={item_04[0].src}
              alt='an awesome fourth item'
              className='item'
              onClick={() => handleCategory('item_04')}
            />
            <p>{item_04[0].price}</p>
          </div>

          <div className='item'>
            <img
              src={item_05[0].src}
              loading='lazy'
              decoding='async'
              alt='an awesome fifth item'
              className='item'
              onClick={() => handleCategory('item_05')}
            />
            <p>{item_05[0].price}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemList;
