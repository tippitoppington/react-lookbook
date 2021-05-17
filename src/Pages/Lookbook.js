import React, { useState, useEffect } from 'react';
import Outfit from '../components/Outfit';
import LooksImages from '../components/LooksImages';
import { outfits } from '../data/outfits';
const Lookbook = () => {
  const [outfitId, setOutfitId] = useState('01');
  const [outfit, setOutfit] = useState(
    outfits.filter((o) => o.id === outfitId)
  );
  const [itemCategory, setItemCategory] = useState('item_01');
  const [open, setOpen] = useState('false');
  const [visible, setVisible] = useState('false');

  // console.log(`Lookbook.js, outfit[0].style= ${outfit[0].style}`);
  //here, you are loopping through an array
  const [item1, setItem1] = useState(
    outfit[0].item_01.filter((i) => i.opt === '01_opt_1')
  );
  const [item2, setItem2] = useState(
    outfit[0].item_02.filter((i) => i.opt === '02_opt_1')
  );
  const [item3, setItem3] = useState(
    outfit[0].item_03.filter((i) => i.opt === '03_opt_1')
  );
  const [item4, setItem4] = useState(
    outfit[0].item_04.filter((i) => i.opt === '04_opt_1')
  );
  const [item5, setItem5] = useState(
    outfit[0].item_05.filter((i) => i.opt === '05_opt_1')
  );

  useEffect(() => {
    setItem1(outfit[0].item_01.filter((i) => i.opt === '01_opt_1'));
    setItem2(outfit[0].item_02.filter((i) => i.opt === '02_opt_1'));
    setItem3(outfit[0].item_03.filter((i) => i.opt === '03_opt_1'));
    setItem4(outfit[0].item_04.filter((i) => i.opt === '04_opt_1'));
    setItem5(outfit[0].item_05.filter((i) => i.opt === '05_opt_1'));
  }, [outfit]); // pass `value` as a dependency

  const showItem = (item) => {
    setItemCategory(item);
    setOpen('true');
    setVisible('true');
  };
  // console.log(
  //   `Lookbook.js....itemCategory = ${itemCategory}, item2[0].src  =  ${item2[0].src}`
  // );
  const handleOption = (itemCategory, itemOpt) => {
    console.log(
      `Lookbook.js....itemCategory = ${itemCategory}, itemOpt =${itemOpt}, item2[0].src  =  ${item2[0].src}`
    );
    switch (itemCategory) {
      case 'item_01':
        setItem1(outfit[0].item_01.filter((i) => i.opt === itemOpt));
        break;
      case 'item_02':
        setItem2(outfit[0].item_02.filter((i) => i.opt === itemOpt));
        break;
      case 'item_03':
        setItem3(outfit[0].item_03.filter((i) => i.opt === itemOpt));
        break;
      case 'item_04':
        setItem4(outfit[0].item_04.filter((i) => i.opt === itemOpt));
        break;
      case 'item_05':
        setItem5(outfit[0].item_05.filter((i) => i.opt === itemOpt));
        break;
      default:
        alert("I don't know such values");
    }
  };

  const changeOutfit = (id) => {
    setOutfitId(id);
    setOutfit(outfits.filter((o) => o.id === id));
  };
  // console.log(`Lookbook.js, item1[0].src = ${item1[0].src}`);
  return (
    <>
      <div className='section-header'>
        <h2>Find Your Style</h2>
      </div>
      <Outfit
        outfit={outfit}
        item1={item1}
        item2={item2}
        item3={item3}
        item4={item4}
        item5={item5}
        showItem={showItem}
        handleOption={handleOption}
        open={open}
        visible={visible}
        itemCategory={itemCategory}
      />
      <LooksImages changeOutfit={changeOutfit} />
    </>
  );
};

export default Lookbook;
