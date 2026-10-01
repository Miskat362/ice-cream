import React from 'react';
import classes from './builder.module.css';
import Items from './items/items';
import TotalPrice from './totalPrice/totalPrice';
import Modal from './modal/modal';

const Builder = () => {
  return (
    <div>
        <div className={classes.builder}>
            <h3>Build your own Ice Cream Sundae</h3>
            <Items />
            <TotalPrice />
            <button type="button" className={classes.order + ' rounded'}>
                Add to Cart
            </button>
        </div>
        <Modal>
          hello modal
        </Modal>
    </div>
  )
}

export default Builder;