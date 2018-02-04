import React from 'react';
// import PropTypes from 'prop-types';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import styles from './styles.scss';

const data = [ // testdata
  {
    name: 'Page B', uv: 3000, pv: 1398, amt: 2210
  },
  {
    name: 'Page A', uv: 4000, pv: 2400, amt: 2400
  },
  {
    name: 'Page C', uv: 2000, pv: 9800, amt: 2290
  },
  {
    name: 'Page D', uv: 2780, pv: 3908, amt: 2000
  },
  {
    name: 'Page E', uv: 1890, pv: 4800, amt: 2181
  },
  {
    name: 'Page F', uv: 2390, pv: 3800, amt: 2500
  },
  {
    name: 'Page G', uv: 3490, pv: 4300, amt: 2100
  },
];
const margin = {
  top: 20, right: 30, left: 20, bottom: 10
};

const CurrencyChart = () => (
  <div className={styles.currencyChart}>
    <ResponsiveContainer width='100%' height={400}>
      <LineChart
        data={data}
        margin={margin}
      >
        <XAxis dataKey='name' height={60} />
        <YAxis />
        <CartesianGrid strokeDasharray='3 3' />
        <Tooltip />
        <Legend />
        <Line type='monotone' dataKey='pv' stroke='#8884d8' />
        <Line type='monotone' dataKey='uv' stroke='#82ca9d' />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default CurrencyChart;

