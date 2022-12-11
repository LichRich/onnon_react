import React from 'react';
import HeaderIndex from '../components/HeaderIndex';
import {
    Segment,
    Menu,
    Sidebar
} from 'semantic-ui-react'

function IndexPage() {

    return(
        <div>
            <HeaderIndex/>
            <div>메인 페이지</div>
        </div>
    );
}

export default IndexPage;