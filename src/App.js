import React, { useState, useEffect } from 'react';
import service from './services/service';
import Header from './Component/Header/Header';
import Home from './Container/Home/Home';
import Profile from './Container/Profile/Profile';

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
            <Header siteInfo={site} />
            <Home quakeData={data}></Home>
            <Profile profileData={profile}></Profile>
        </>)

    return (
        <>
            {display}
        </>
    );
}
export default App;