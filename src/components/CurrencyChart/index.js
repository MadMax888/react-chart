import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import styles from './styles.scss';


const margin = {
  top: 20, right: 30, left: 20, bottom: 10
};

const convertData = arr => arr.map(item => ({
  label: new Date(item.timestamp).toLocaleTimeString('en-GB'),
  name: item.timestamp,
  amt: item.data,
  pv: item.data,
}));

class CurrencyChart extends Component {
  state = {
    dateRange: {
      max: new Date().getTime() + 300000,
      min: new Date().getTime()
    }
  }

  render() {
    return (
      <div className={styles.currencyChart}>
        <ResponsiveContainer width='100%' height={400}>
          <LineChart
            data={convertData(this.props.data || null)}
            margin={margin}
          >
            <XAxis
              dataKey='label'
              // type='number'
              height={60}
              domain={[() => this.state.dateRange.min, () => this.state.dateRange.max]}
            />
            <YAxis
              dataKey='amt'
              type='number'
              domain={[dataMin => (Math.abs(dataMin - 5)), dataMax => (dataMax + 5)]}
            />
            <CartesianGrid strokeDasharray='3 3' />
            <Tooltip />
            <Legend />
            <Line type='monotone' dataKey='pv' stroke='#8884d8' />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

CurrencyChart.propTypes = {
  data: PropTypes.array,
};

export default CurrencyChart;

