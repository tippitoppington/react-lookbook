import React from 'react';

const Product = ({ products }) => {
  return (
    <>
      {products.map((p) => (
        <div className='item-container'>
          <img
            src={p.image[0]}
            alt={p.productName}
            loading='lazy'
            decoding='async'
          />
          <p className='brand'>{p.brand}</p>
          <p className='name'>{p.productName}</p>
          <p className='price'>{p.price}</p>
        </div>
      ))}
    </>
  );
};

export default Product;
