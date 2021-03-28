import React from 'react';
import { useParams } from 'react-router-dom';
import classes from './DetailView.module.css';

const DetailView = ({ quakeData }) => {
    let { id } = useParams();
    let { properties } = quakeData.features[id];
    return (<>
        <div className={classes.detailViewClass}>
            <div className={classes.textCenter}>{properties.title}</div>
            <div className={classes.flexContainer}>
                <div className={classes.label}>Title</div>
                <div className={classes.propertyValue}>{properties.title}</div>
            </div>
            <div className={classes.flexContainer}>
                <div className={classes.label}>Magnitude</div>
                <div className={classes.propertyValue}>{properties.mag}</div>
            </div>
            <div className={classes.flexContainer}>
                <div className={classes.label}>Time</div>
                <div className={classes.propertyValue}>{properties.formattedTime}</div>
            </div>
            <div className={classes.flexContainer}>
                <div className={classes.label}>Status</div>
                <div className={classes.propertyValue}>{properties.status}</div>
            </div>
            <div className={classes.flexContainer}>
                <div className={classes.label}>Tsunami</div>
                <div className={classes.propertyValue}>{properties.tsunami}</div>
            </div>
            <div className={classes.flexContainer}>
                <div className={classes.label}>Type</div>
                <div className={classes.propertyValue}>{properties.type}</div>
            </div>
        </div>
    </>);
}

export default DetailView;