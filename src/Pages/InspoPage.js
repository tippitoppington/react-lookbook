import React from 'react';
import Trend from '../components/Trend';
import { inspo } from '../data/inspo-data';
import '../css/inspo-style.css';

const InspoPage = () => {
  //loop through the inspo data and create a component according to the "type".
  const inspoItems = inspo.map((i) => i.id);

  return (
    <>
      <div className='content'>
        <section className='grid'>
          {inspoItems.map((item, key) => (
            <Trend key={key} id={item} />
          ))}
        </section>
      </div>
      {/* <div className='cta-container'></div> */}
    </>
  );
};

export default InspoPage;
