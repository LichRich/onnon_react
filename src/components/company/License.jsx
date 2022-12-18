import React from "react";
import Slider from "react-slick";

const License = ({settings}) => {
    return(
        <section id="license">
            <div className="container license-container">
                <p className="license-title">특허</p>
                <Slider {...settings} className="carousel license-carousel">
                    <div className="carousel-item">
                        <div className="row license-row">
                            <div className="card-item license-card">
                                <img src={process.env.PUBLIC_URL + "/img/company/dongseo/onandon1.png"} alt="licenses" className="license-imgs" />
                            </div>
                            <div className="card-item license-card">
                                <img src={process.env.PUBLIC_URL + "/img/company/dongseo/onandon1.png"} alt="licenses" className="license-imgs" />
                            </div>
                            <div className="card-item license-card">
                                <img src={process.env.PUBLIC_URL + "/img/company/dongseo/onandon1.png"} alt="licenses" className="license-imgs" />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row license-row">
                            <div className="card-item license-card">
                                <img src={process.env.PUBLIC_URL + "/img/company/dongseo/onandon1.png"} alt="licenses" className="license-imgs" />
                            </div>
                            <div className="card-item license-card">
                                <img src={process.env.PUBLIC_URL + "/img/company/dongseo/onandon1.png"} alt="licenses" className="license-imgs" />
                            </div>
                            <div className="card-item license-card">
                                <img src={process.env.PUBLIC_URL + "/img/company/dongseo/onandon1.png"} alt="licenses" className="license-imgs" />
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    )
}

export default License;