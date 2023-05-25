import React, { useState } from 'react';
import './details.scss';
import { useDispatch, useSelector } from 'react-redux';

const Details = ({ product }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <div className='details-wrapper'>
        <div className='details-container'>
          <div className='img-wrapper'>
            <div className='largeProductImgContainer'>
              <img className='largeProductImg' src={product.imageURL[0]} alt="Product image" srcSet="" />
            </div>
            <div className='smallImg-wrapper'>
            </div>
            <div className='detailsLine'></div>
            <p className='productDetailsPrice'>Pris: {product.price} kr</p>
            <p className='productDetailsCategory'>Category: {product.category}</p>
          </div>
          <div className='text-wrapper'>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <div className='detailsLine'></div>
            <div className='reviews'>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
