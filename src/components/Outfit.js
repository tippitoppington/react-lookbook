import React from 'react';
import ItemOptions from './ItemOptions';
import ItemList from './ItemList';
import { outfits } from '../data/outfits';
import '../css/main.css';
import '../css/outfits_features.css';

const Outfit = ({
  selectedOutfit,
  handleCategory,
  itemCategory,
  handleOption,
  open,
  visible,
  resetOutfit,
}) => {
  let outfit = outfits.filter((o) => o.id === selectedOutfit.id);

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
          <button class='reset' onClick={resetOutfit(outfit[0].id)}>
            Reset
          </button>
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
