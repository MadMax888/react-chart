import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CurrencyPreview from '../CurrencyPreview';
import OrderForm from '../OrderForm';
import CurrencyChart from '../CurrencyChart';
import TradesTable from '../TradesTable';

import { startStream, stopStream } from './actions';


import styles from './styles.scss';

class App extends Component {
  static state = {} // eslint-disable-line object-curly-newline

  componentDidMount() {
    this.props.startStream();
  }

  getCurrentBTCprice() {
    const data = this.props.chartData;

    return data[data.length - 1];
  }

  getCurrentTrades() {
    const data = this.props.tradesData;

    return [...data.slice(data.length - 10, data.length)];
  }

  componentWillUmount() {
    this.props.stopStream();
  }
  render() {
    return (
      <div className={styles.wrapper}>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-sm-3'>
              <CurrencyPreview previewData={this.getCurrentBTCprice()} />
              <OrderForm />
            </div>
            <div className='col-sm-9'>
              <CurrencyChart />
              <TradesTable data={this.getCurrentTrades()} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  startStream: PropTypes.func,
  stopStream: PropTypes.func,
  chartData: PropTypes.array,
  tradesData: PropTypes.array,
};

const mapStateToProps = state => ({
  tradesData: state.app.tradesData,
  chartData: state.app.chartData,
}); // eslint-disable-line object-curly-newline

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    startStream: () => dispatch(startStream()),
    stopStream: () => dispatch(stopStream()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
