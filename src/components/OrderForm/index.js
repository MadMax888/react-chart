import React from 'react';
// import PropTypes from 'prop-types';

import styles from './styles.scss';

const OrderFrom = () => (
  <form className={styles.orderForm}>
    <div className='row mb-3'>
      <div className='col'>
        <label htmlFor='price'>Price usd</label>
        <input type='number' className='form-control' id='price' />
      </div>
      <div className='col'>
        <label htmlFor='amount'>Amout btc</label>
        <input type='number' className='form-control' id='amount' />
      </div>
    </div>
    <div className='row mb-2'>
      <div className='col'>
        <button type='submit' className='btn btn-success'>Buy</button>
      </div>
      <div className='col'>
        <button type='submit' className='btn btn-danger'>Sell</button>
      </div>
    </div>
  </form>
);

export default OrderFrom;
