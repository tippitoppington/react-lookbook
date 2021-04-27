import React from 'react';
import { outfits } from '../js/outfits';
import '../css/main.css';
import '../css/products.css';

const Look = () => {
  return (
    <>
      {outfits.map((outfit, key) => (
        <div className='look' key={key}>
          <img
            src={outfit.outfit_img}
            alt='an awesome outfit'
            className='outfit-image'
          />

          <div className='item_list'>
            <div className='tall_group'>
              {outfit.items.item_01
                .filter((item) => item.chosen === 'true')
                .map((chosenItem) => (
                  <img
                    src={chosenItem.src}
                    alt='an awesome first item'
                    className='item'
                  />
                ))}

              {outfit.items.item_02
                .filter((item) => item.chosen === 'true')
                .map((chosenItem) => (
                  <img
                    src={chosenItem.src}
                    alt='an awesome second item'
                    className='item'
                  />
                ))}
            </div>
            <div className='short_group'>
              {outfit.items.item_03
                .filter((item) => item.chosen === 'true')
                .map((chosenItem) => (
                  <img
                    src={chosenItem.src}
                    alt='an awesome second item'
                    className='item'
                  />
                ))}
              {outfit.items.item_04
                .filter((item) => item.chosen === 'true')
                .map((chosenItem) => (
                  <img
                    src={chosenItem.src}
                    alt='an awesome second item'
                    className='item'
                  />
                ))}
              {outfit.items.item_05
                .filter((item) => item.chosen === 'true')
                .map((chosenItem) => (
                  <img
                    src={chosenItem.src}
                    alt='an awesome second item'
                    className='item'
                  />
                ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Look;
