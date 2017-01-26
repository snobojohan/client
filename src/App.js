// import 'flatpickr/dist/flatpickr.material_green.min.css'
import React from 'react';
// import React, { Component, PropTypes } from 'react';
import logo from './logo.svg';

import Toggle from './components/Toggle.js';


import './App.css';

const App = () => {

    // let expanded = false;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>HELLO</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Toggle />
      </div>
    );

}

export default App;
