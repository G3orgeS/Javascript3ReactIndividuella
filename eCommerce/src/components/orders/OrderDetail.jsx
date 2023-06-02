import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './od.scss';
import { getOrderById } from '../../store/orders/singleOrderSlice';
import { useParams } from 'react-router-dom';

const OrderDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrderById(id));
  }, [dispatch, id]);

  const { order } = useSelector(state => state.singleOrder);

  if (!order) {
    return <div>Det</div>;
  }

  return (
    <div>
      <h2>Order Detail for Order ID: {id}</h2>
      {/* Display order details here */}
    </div>
  );
};

export default OrderDetails;