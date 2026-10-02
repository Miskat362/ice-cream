import React from 'react';
import classes from './item.module.css';
import {countBy} from 'lodash';

const Item = ({ name, add, remove, scoops = {} }) => {
  const scoopCount = countBy(scoops);
  return (
    <li className={classes.item}>
    <span>{name}</span>
    <span className={classes.quantity}>{scoopCount[name] || 0}</span>
    <div className="right">
        <button type="button" className={classes.plus + ' rounded'} onClick={() => add(name)}>+</button>
        <button type="button" className={classes.minus + ' rounded'} onClick={() => remove(name)}>-</button>
    </div>
    </li>
  )
}

export default Item;