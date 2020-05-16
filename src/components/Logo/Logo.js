import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo}>
        {/* <img src="../../assets/images/burger-logo.png" /> NOT WORKING! */}
        <img src={burgerLogo} alt="MyBurger" />
    </div>
);

export default logo;