import React from 'react';
import HomeBody from '../components/HomeBody';

import "../css/home_style.css";

function Home({settings}) {

    return (
        <HomeBody settings={settings} />
    );
}

export default Home;