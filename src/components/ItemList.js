import React from 'react';
import '../css/main.css';
import '../css/outfits_features.css';

const ItemList = ({
  outfit,
  toggleItem,
  item1,
  item2,
  item3,
  item4,
  item5,
  open,
}) => {
  const o = outfit[0];

  //handle click on item in list that adds class to shift the itemList div,

  return (
    <>
      <div
        className={open === 'true' ? 'item_list open' : 'item_list'}
        style={o.style}>
        <div className='tall_group'>
          {item1.map((chosenItem, key) => (
            <div className='item' key={key}>
              <img
                src={chosenItem.src}
                alt='an awesome first item'
                onClick={() => toggleItem('item_01')}
              />
              <p>{chosenItem.price}</p>
            </div>
          ))}

          {item2.map((chosenItem, key) => (
            <div className='item' key={key}>
              <img
                src={chosenItem.src}
                alt='an awesome second item'
                onClick={() => toggleItem('item_02')}
              />
              <p>{chosenItem.price}</p>
            </div>
          ))}
        </div>

        <div className='short_group'>
          {item3.map((chosenItem, key) => (
            <div className='item' key={key}>
              <img
                src={chosenItem.src}
                alt='an awesome third item'
                className='item'
                onClick={() => toggleItem('item_03')}
              />
              <p>{chosenItem.price}</p>
            </div>
          ))}
          {item4.map((chosenItem, key) => (
            <div className='item' key={key}>
              <img
                src={chosenItem.src}
                alt='an awesome fourth item'
                className='item'
                onClick={() => toggleItem('item_04')}
              />
              <p>{chosenItem.price}</p>
            </div>
          ))}
          {item5.map((chosenItem, key) => (
            <div className='item' key={key}>
              <img
                src={chosenItem.src}
                alt='an awesome fifth item'
                className='item'
                onClick={() => toggleItem('item_05')}
              />
              <p>{chosenItem.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ItemList;
