import React from 'react';
import HomeBody from '../components/home/HomeBody';

import "../css/home_style.css";

function Home({settings, db, handler}) {

    return (
        <HomeBody settings={settings} db={db} handler={handler} />
    );
}

export default Home;