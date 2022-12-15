import {React, useState} from 'react';
import {Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import List from './pages/List';
import Company from './pages/Company';

import Loading from './components/common/Loading';
import Header from './components/common/Header';
import Sidebar from './components/common/Sidebar'
import Backdrop from './components/common/Backdrop';
import Footer from './components/common/Footer';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';

function App() {

    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    };

    const carousel_settings = {
        dots: true,
        infinite: true,
        speed: 500,
        draggable: false,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
      <>
        < Loading />
        <Header click={handleClick}/>
        <Sidebar open={open} click={handleClick}/>
        <Backdrop open={open} click={handleClick}/>

        <Routes>
            <Route exact="exact" path='/' element={<Home settings={carousel_settings} />}/>
            <Route path='/list' element={<List settings={carousel_settings} />}/>
            <Route path='/company' element={<Company settings={carousel_settings} />}/>
        </Routes>

        <Footer/>
      </>
    );
}

export default App;
