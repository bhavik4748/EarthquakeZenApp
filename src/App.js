import React, { useState, useEffect } from 'react';
import service from './services/service';
import Header from './Component/Header/Header';
import Home from './Container/Home/Home';
import { render } from 'react-dom';

class App extends React.Component {

    componentDidMount() {
        service.getApiData();
    }




    render() {
        return (
            <>
                <Header />
                <Home></Home>
            </>
        );
    }
}
export default App;