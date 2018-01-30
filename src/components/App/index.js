import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { loadTest, saveTest } from './actions';

class App extends Component {
  static state = {}

  handleClick = (ev) => {
    console.log('ev -- ', ev);
    this.props.loadTest({ testData: 666 });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>click me </button>
        <h1>{this.props.user}</h1>
      </div>);
  }
}

App.propTypes = {
  user: PropTypes.object,
  loadTest: PropTypes.func,
};

const mapStateToProps = (state, props) => ({
  user: state.testData
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    loadTest: data => dispatch(loadTest(data)),
    saveTest: data => dispatch(saveTest(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
