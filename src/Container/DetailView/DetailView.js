import React from 'react';
import { useParams } from 'react-router-dom';
import classes from './DetailView.module.css';

const DetailView = ({ quakeData }) => {
    let { id } = useParams();
    let obj = quakeData.features[id] ? quakeData.features[id] : null;
    if (obj && obj.properties)
        return (<>
            <div className={classes.detailViewClass}>
                <div className={classes.textCenter}>{obj.properties.title}</div>
                <div className={classes.flexContainer}>
                    <div className={classes.label}>Title</div>
                    <div className={classes.propertyValue}>{obj.properties.title}</div>
                </div>
                <div className={classes.flexContainer}>
                    <div className={classes.label}>Magnitude</div>
                    <div className={classes.propertyValue}>{obj.properties.mag}</div>
                </div>
                <div className={classes.flexContainer}>
                    <div className={classes.label}>Time</div>
                    <div className={classes.propertyValue}>{obj.properties.formattedTime}</div>
                </div>
                <div className={classes.flexContainer}>
                    <div className={classes.label}>Status</div>
                    <div className={classes.propertyValue}>{obj.properties.status}</div>
                </div>
                <div className={classes.flexContainer}>
                    <div className={classes.label}>Tsunami</div>
                    <div className={classes.propertyValue}>{obj.properties.tsunami}</div>
                </div>
                <div className={classes.flexContainer}>
                    <div className={classes.label}>Type</div>
                    <div className={classes.propertyValue}>{obj.properties.type}</div>
                </div>
            </div>
        </>);
    else {
        return (
            <div className={classes.detailViewClass}>
                Something went wrong....
            </div>
        )
    }
}

export default DetailView;