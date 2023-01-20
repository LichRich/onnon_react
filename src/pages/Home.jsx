import React from 'react';
import HomeBody from '../components/HomeBody';

import "../css/home_style.css";

function Home({settings, db}) {

    return (
        <HomeBody settings={settings} db={db} />
    );
}

export default Home;