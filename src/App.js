import React, { useState, useEffect } from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";

import service from './services/service';
import Header from './Component/Header/Header';
import Home from './Container/Home/Home';
import Profile from './Container/Profile/Profile';
import DetailView from './Container/DetailView/DetailView';
import classes from './App.css';

function App() {
    const [site, setSite] = useState(null);
    const [profile, setProfile] = useState(null);
    const [data, setData] = useState(null);
    useEffect(() => {
        async function getData() {
            const { site, profile, data } = await service.getApiData();
            setSite(site);
            setProfile(profile);
            setData(data);
        }
        getData();
    }, [setSite, setProfile, setData]);

    let display = '';
    if (site && data && profile)
        display = (<>
            <Header siteInfo={site} toHomeRoute="/" toProfileRoute="/profile" profileData={profile} />
            <Switch>
                <Route exact path="/">
                    <Home quakeData={data}></Home>
                </Route>
                <Route path="/profile">
                    <Profile profileData={profile}></Profile>
                </Route>
                <Route path="/:id" children={<DetailView quakeData={data} />}>
                </Route>
                <Route path="*">
                    <Home quakeData={data}></Home>
                </Route>
            </Switch>
        </>)

    return (
        <>
            {display}
        </>
    );
}
export default App;