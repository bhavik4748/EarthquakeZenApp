import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'

import service from '../../services/service';
import classes from './Home.module.css';

const Home = ({ quakeData }) => {
    let dataRow = '';
    const [data, setData] = useState([...quakeData.features]);
    const [title, setTitle] = useState(false);
    const [mag, setMag] = useState(false);
    const [time, setTime] = useState(false);
    const sortByColumn = (type) => {
        switch (type) {
            case 'place':
                setData(service.sortData([...data], type, title));
                setTitle(!title);
                break;
            case 'mag':
                setData(service.sortData([...data], type, mag));
                setMag(!mag);
                break;

            case 'time':
                setData(service.sortData([...data], type, time));
                setTime(!time);
                break;
        }
    }

    dataRow = data.map(row => {
        let id = '/' + row['properties']['id'];
        return (
            <div key={row.properties.title} className={classes.tableClassRow}>
                <NavLink key={id} className={classes.titleRow} to={id}> {row.properties.place}</NavLink>
                <div className={classes.magnitudeRow}>{row.properties.mag}</div>
                <div className={classes.timeRow}>{row.properties.formattedTime}</div>
            </div>
        )
    })

    return (
        <div className={classes.homeClass}>
            <div className={classes.textCenter} >{quakeData.metadata.title} </div>
            <div className={classes.autoScroll}>
                <div className={classes.tableClass}>
                    <div className={classes.titleHeader} onClick={() => sortByColumn('place')} >Title</div>
                    <div className={classes.magnitudeHeader} onClick={() => sortByColumn('mag')} >Magnitude</div>
                    <div className={classes.timeHeader} onClick={() => sortByColumn('time')}>Time</div>
                </div>
                {dataRow}
            </div>
        </div>
    )

}

export default Home;