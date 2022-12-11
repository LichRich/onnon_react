import React, {useState, useEffect} from 'react';
import {Button} from './button/Button';
import './HeaderIndex.css';
import {
    Icon,
    Checkbox,
} from 'semantic-ui-react'

const HeaderIndex = () => {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMoblieMenu = () => setClick(false);
    // console.log(visible);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    On&On
                    {/* <Icon name='bars'></Icon> */}
                </div>
                <div className="menu-icon" onClick={handleClick}>
                    <Icon name="bars"></Icon>
                </div>
                <ul className={click?"nav-menu active" : "nav-menu"}>
                    <li className="nav-item"><p className="nav-links">item1</p></li>
                    <li className="nav-item"><p className="nav-links">item2</p></li>
                    <li className="nav-item"><p className="nav-links">item3</p></li>
                </ul>
            </div>
        </nav>
    )
    
}

export default HeaderIndex;