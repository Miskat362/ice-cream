import React from 'react';
import classes from './ice-cream.module.css';
import Scoop from './scoop/scoop';

const IceCream = ({ scoops }) => {
  //const flavors = Object.keys(items);

  return (
        <div>
            <div className={classes.icecream}>
              <p className={classes.cone}></p>
              {/* <!-- <p>Please start adding scoops</p> --> */}
              
              {scoops.map((scoop) => (
                <Scoop scoop={scoop} key={`${scoop}${Math.random()}`} />
              ))}
              
              <div className={classes.cherry}></div>
            </div>
        </div>
  );
};

export default IceCream;