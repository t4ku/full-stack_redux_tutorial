import React from 'react';
import {List} from 'immutable';

const pair = ['Trainspotting','28 Days Later'];

export default React.createClass({
  render: function(){
    // props.chilren is automatically set by router.
    return React.cloneElement(this.props.children, { pair: pair});
  }
})
