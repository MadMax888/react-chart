import React from 'react';
// import PropTypes from 'prop-types';

import styles from './styles.scss';

const CurrencyPreview = () => (
  <div className={styles.currencyPreview}>
    <table className={styles.currencyPreviewTable}>
      <tbody>
        <tr>
          <td>
            <span className={styles.currencyPreviewTableIcon}>
              <i className='fab fa-btc' />
            </span>
          </td>
          <td>
            <span className={styles.currencyPreviewTableText}>BTC/USD</span>
          </td>
          <td>
            <span className={styles.currencyPreviewTableText}>10.100010</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default CurrencyPreview;
