import React, { useState } from 'react';
import Loading from '../components/Loading'
import HomeHeader from '../components/home/HomeHeader';
import HomeBody from '../components/home/HomeBody';
import Sidebar from '../components/home/Sidebar'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../css/home_style.css";
import Backdrop from '../components/home/Backdrop';

function Home() {

    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    };

    return(
        <>
            <Loading/>
            <HomeHeader click={handleClick}/>
            <Sidebar open={open} click={handleClick}/>
            <Backdrop open={open} click={handleClick}/>
            <HomeBody/>
        </>
    );
}

export default Home;