import React, { useState } from 'react';
import Outfit from '../components/Outfit';
import LooksImages from '../components/LooksImages';

const Lookbook = () => {
  const [OutfitId, setOutfitId] = useState('02');

  return (
    <>
      <div className='section-header'>
        <h2>Find Your Style</h2>
      </div>
      <Outfit id={OutfitId} />
      <LooksImages changeOutfit={setOutfitId} />
    </>
  );
};

export default Lookbook;
