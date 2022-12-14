import {React, useState} from 'react';
import {Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import List from './pages/List';
import Loading from './components/common/Loading';
import Header from './components/common/Header';
import Sidebar from './components/common/Sidebar'
import Backdrop from './components/common/Backdrop';
import Footer from './components/common/Footer';

import './App.css';

function App() {

    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    };

    return (
      <>
        < Loading />
        <Header click={handleClick}/>
        <Sidebar open={open} click={handleClick}/>
        <Backdrop open={open} click={handleClick}/>

        <Routes>
            <Route exact="exact" path='/' element={<Home />}/>
            <Route path='/list' element={<List />} />
        </Routes>

        <Footer/>
      </>
    );
}

export default App;
