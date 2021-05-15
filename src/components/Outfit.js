import React, { useState } from 'react';
import ItemOptions from './ItemOptions';
import ItemList from './ItemList';
import { outfits } from '../data/outfits';
import '../css/main.css';
import '../css/outfits_features.css';

const Outfit = ({ id }) => {
  const outfit = outfits.filter((o) => o.id === id);
  const o = outfit[0];
  const [itemCategory, setItemCategory] = useState('item_01');
  const [open, setOpen] = useState('false');
  const [visible, setVisible] = useState('false');
  const toggleItem = (item) => {
    setItemCategory(item);
    setOpen('true');
    setVisible('true');
  };
  const item1 = o.item_01.filter((item) => item.chosen === 'true');
  const item2 = o.item_02.filter((item) => item.chosen === 'true');
  const item3 = o.item_03.filter((item) => item.chosen === 'true');
  const item4 = o.item_04.filter((item) => item.chosen === 'true');
  const item5 = o.item_05.filter((item) => item.chosen === 'true');

  const [items, setItems] = useState([item1, item2, item3, item4, item5]);
  const handleOption = (itemCat, itemOpt) => {
    console.log(itemCat, itemOpt);
  };
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
      ))}
    </>
  );
};

export default Outfit;
