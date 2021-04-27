import React, { useState } from 'react';
import Outfit from '../components/Outfit';
import LooksImages from '../components/LooksImages';

const Lookbook = () => {
  const [OutfitId, setOutfitId] = useState('01');

  return (
    <>
      <Outfit id={OutfitId} />
      <LooksImages changeOutfit={setOutfitId} />
    </>
  );
};

export default Lookbook;
