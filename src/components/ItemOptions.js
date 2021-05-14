import React from 'react';
import '../css/main.css';
import '../css/outfits_features.css';

const ItemOptions = ({
  outfit,
  item1,
  itemCategory,
  handleOption,
  visible,
}) => {
  //get array of options from itemCategory(ex: 'item_01")
  const itemCatObj = outfit[0][itemCategory];

  return (
    <>
      <div
        className={
          visible === 'true'
            ? 'item-opts-container visible'
            : 'item-opts-container'
        }>
        <div className='panel-header sticky'>
          <h4>Change item</h4>
        </div>
        {itemCatObj.map((opt, key) => (
          <div className='item-opt' key={key}>
            <img
              src={opt.src}
              alt='an alternate item'
              onClick={() => handleOption(itemCategory, opt)}
            />
            <div className='item-info'>
              <p>Hello</p>
              <p>{opt.name}</p>
              <p>{opt.price}</p>
              <p>View Details</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ItemOptions;
