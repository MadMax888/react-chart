import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CurrencyPreview from '../CurrencyPreview';
import OrderForm from '../OrderForm';
import CurrencyChart from '../CurrencyChart';
import TradesTable from '../TradesTable';

import { loadTest, saveTest, startStream, stopStream } from './actions';


import styles from './styles.scss';

class App extends Component {
  static state = {}

  componentDidMount() {
    this.props.startStream();
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
              <CurrencyPreview />
              <OrderForm />
            </div>
            <div className='col-sm-9'>
              <CurrencyChart />
              <TradesTable />
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
};

const mapStateToProps = state => ({});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    loadTest: data => dispatch(loadTest(data)),
    saveTest: data => dispatch(saveTest(data)),
    startStream: () => dispatch(startStream()),
    stopStream: () => dispatch(stopStream()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
