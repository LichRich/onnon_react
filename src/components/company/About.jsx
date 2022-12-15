import React from "react";

const About = () => {
    return(
        <section className="about-section" id="about">
            <div className="backgrounds">
                <img src={process.env.PUBLIC_URL + "/img/company/dongseo/outside.jpg"} alt="회사 배경" />
            </div>
            <div
                id="intro-contents"
                className="intro-contents">
                <img
                    id="intro-img"
                    className="intro-img"
                    src={process.env.PUBLIC_URL + "./img/company/dongseo/logo_white.png"}
                    alt="logo" />

                <div className="intro-contents-text">
                    <p className="intro-contents-title">
                        주식회사 동서정밀
                    </p>
                    <p className="intro-contents-desc">
                        금형 제조, 산업용 접착제 부품 제조 및 판매, 플라스틱 용품 제조
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;