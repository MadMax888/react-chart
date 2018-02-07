import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

// const getRandomArbitrary = (min, max) => (Math.random() * (max - min)) + min;

const getRows = data => data.map((item, i) => {
  const type = item.data.amount < 0;
  const trClass = `alert ${type ? 'alert-danger' : 'alert-success'}`;
  const chevronClass = `fas ${type ? 'fa-chevron-down' : 'fa-chevron-up'}`;

  return (
    <tr key={i} className={trClass}>
      <th scope='col'><span><i className={chevronClass} /></span></th>
      <th scope='col'>{new Date(item.timestamp).toLocaleTimeString('en-GB')}</th>
      <th scope='col'>{item.market}</th>
      <th scope='col'>{item.data.price}</th>
      <th scope='col'>{Math.abs(item.data.amount)}</th>
    </tr>
  );
});

const TradesTable = props => (
  <div className={styles.tradesTableBlock}>
    <table className='table table-sm'>
      <thead className=''>
        <tr>
          <th scope='col'>{}</th>
          <th scope='col'>TIME</th>
          <th scope='col'>MARKET</th>
          <th scope='col'>PRICE</th>
          <th scope='col'>AMOUNT</th>
        </tr>
      </thead>
      <tbody>
        {getRows(props.data || null)}
      </tbody>
    </table>

  </div>
);

TradesTable.propTypes = {
  data: PropTypes.array
};


export default TradesTable;
