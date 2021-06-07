import React from 'react';
import ItemOptions from './ItemOptions';

import ItemList from './ItemList';
import { outfits } from '../data/outfits-data';

import '../css/outfits_features.css';

const Outfit = ({
  selectedOutfit,
  handleCategory,
  itemCategory,
  handleOption,
  open,
  visible,
  handleReset,
  reset01,
}) => {
  let outfit = outfits.filter((o) => o.id === selectedOutfit.id);
  let reset = selectedOutfit.reset;
  const hideTooltip = () => {
    let tooltip = document.querySelector('.tooltip');
    tooltip.classList.add('hide');
  };

  return (
    <>
      <div className='look' style={outfit[0].style} onClick={hideTooltip}>
        <div className='desc-container'>
          <div className='look-description'>
            <h4>{outfit[0].title}</h4>
            <ul>
              <li>{outfit[0].text1}</li>
              <li>{outfit[0].text2}</li>
              <li>{outfit[0].text3}</li>
            </ul>
            <button
              className={reset === 'true' ? 'resetVisible' : 'resetHidden'}
              onClick={(e) => handleReset(selectedOutfit.id)}>
              Reset
            </button>
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
          selectedOutfit={selectedOutfit}
          handleCategory={handleCategory}
          open={open}
        />
        <ItemOptions
          selectedOutfit={selectedOutfit}
          itemCategory={itemCategory}
          visible={visible}
          handleOption={handleOption}
        />
      </div>
    </>
  );
};

export default Outfit;
