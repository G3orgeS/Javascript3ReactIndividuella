import React, { useState } from 'react';
import './delete.scss';
import { useDispatch, useSelector } from 'react-redux';

const Delete = ({ product }) => {
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
          </div>
          <div className='text-wrapper'>
            <h3>{product.title}</h3>
            <div className='detailsLine'></div>
            <p>Obs. Om du klickar på knappen kommer produkten raderas från databasen</p>
            <div className='DeleteBtnWrap'>
            <button>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Delete;
