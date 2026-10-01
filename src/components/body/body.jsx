import React from 'react';
import classes from './body.module.css';
import IceCreamBuilder from '../../containers/iceCreamBuilder/iceCreamBuilder';

const Body = () => {
  return (
    <div className={classes.body}>
      <IceCreamBuilder />
    </div>
  )
}

export default Body;