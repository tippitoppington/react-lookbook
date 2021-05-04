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
                src={outfit.outfit_img}
                alt='an awesome look'
                className='outfit-image'
              />
            </div>

            <div className='item_list  ' style={outfit.style}>
              <div className='tall_group'>
                {outfit.items.item_01
                  .filter((item) => item.chosen === 'true')
                  .map((chosenItem, key) => (
                    <div className='item'>
                      <img
                        key={key}
                        src={chosenItem.src}
                        alt='an awesome first item'
                      />
                      <p>$100.00</p>
                    </div>
                  ))}

                {outfit.items.item_02
                  .filter((item) => item.chosen === 'true')
                  .map((chosenItem, key) => (
                    <div className='item'>
                      <img
                        key={key}
                        src={chosenItem.src}
                        alt='an awesome second item'
                      />
                      <p>$140.00</p>
                    </div>
                  ))}
              </div>

              <div className='short_group'>
                {outfit.items.item_03
                  .filter((item) => item.chosen === 'true')
                  .map((chosenItem, key) => (
                    <div className='item'>
                      <img
                        key={key}
                        src={chosenItem.src}
                        alt='an awesome third item'
                        className='item'
                      />
                      <p>$30.00</p>
                    </div>
                  ))}
                {outfit.items.item_04
                  .filter((item) => item.chosen === 'true')
                  .map((chosenItem, key) => (
                    <div className='item'>
                      <img
                        key={key}
                        src={chosenItem.src}
                        alt='an awesome fourth item'
                        className='item'
                      />
                      <p>$19.00</p>
                    </div>
                  ))}
                {outfit.items.item_05
                  .filter((item) => item.chosen === 'true')
                  .map((chosenItem, key) => (
                    <div className='item'>
                      <img
                        key={key}
                        src={chosenItem.src}
                        alt='an awesome fifth item'
                        className='item'
                      />
                      <p>$120.00</p>
                    </div>
                  ))}
              </div>
            </div>

            <div className='item-opts-container'>
              <h4 className='sticky'>Change item</h4>
              <div className='item-opt'>
                <img
                  src='/img/01/items/item_01/item_01_1.png'
                  alt='an alternate item'
                  className='item-opt-01'
                />
                <div class='item-info'>
                  <p>Brand</p>
                  <p>Product Name</p>
                  <p>$120.00</p>
                  <p>View Details</p>
                </div>
              </div>
              <div className='item-opt'>
                <img
                  src='/img/01/items/item_01/item_01_2.png'
                  alt='an alternate item'
                  className='item-opt-02'
                />
                <div class='item-info'>
                  <p>Brand</p>
                  <p>Product Name</p>
                  <p>$120.00</p>
                  <p>View Details</p>
                </div>
              </div>
              <div className='item-opt'>
                <img
                  src='/img/01/items/item_01/item_01_3.png'
                  alt='an alternate item'
                  className='item-opt-03'
                />
                <div class='item-info'>
                  <p>Brand</p>
                  <p>Product Name</p>
                  <p>$120.00</p>
                  <p>View Details</p>
                </div>
              </div>
              <div className='item-opt'>
                <img
                  src='/img/01/items/item_01/item_01_4.png'
                  alt='an alternate item'
                  className='item-opt-04'
                />
                <div class='item-info'>
                  <p>Brand</p>
                  <p>Product Name</p>
                  <p>$120.00</p>
                  <p>View Details</p>
                </div>
              </div>
              <div className='item-opt'>
                <img
                  src='/img/01/items/item_01/item_01_5.png'
                  alt='an alternate item'
                  className='item-opt-05'
                />
                <div class='item-info'>
                  <p>Brand</p>
                  <p>Product Name</p>
                  <p>$120.00</p>
                  <p>View Details</p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Outfit;
