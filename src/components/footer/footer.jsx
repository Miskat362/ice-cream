import React from 'react';
import classes from './footer.module.css';

const Footer = () => {
  return (
    <footer>
        <div className={['container', classes.container].join(' ')}>
          <div>
            Copyright &copy;2026. All rights reserved.
          </div>
          <div className="textRight">
            Built with <span className={['red', classes.red].join(' ')}>&hearts;</span> by
            <a href="https://reactjs.org/docs/create-a-new-react-app.html" target="_blank" rel="noopener noreferrer">
              Create React App
            </a>
          </div>
        </div>
      </footer>
  )
}

export default Footer;