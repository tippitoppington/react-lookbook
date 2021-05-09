import React, { useState } from 'react';
import ItemOptions from './ItemOptions';
import { outfits } from '../data/outfits';
import '../css/main.css';
import '../css/outfits_features.css';

const Outfit = ({ id }) => {
  const outfit = outfits.filter((o) => o.id === id);

  const [itemNumber, setItemNumber] = useState('item_01');
  const [chosenItem, setChosenItem] = useState('');
  return (
    <>
      {outfit.map((o, key) => (
        <div className='look' style={o.style} key={key}>
          <div className='desc-container'>
            <div className='look-description'>
              <h4>Style Name</h4>
              <ul>
                <li>What makes it work</li>
                <li>Key elements</li>
                <li>Make it your own</li>
              </ul>
            </div>
          </div>
          <div className='outfit-img-container'>
            <img
              src={o.outfit_img}
              alt='an awesome look'
              className='outfit-image'
            />
          </div>

          <div className='item_list  ' style={o.style}>
            <div className='tall_group'>
              {o.item_01
                .filter((item) => item.chosen === 'true')
                .map((chosenItem, key) => (
                  <div className='item' key={key}>
                    <img
                      src={chosenItem.src}
                      alt='an awesome first item'
                      onClick={() => setItemNumber('item_01')}
                    />
                    <p>{chosenItem.price}</p>
                  </div>
                ))}

              {o.item_02
                .filter((item) => item.chosen === 'true')
                .map((chosenItem, key) => (
                  <div className='item' key={key}>
                    <img
                      src={chosenItem.src}
                      alt='an awesome second item'
                      onClick={() => setItemNumber('item_02')}
                    />
                    <p>{chosenItem.price}</p>
                  </div>
                ))}
            </div>

            <div className='short_group'>
              {o.item_03
                .filter((item) => item.chosen === 'true')
                .map((chosenItem, key) => (
                  <div className='item' key={key}>
                    <img
                      src={chosenItem.src}
                      alt='an awesome third item'
                      className='item'
                      onClick={() => setItemNumber('item_03')}
                    />
                    <p>{chosenItem.price}</p>
                  </div>
                ))}
              {o.item_04
                .filter((item) => item.chosen === 'true')
                .map((chosenItem, key) => (
                  <div className='item' key={key}>
                    <img
                      src={chosenItem.src}
                      alt='an awesome fourth item'
                      className='item'
                      onClick={() => setItemNumber('item_04')}
                    />
                    <p>{chosenItem.price}</p>
                  </div>
                ))}
              {o.item_05
                .filter((item) => item.chosen === 'true')
                .map((chosenItem, key) => (
                  <div className='item' key={key}>
                    <img
                      src={chosenItem.src}
                      alt='an awesome fifth item'
                      className='item'
                      onClick={() => setItemNumber('item_05')}
                    />
                    <p>{chosenItem.price}</p>
                  </div>
                ))}
            </div>
          </div>
          <ItemOptions id={id} outfit={outfit} itemNumber={itemNumber} />
        </div>
      ))}
    </>
  );
};

export default Outfit;
