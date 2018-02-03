import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { loadTest, saveTest } from './actions';

import styles from './styles.scss';

class App extends Component {
  static state = {}

  handleClick = (ev) => {
    console.log('ev -- ', ev);
    this.props.loadTest({ testData: 666 });
  }

  render() {
    return (
      <div className={styles.test}>
        <button onClick={this.handleClick}>click me </button>
        <h1>{this.props.testVal}</h1>
      </div>);
  }
}

App.propTypes = {
  testVal: PropTypes.any,
  loadTest: PropTypes.func,
};

const mapStateToProps = (state, props) => ({
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
