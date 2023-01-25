import React from "react";

const About = ({data}) => {

    return(
        <section className="about-section" id="about">
            <div className="backgrounds">
                <img src={data.bg} alt="회사 배경" />
            </div>
            <div
                id="intro-contents"
                className="intro-contents">
                <img
                    id="intro-img"
                    className="intro-img"
                    src={data.bLogo}
                    alt="logo" />

                <div className="intro-contents-text">
                    <p className="intro-contents-title">
                        {data.name}
                    </p>
                    <p className="intro-contents-desc">
                        {data.desc}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;