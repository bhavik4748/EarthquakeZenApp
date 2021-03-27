import React from 'react';
import classes from './Header.module.css';

const header = () => {
    return (
        <div className={classes.headerClass}>
            <div style={{'flexGrow':'1'}}>
                <img src="https://www.realtor.com/realtor-com.png" alt="RealtorLogo" className={classes.logoImg}></img>
            </div>
            <div className={classes.title} style={{'flexGrow':'4', 'textAlign':'center'}}>
                Earthquake Zen Garden
            </div>
            <div style={{'flexGrow':'1'}} className={classes.welcomeMsg}>
                <a href="javascript:void(0)">Welcome Sally</a>
            </div>
        </div>

    )
}

export default header;