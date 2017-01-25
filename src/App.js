// import 'flatpickr/dist/flatpickr.material_green.min.css'

import Flatpickr from 'react-flatpickr';
import {sv} from "./sv.js";

import React from 'react';
import logo from './logo.svg';
import './App.css';


const App = () => {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>HELLO</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Flatpickr options={{minDate: '2016-11-01',maxDate: '2017-03-01',locale: sv}} onChange={v => console.info(v)} />
      </div>
    );

}

export default App;
