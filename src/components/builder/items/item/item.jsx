import React from 'react';
import classes from './item.module.css';

const Item = () => {
  return (
    <li className={classes.item}>
    <span>Vanilla</span>
    <span className={classes.quantity}>2</span>
    <div className="right">
        <button type="button" className={classes.plus + ' rounded'}>+</button>
        <button type="button" className={classes.minus + ' rounded'}>-</button>
    </div>
    </li>
  )
}

export default Item;