import React from "react";
import Slider from "react-slick";
import {Link, useNavigate} from "react-router-dom";

const ListBody = ({settings}) => {

    const navigate = useNavigate();
    const toCompany = () => {
        navigate("/company");
    }

    return (
        <section className="sections section-list">
            <div className="container container-list">
                <h2 id="list-title">기업 목록</h2>
                <Slider {...settings}>
                    <div className="carousel-item">
                        <div className="row list-row">
                            <div className="card card-company" id="onandon" onClick={toCompany}>
                                <div className="card-img-top">
                                    <img
                                        src={process.env.PUBLIC_URL + "/img/company/dongseo/logo.png"}
                                        className="card-company-img"
                                        alt="..."/>
                                </div>
                                <div className="card-body">
                                    <p className="card-title">(주) 동서정밀</p>
                                    <p className="card-text">금형 제조, 산업용 접착제 부품 제조 및 판매, 플라스틱 용품 제조</p>
                                </div>
                            </div>
                            <div className="card card-company">
                                <div className="card-img-top">
                                    <img
                                        src={process.env.PUBLIC_URL + "/img/logo/symbol_basic.png"}
                                        className="card-company-img"
                                        alt="..."/>
                                </div>
                                <div className="card-body">
                                    <p className="card-title">온앤온 협동조합</p>
                                    <p className="card-text">온앤온은 새로운 마케팅 방식을 제안하고, 이를 통해 제조업체들의 성장과 성공에 기여하고자 합니다.</p>
                                </div>
                            </div>
                            <div className="card card-company">
                                <div className="card-img-top">
                                    <img src="" className="card-company-img" alt="기업로고"/>
                                </div>
                                <div className="card-body">
                                    <p className="card-title">기업이름</p>
                                    <p className="card-text">기업에 대한 간략한
                                        설명asdfasdfasdfasdfasdfasdfasdfasdfasfafdsasdfasdfasdfasdfasdfsadfasdfasdfasdfsdafsda</p>
                                </div>
                            </div>
                            <div className="card card-company">
                                <div className="card-img-top">
                                    <img src="" className="card-company-img" alt="기업로고"/>
                                </div>
                                <div className="card-body">
                                    <p className="card-title">기업이름</p>
                                    <p className="card-text">기업에 대한 간략한
                                        설명asdfasdfasdfasdfasdfasdfasdfasdfasfafdsasdfasdfasdfasdfasdfsadfasdfasdfasdfsdafsda</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        hihi
                    </div>
                </Slider>
            </div>
        </section>
    )
}

export default ListBody;