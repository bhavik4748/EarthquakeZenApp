import React from 'react';
import classes from './Home.module.css';

const Home = ({ quakeData }) => {
    let dataRow = '';
    dataRow = quakeData.features.map(row => {
        return (
            <div key={row.properties.title} className={classes.tableClassRow}>
                <div className={classes.titleRow}>{row.properties.place}</div>
                <div className={classes.magnitudeRow}>{row.properties.mag}</div>
                <div className={classes.timeRow}>{row.properties.formattedTime}</div>
            </div>
        )
    })

    return (
        <div className={classes.homeClass}>
            <div className={classes.textCenter} >{quakeData.metadata.title} </div>

            <div className={classes.tableClass}>
                <div className={classes.titleHeader}>Title</div>
                <div className={classes.magnitudeHeader}>Magnitude</div>
                <div className={classes.timeHeader}>Time</div>
            </div>

            {dataRow}
        </div>
    )

}

export default Home;