import React, { useState, useEffect } from 'react';
import Outfit from '../components/Outfit';
import LooksImages from '../components/LooksImages';

const Lookbook = () => {
  //01 Create default array of objects for each of the outfits useState hooks
  //02 Set the items 1-5 to default values
  const initialState = {
    item_01: '01_opt_1',
    item_02: '02_opt_1',
    item_03: '03_opt_1',
    item_04: '04_opt_1',
    item_05: '05_opt_1',
  };

  const [outfit1, setOutfit1] = useState({
    ...initialState,
    id: '01',
  });
  const [outfit2, setOutfit2] = useState({
    ...initialState,
    id: '02',
  });
  const [outfit3, setOutfit3] = useState({
    ...initialState,
    id: '03',
  });
  const [outfit4, setOutfit4] = useState({
    ...initialState,
    id: '04',
  });

  //03 Looks images set the id for which outfit to load and populate the list component, defaults to 01
  const [outfitId, setOutfitId] = useState('01');
  const [selectedOutfit, setSelectedOutfit] = useState(outfit1);
  const [open, setOpen] = useState('false');
  const [visible, setVisible] = useState('false');
  const [itemCategory, setItemCategory] = useState('item_01');

  //04 Use Effect changes the value of the outfit array that is passed to the Outfit component whenever outfitId is changed.
  useEffect(() => {
    switch (outfitId) {
      case '01':
        setSelectedOutfit(outfit1);
        break;
      case '02':
        setSelectedOutfit(outfit2);
        break;
      case '03':
        setSelectedOutfit(outfit3);
        break;
      case '04':
        setSelectedOutfit(outfit4);
        break;

      default:
        alert("I don't know such values");
    }
  }, [outfitId, outfit1, outfit2, outfit3, outfit4]);

  //05 ItemList component: items have click handlers that populate the options tray with item options

  const handleCategory = (item) => {
    setItemCategory(item);
    setOpen('true');
    setVisible('true');
  };

  //06 Use Effect checks item in outfit updates selected state whenever an item is changed.
  //08 Item Options: Options have click handlers that send outfit id, item and option to update the outfit array.
  const handleOption = (id, cat, opt) => {
    switch (id) {
      case '01':
        setOutfit1({ ...outfit1, [cat]: opt });

        break;
      case '02':
        setOutfit2({ ...outfit2, [cat]: opt });

        break;
      case '03':
        setOutfit3({ ...outfit3, [cat]: opt });

        break;
      case '04':
        setOutfit4({ ...outfit4, [cat]: opt });

        break;

      default:
        alert("I don't know such values");
    }
  };

  const resetOutfit = (id) => {
    console.log(id);
  };

  // console.log(`Lookbook.js, item1[0].src = ${item1[0].src}`);
  return (
    <>
      <div className='section-header'>
        <h2>Find Your Style</h2>
      </div>
      <Outfit
        selectedOutfit={selectedOutfit}
        open={open}
        visible={visible}
        handleCategory={handleCategory}
        handleOption={handleOption}
        itemCategory={itemCategory}
        resetOutfit={resetOutfit}
      />
      <LooksImages setOutfitId={setOutfitId} />
    </>
  );
};

export default Lookbook;
