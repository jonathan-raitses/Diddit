import React from 'react';
import Navbar from './../components/navbar/Navbar.jsx';
import { connect } from 'react-redux';
import handleSearchChange from '../actions/navbarAction.js';

// using react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

var mapStateToProps = (state) => ({ });

var mapDispatchToProps = (dispatch) => ({
  handleSearchInputChange: (q) => {
    dispatch(handleSearchChange(q));
  }
});

var navbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default navbarContainer;