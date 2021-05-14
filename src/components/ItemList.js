import React from 'react';
import '../css/main.css';
import '../css/outfits_features.css';

const ItemList = ({
  outfit,
  showItem,
  item1,
  item2,
  item3,
  item4,
  item5,
  open,
}) => {
  const o = outfit[0];

  //handle click on item in list that adds class to shift the itemList div,
  //initally need item1[0] to render the item List but then when you click an option, but after {opt} is passed, the list needs just item1
  //so take out the [0] and you won't see default images but clicking an option works
  return (
    <>
      <div
        className={open === 'true' ? 'item_list open' : 'item_list'}
        style={o.style}>
        <div className='tall_group'>
          {
            <div className='item'>
              <img
                src={item1.src}
                alt='an awesome first item'
                onClick={() => showItem('item_01')}
              />
              <p>{item1.price}</p>
            </div>
          }

          <div className='item'>
            <img
              src={item2.src}
              alt='an awesome second item'
              onClick={() => showItem('item_02')}
            />
            <p>{item2.price}</p>
          </div>
        </div>

        <div className='short_group'>
          <div className='item'>
            <img
              src={item3.src}
              alt='an awesome third item'
              className='item'
              onClick={() => showItem('item_03')}
            />
            <p>{item3.price}</p>
          </div>

          <div className='item'>
            <img
              src={item4.src}
              alt='an awesome fourth item'
              className='item'
              onClick={() => showItem('item_04')}
            />
            <p>{item4.price}</p>
          </div>

          <div className='item'>
            <img
              src={item5.src}
              alt='an awesome fifth item'
              className='item'
              onClick={() => showItem('item_05')}
            />
            <p>{item5.price}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemList;
