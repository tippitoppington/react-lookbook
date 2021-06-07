import React from 'react';
import Product from './Product';
import { inspo } from '../data/inspo-data';

const Trend = ({ id }) => {
  const trend = inspo.filter((i) => i.id === id);
  let products = trend[0].products;

  return (
    <>
      {trend.map((t) => (
        <div className='trend-block'>
          <Product products={products} />
        </div>
      ))}
    </>
  );
};

export default Trend;
