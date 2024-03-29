import {React, useState} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import { firestore } from './firebaseConfig';

import Home from './pages/Home';
import List from './pages/List';
import Company from './pages/Company';
import Detail from './pages/Detail';

import Loading from './components/common/Loading';
import Header from './components/common/Header';
import Sidebar from './components/common/Sidebar'
import Backdrop from './components/common/Backdrop';
import Footer from './components/common/Footer';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import ToTop from './components/common/ToTop';

function App() {

    const [open, setOpen] = useState(false);
    const [keywords, setKeywords] = useState([""]);
    const handleClick = () => {
        setOpen(!open);
    };

    let navigate = useNavigate();
    const searchHandle = (items) => {
      setKeywords(items);
      navigate("/list");
    }

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
        <Header click={handleClick} handler={searchHandle}/>
        <Sidebar open={open} click={handleClick}/>
        <Backdrop open={open} click={handleClick}/>

        <Routes>
            <Route exact="exact" path='/' element={<Home settings={carousel_settings} db={firestore} handler={searchHandle} />}/>
            <Route path='/list' element={<List settings={carousel_settings} db={firestore} keyword={keywords}/>}/>
            <Route path='/company' element={<Company settings={carousel_settings} db={firestore} />}/>
            <Route path='/detail' element={<Detail db={firestore} />} />
        </Routes>

        <ToTop />

        <Footer/>
      </>
    );
}

export default App;
