import React, { Component } from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Banner bannerText="Sextant Dashboard" />
                <Exhibit name="ipv4"></Exhibit>
                <Exhibit name="ipv6"></Exhibit>
                <Exhibit name="Packet Latency"></Exhibit>
            </div>
        );
    }
}

export default App;
