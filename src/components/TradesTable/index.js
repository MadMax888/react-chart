import React from 'react';
// import PropTypes from 'prop-types';

import styles from './styles.scss';

const TradesTable = () => (
  <div className={styles.tradesTableBlock}>
    <table className='table table-sm'>
      <thead className=''>
        <tr>
          <th scope='col'>{}</th>
          <th scope='col'>TIME</th>
          <th scope='col'>PRICE</th>
          <th scope='col'>AMOUNT</th>
        </tr>
      </thead>
      <tbody>
        <tr className='alert alert-success'>
          <th scope='row'>
            <span><i className='fas fa-chevron-up' /></span>
          </th>
          <td>12:57:42</td>
          <td>99900</td>
          <td>0.23321</td>
        </tr>
        <tr className='alert alert-danger'>
          <th scope='row'>
            <span><i className='fas fa-chevron-down' /></span>
          </th>
          <td>12:57:42</td>
          <td>99900</td>
          <td>0.23321</td>
        </tr>
        <tr>
          <th scope='row'>
            <span><i className='fas fa-chevron-up' /></span>
          </th>
          <td>12:57:42</td>
          <td>99900</td>
          <td>0.23321</td>
        </tr>
        <tr>
          <th scope='row'>
            <span><i className='fas fa-chevron-down' /></span>
          </th>
          <td>12:57:42</td>
          <td>99900</td>
          <td>0.23321</td>
        </tr>
        <tr>
          <th scope='row'>
            <span><i className='fas fa-chevron-up' /></span>
          </th>
          <td>12:57:42</td>
          <td>99900</td>
          <td>0.23321</td>
        </tr>
        <tr>
          <th scope='row'>
            <span><i className='fas fa-chevron-down' /></span>
          </th>
          <td>12:57:42</td>
          <td>99900</td>
          <td>0.23321</td>
        </tr>
        <tr>
          <th scope='row'>
            <span><i className='fas fa-chevron-up' /></span>
          </th>
          <td>12:57:42</td>
          <td>99900</td>
          <td>0.23321</td>
        </tr>
        <tr>
          <th scope='row'>
            <span><i className='fas fa-chevron-down' /></span>
          </th>
          <td>12:57:42</td>
          <td>99900</td>
          <td>0.23321</td>
        </tr>
        <tr>
          <th scope='row'>
            <span><i className='fas fa-chevron-up' /></span>
          </th>
          <td>12:57:42</td>
          <td>99900</td>
          <td>0.23321</td>
        </tr>
        <tr>
          <th scope='row'>
            <span><i className='fas fa-chevron-down' /></span>
          </th>
          <td>12:57:42</td>
          <td>99900</td>
          <td>0.23321</td>
        </tr>
      </tbody>
    </table>

  </div>
);

export default TradesTable;
