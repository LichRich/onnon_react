import React from "react";
import { Icon } from "semantic-ui-react";

const Footer = () => {
    return (
        <footer className="footer bg-dark">
            <div className="container footer-container">
                <div className="row footer-row" id="footer-contents">
                    <div className="footer-copy">
                        <p className="footer-text copyright">&copy; &nbsp;ON&ON, All Rights Reserved</p>
                    </div>
                    <div className="footer-info">
                        <p className="footer-text information address">주소: 충남 아산시 신창면 순천향로 22, B518호 (순천향대학교 산학협력단)</p>
                        <p className="footer-text information tel">TEL: 010-9176-1429</p>
                    </div>
                    <div className="footer-sns">
                        <a href="https://www.instagram.com/onandon.___.coop/" target="_blank">
                            <Icon name="instagram"></Icon>
                        </a>
                        <a href="https://blog.naver.com/onandoncoop" target="_blank">
                        <Icon name="globe"></Icon>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;