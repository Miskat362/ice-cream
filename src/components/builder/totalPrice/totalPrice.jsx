import React from 'react';
import classes from './totalPrice.module.css';

const TotalPrice = () => {
  return (
    <div className={classes.totalPrice}>
        <div>Total Price</div>
        <div>$0.00</div>
    </div>
  )
}

export default TotalPrice;