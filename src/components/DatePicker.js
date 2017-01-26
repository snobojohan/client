import React, { Component, PropTypes } from 'react';
import Flatpickr from 'flatpickr';
import {sv} from "./sv.js";
import './flatpickr.css';

class DatePicker extends Component {

  static propTypes = {
    options: PropTypes.object,
  }

  static defaultProps = {
    options: { locale: sv, inline: true }
  }

  componentWillReceiveProps(props) {

    console.log("componentWillReceiveProps ",props);

    if (props.value) {

      this.flatpickr.setDate(props.value)

    }

  }

  componentDidMount() {

    const options = {
        ...this.props.options,
        onChange: this.props.onChange,
        defaultDate: this.props.defaultDate
    }

    console.log("componentDidMount ",this.props);

    if(this.props.expanded) {
      this.flatpickr = new Flatpickr(this.node, options)
    }

  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate ",this.props,prevProps,prevState);

    const options = {
        ...this.props.options,
        onChange: this.props.onChange,
        defaultDate: this.props.defaultDate
    }

    console.log("this.flatpickr -> ",this.flatpickr);

    if(this.props.expanded) {
      this.flatpickr = new Flatpickr(this.node, options)
    } else if (this.flatpickr){
      this.flatpickr.destroy();
    }
  }

  render() {
    // ignore onChange, options
    // eslint-disable-next-line no-unused-vars
    const { onChange, options, defaultValue, value, expanded, defaultDate, ...props } = this.props

    if(!expanded){
      return false;
    }

    return (
      <input {...props} defaultValue={defaultValue || value} ref={node => this.node = node} />
    )
  }
}

export default DatePicker
