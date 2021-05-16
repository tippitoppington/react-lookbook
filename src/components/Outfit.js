import React, { useState } from 'react';
import ItemOptions from './ItemOptions';
import ItemList from './ItemList';

import '../css/main.css';
import '../css/outfits_features.css';

const Outfit = ({ outfit, item1, item2, item3, item4, item5 }) => {
  const [itemCategory, setItemCategory] = useState('item_01');
  const [open, setOpen] = useState('false');
  const [visible, setVisible] = useState('false');
  const toggleItem = (item) => {
    setItemCategory(item);
    setOpen('true');
    setVisible('true');
  };

  const handleOption = (itemCat, itemOpt) => {
    console.log(itemCat, itemOpt);
  };

  console.log(`Outfit.js, outfit[0].id = ${outfit[0].id}`);
  console.log(`Outfit.js, item1[0].src = ${item1[0].src}`);
  return (
    <>
      <div className='look' style={outfit[0].style}>
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
            src={outfit[0].outfit_img}
            alt='an awesome look'
            className='outfit-image'
          />
        </div>

        <ItemList
          outfit={outfit}
          toggleItem={toggleItem}
          item1={item1}
          item2={item2}
          item3={item3}
          item4={item4}
          item5={item5}
          open={open}
        />
        <ItemOptions
          outfit={outfit}
          itemCategory={itemCategory}
          visible={visible}
          handleOption={handleOption}
        />
      </div>
    </>
  );
};

export default Outfit;
