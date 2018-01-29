import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';


// import { Route, Switch, Redirect } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import loadAsync from '../loadAsync';
// // import Auth from '../Auth';
// import Home from '../Home';

// const AuthAsync = loadAsync('Auth');


const App = props => (<h1>APP : !!!!!</h1>);

App.propTypes = {
  state: PropTypes.object,
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(App);
