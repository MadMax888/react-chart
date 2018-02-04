import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CurrencyPreview from '../CurrencyPreview';
import OrderForm from '../OrderForm';
import CurrencyChart from '../CurrencyChart';
import TradesTable from '../TradesTable';

import { loadTest, saveTest } from './actions';


import styles from './styles.scss';

class App extends Component {
  static state = {}

  handleClick = (ev) => {
    console.log('event -- ', ev);
    this.props.loadTest({ testData: this.props.testVal });
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
              {/* <div className={styles.test}>
                <button onClick={this.handleClick}>click me </button>
                <h1>{this.props.testVal}</h1>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  testVal: PropTypes.any,
  loadTest: PropTypes.func,
};

const mapStateToProps = state => ({
  testVal: state.app.testData
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    loadTest: data => dispatch(loadTest(data)),
    saveTest: data => dispatch(saveTest(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
