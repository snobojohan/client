import React, { Component, PropTypes } from 'react';
import DatePicker from './DatePicker.js';

class Toggle extends Component {
  constructor() {
      super();

      this.state = {
          expanded: false
      };

      this.navClose = this.navClose.bind(this);
      this.navOpen = this.navOpen.bind(this);
      this.expanded = false;
      this.chosenDate = new Date().toString();
  }

  navClose(e) {
      e.stopPropagation();
      this.setState({
          expanded: false
      });
  }

  navOpen() {
      this.setState({
          expanded: true
      });
  }

  setChosenDate(str) {
    console.log(str)
    this.chosenDate = str;
  }

  render() {

      return(
          <div>
                  <button onClick={this.navOpen}>Open</button>
                  <button onClick={this.navClose}>Close</button>
                  <DatePicker expanded={this.state.expanded} defaultDate={this.chosenDate} onChange={(_, str) => this.setChosenDate(str)} />
          </div>
      );
  }
};
export default Toggle
