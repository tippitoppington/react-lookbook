import React, { useState } from 'react';
import Outfit from '../components/Outfit';
import { outfits } from '../data/outfits';
import LooksImages from '../components/LooksImages';

const Lookbook = () => {
  const [outfitId, setOutfitId] = useState('01');
  const [outfit, setOutfit] = useState(
    outfits.filter((o) => o.id === outfitId)
  );
  //find the option object
  //items are the option object of o
  const [item1, setItem1] = useState(outfit[0].item_01.opt1);
  const [item2, setItem2] = useState(outfit[0].item_02.opt1);
  const [item3, setItem3] = useState(outfit[0].item_03.opt1);
  const [item4, setItem4] = useState(outfit[0].item_04.opt1);
  const [item5, setItem5] = useState(outfit[0].item_05.opt1);

  const updateItems = () => {
    setItem1(outfit[0].item_01.opt1);
    setItem2(outfit[0].item_02.opt1);
    setItem3(outfit[0].item_03.opt1);
    setItem4(outfit[0].item_04.opt1);
    setItem5(outfit[0].item_05.opt1);
    console.log(
      `Outfit.js: after image click, inside updateItems function, item1 = ${item1.src} ${outfit[0].id}`
    );
  };

  const changeLook = (outfit_id) => {
    setOutfitId(outfit_id);
    setOutfit(outfits.filter((o) => o.id === outfitId));
    updateItems();
  };

  return (
    <>
      <Outfit
        outfit={outfit}
        item1={item1}
        item2={item2}
        item3={item3}
        item4={item4}
        item5={item5}
      />
      <LooksImages changeLook={changeLook} />
    </>
  );
};

export default Lookbook;
