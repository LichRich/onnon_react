import React from "react";
import { Icon } from "semantic-ui-react";

const Sidebar = ({open, click}) => {
    return(
        <div className={open?"sidebar side-collapse" : "sidebar"}>
            <div className="sidebar-title">
                <h2 className="sidebar-title-text">Categories</h2>
                <span id="sidebar-close" onClick={click}>X</span>
            </div>
            <div className="sidebar-contents">
                <ul className="sidebar-list">
                    <li className="sidebar-items">금속가공</li>
                    <li className="sidebar-items">플라스틱가공</li>
                    <li className="sidebar-items">목재가공</li>
                    <li className="sidebar-items">섬유봉제</li>
                    <li className="sidebar-items">CNC가공</li>
                    <li className="sidebar-items">밀링</li>
                    <li className="sidebar-items">유리가공</li>
                    <li className="sidebar-items">화학</li>
                    <li className="sidebar-items">3D프린팅</li>
                    <li className="sidebar-items">가죽</li>
                    <li className="sidebar-items">펄프/종이</li>
                    <li className="sidebar-items">사출금형</li>
                    <li className="sidebar-items">회로/기판</li>
                    <li className="sidebar-items">조립/부품</li>
                    <li className="sidebar-items">화장품</li>
                    <li className="sidebar-items">설계</li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;