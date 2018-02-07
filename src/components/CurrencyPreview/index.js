import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const CurrencyPreview = props => (
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
            <span className={styles.currencyPreviewTableText}>
              {props.previewData && props.previewData.data ? props.previewData.data : null}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

CurrencyPreview.propTypes = {
  previewData: PropTypes.object
};

export default CurrencyPreview;
