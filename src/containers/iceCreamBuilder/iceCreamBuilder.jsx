import React, { Component } from 'react';
import classes from './iceCreamBuilder.module.css';
import IceCream from '../../components/ice-cream/ice-cream';
import Builder from '../../components/builder/builder';

export default class IceCreamBuilder extends Component {
  render() {
    return (
      <div className={'container ' + classes.iceCreamBuilder}>
        <IceCream />
        <Builder />
      </div>
    )
  }
}
