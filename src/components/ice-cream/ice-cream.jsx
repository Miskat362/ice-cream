import React from 'react';
import classes from './ice-cream.module.css';
import Scoop from './scoop/scoop';

const IceCream = () => {
  return (
        <div>
            <div className={classes.icecream}>
              <p className={classes.cone}></p>
              {/* <!-- <p>Please start adding scoops</p> --> */}
              {/* scoops */}
              <div className={classes.cherry}></div>
            </div>
        </div>
  );
};

export default IceCream;