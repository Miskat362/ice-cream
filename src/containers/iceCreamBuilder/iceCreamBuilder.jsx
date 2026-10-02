import React, { Component } from 'react';
import classes from './iceCreamBuilder.module.css';
import IceCream from '../../components/ice-cream/ice-cream';
import Builder from '../../components/builder/builder';

export default class IceCreamBuilder extends Component {
  state = {
    items: {
      vanilla: 45,
      chocolate: 50,
      strawberry: 60,
      lemon:35,
      orange: 40,
    },
    scoops: [],
    totalPrice: 0,
  };

  addScoop = (scoop) => {
    const { scoops, items } = this.state;
    const workingScoops = [...scoops];
    workingScoops.push(scoop);
    this.setState((prevState) => { 
      return {
        scoops: workingScoops,
        totalPrice: prevState.totalPrice + items[scoop]
      }
    });
  }

    removeScoop = (scoop) => {
    const { scoops, items } = this.state;
    const workingScoops = [...scoops];
    const scoopIndex = workingScoops.indexOf(scoop);
    workingScoops.splice(scoopIndex, 1);
    this.setState((prevState) => {
      return {
        scoops: workingScoops,
        totalPrice: prevState.totalPrice - items[scoop]
      }
    });
  }

  render() {
    const { items, totalPrice, scoops } = this.state;

    return (
      <div className={'container ' + classes.iceCreamBuilder}>
        <IceCream scoops={scoops} />
        <Builder items={items} price={totalPrice} add={this.addScoop} remove={this.removeScoop} />
      </div>
    );
  }
}
