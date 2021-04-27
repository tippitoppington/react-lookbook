import React from 'react';
import { outfits } from '../data/outfits';
import '../css/main.css';
import '../css/outfits_features.css';

const Outfit = ({ id }) => {
  return (
    <>
      {outfits
        .filter((outfit) => outfit.id === id)
        .map((outfit, key) => (
          <div className='look' style={outfit.style} key={key}>
            <div className='outfit-img-container'>
              <img
                src={outfit.outfit_img}
                alt='an awesome outfit'
                className='outfit-image'
              />
            </div>
            <div className='item_list' style={outfit.style}>
              <div className='tall_group'>
                {outfit.items.item_01
                  .filter((item) => item.chosen === 'true')
                  .map((chosenItem, key) => (
                    <img
                      key={key}
                      src={chosenItem.src}
                      alt='an awesome first item'
                      className='item shrink'
                    />
                  ))}

                {outfit.items.item_02
                  .filter((item) => item.chosen === 'true')
                  .map((chosenItem, key) => (
                    <img
                      key={key}
                      src={chosenItem.src}
                      alt='an awesome second item'
                      className='item grow'
                    />
                  ))}
              </div>
              <div className='short_group'>
                {outfit.items.item_03
                  .filter((item) => item.chosen === 'true')
                  .map((chosenItem, key) => (
                    <img
                      key={key}
                      src={chosenItem.src}
                      alt='an awesome second item'
                      className='item'
                    />
                  ))}
                {outfit.items.item_04
                  .filter((item) => item.chosen === 'true')
                  .map((chosenItem, key) => (
                    <img
                      key={key}
                      src={chosenItem.src}
                      alt='an awesome second item'
                      className='item'
                    />
                  ))}
                {outfit.items.item_05
                  .filter((item) => item.chosen === 'true')
                  .map((chosenItem, key) => (
                    <img
                      key={key}
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

export default Outfit;
