import React from 'react';
import { Icon, Input } from 'semantic-ui-react';
import { Link, useNavigate } from 'react-router-dom';

const HomeHeader = ({click}) => {

    let navigate = useNavigate();

    return (
        <nav className="navbar bg-dark" id='top-navbar'>
            <div className="container navbar-container">
                <div className="row header-row">
                    <Input
                        id="home-search"
                        icon={{
                            id: "search-button",
                            name: 'search',
                            circular: true,
                            link: true,
                            onClick: () => {navigate("/list")},
                        }}
                        placeholder="기업명 혹은 관련 태그를 입력하세요" />
                    <div className="navbar-logo">
                        <Link to="/">
                            <img
                                src={process.env.PUBLIC_URL + '/img/logo/onandon_logo.svg'}
                                alt="logo"
                            id='logo'/>
                        </Link>
                    </div>
                    <div className="sidebar-toggle" onClick={click}>
                        <Icon id='sidebar-toggler' name="bars"></Icon>
                    </div>
                </div>
            </div>
        </nav>
    )

}

export default HomeHeader;