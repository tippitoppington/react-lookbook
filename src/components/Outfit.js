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
  const showItem = (itemCat) => {
    setItemCategory(itemCat);
    setOpen('true');
    setVisible('true');
  };
  //find the option object
  const [item1, setItem1] = useState(o.item_01[0]);
  const [item2, setItem2] = useState(o.item_02[0]);
  const [item3, setItem3] = useState(o.item_03[0]);
  const [item4, setItem4] = useState(o.item_04[0]);
  const [item5, setItem5] = useState(o.item_05[0]);

  // const [items, setItems] = useState([item1, item2, item3, item4, item5]);
  const handleOption = (itemCat, itemOpt) => {
    switch (itemCat) {
      case 'item_01':
        setItem1(itemOpt);
        break;
      case 'item_02':
        setItem2(itemOpt);
        break;
      case 'item_03':
        setItem3(itemOpt);
        break;
      case 'item_04':
        setItem4(itemOpt);
        break;
      case 'item_05':
        setItem5(itemOpt);
        break;
      default:
        alert("I don't know such values");
    }
    console
      .log
      //After returns:
      //Outfit.js after: item1.src  = /img/01/items/item_01/item_01_1.webp itemOpt.src = /img/01/items/item_01/item_01_2.webp}

      // `Outfit.js after: item1.src  = ${item1} itemOpt = ${itemOpt}}`
      ();
  };
  //Before returns:
  //Outfit.js before: item1.src  = /img/01/items/item_01/item_01_1.webp
  // console.log(`Outfit.js before: item1.type  = ${item1[0].type}`);
  return (
    <>
      {outfit.map((o) => (
        <div className='look' style={o.style}>
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
            showItem={showItem}
            item1={item1}
            item2={item2}
            item3={item3}
            item4={item4}
            item5={item5}
            open={open}
          />
          <ItemOptions
            outfit={outfit}
            item1={item1}
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
