import React from 'react';
import { NavLink } from "react-router-dom";
import classes from './Header.module.css';

const header = ({ siteInfo, toHomeRoute, toProfileRoute, profileData }) => {

    return (
        <div className={classes.headerClass}>
            <div style={{ 'flexGrow': '1' }}>
                <NavLink to={toHomeRoute}><img src={siteInfo.logoImage} alt="RealtorLogo" className={classes.logoImg}></img></NavLink>
            </div>
            <div className={classes.title} style={{ 'flexGrow': '4', 'textAlign': 'center' }}>
                {siteInfo.title}
            </div>
            <div style={{ 'flexGrow': '1' }} className={classes.welcomeMsg}>
                <NavLink to={toProfileRoute}>Welcome {profileData.firstName}</NavLink>
            </div>
        </div>

    )
}

export default header;