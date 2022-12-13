import React from 'react';
import HeaderIndex from '../components/HeaderIndex';
import IndexBody from '../components/IndexBody'
import Loading from '../components/Loading'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../css/index_style.css";

function IndexPage() {

    return(
        <>
            <Loading/>
            <HeaderIndex/>
            <IndexBody/>
        </>
    );
}

export default IndexPage;