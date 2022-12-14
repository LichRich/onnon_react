import React from 'react'
import Slider from 'react-slick';

const HomeBody = () => {
    const carousel_settings = {
        dots: true,
        infinite: true,
        speed: 500,
        draggable: false,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className='sections section-category'>
            <div className='container container-category'>
                <h2 id='category-title'>산업 분야</h2>
                <Slider {...carousel_settings}>
                    <div className='carousel-item'>
                        <div className='row category-row'>
                            <div className='category-card col-3 col-md-6'>
                                <a role="link" aria-disabled="true">
                                    <div className='category-image card-image'>
                                        <img
                                            src={process.env.PUBLIC_URL + '/img/category/gear.jpg'}
                                            alt="category-image"/>
                                    </div>
                                    <div className="category-caption card-caption">
                                        <p className='category-title'>금속가공</p>
                                    </div>
                                </a>
                            </div>
                            <div className='category-card col-3 col-md-6'>
                                <a role="link" aria-disabled="true">
                                    <div className='category-image card-image'>
                                        <img
                                            src={process.env.PUBLIC_URL + '/img/category/plastic.jpg'}
                                            alt="category-image"/>
                                    </div>
                                    <div className="category-caption card-caption">
                                        <p className='category-title'>플라스틱가공</p>
                                    </div>
                                </a>
                            </div>
                            <div className='category-card col-3 col-md-6'>
                                <a role="link" aria-disabled="true">
                                    <div className='category-image card-image'>
                                        <img
                                            src={process.env.PUBLIC_URL + '/img/category/carpentry.jpg'}
                                            alt="category-image"/>
                                    </div>
                                    <div className="category-caption card-caption">
                                        <p className='category-title'>목재가공</p>
                                    </div>
                                </a>
                            </div>
                            <div className='category-card col-3 col-md-6'>
                                <a role="link" aria-disabled="true">
                                    <div className='category-image card-image'>
                                        <img
                                            src={process.env.PUBLIC_URL + '/img/category/fiber.jpg'}
                                            alt="category-image"/>
                                    </div>
                                    <div className="category-caption card-caption">
                                        <p className='category-title'>섬유봉제</p>
                                    </div>
                                </a>
                            </div>
                            <div className='category-card col-3 col-md-6'>
                                <a role="link" aria-disabled="true">
                                    <div className='category-image card-image'>
                                        <img
                                            src={process.env.PUBLIC_URL + '/img/category/cnc.jpg'}
                                            alt="category-image"/>
                                    </div>
                                    <div className="category-caption card-caption">
                                        <p className='category-title'>CNC가공</p>
                                    </div>
                                </a>
                            </div>
                            <div className='category-card col-3 col-md-6'>
                                <a role="link" aria-disabled="true">
                                    <div className='category-image card-image'>
                                        <img
                                            src={process.env.PUBLIC_URL + '/img/category/milling.jpg'}
                                            alt="category-image"/>
                                    </div>
                                    <div className="category-caption card-caption">
                                        <p className='category-title'>밀링</p>
                                    </div>
                                </a>
                            </div>
                            <div className='category-card col-3 col-md-6'>
                                <a role="link" aria-disabled="true">
                                    <div className='category-image card-image'>
                                        <img
                                            src={process.env.PUBLIC_URL + '/img/category/glass_bottle.png'}
                                            alt="category-image"/>
                                    </div>
                                    <div className="category-caption card-caption">
                                        <p className='category-title'>유리가공</p>
                                    </div>
                                </a>
                            </div>
                            <div className='category-card col-3 col-md-6'>
                                <a role="link" aria-disabled="true">
                                    <div className='category-image card-image'>
                                        <img
                                            src={process.env.PUBLIC_URL + '/img/category/chemical.jpg'}
                                            alt="category-image"/>
                                    </div>
                                    <div className="category-caption card-caption">
                                        <p className='category-title'>화학</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='carousel-item'>
                        <div className='row category-row'>
                            <div className='category-card col-3 col-md-6'>
                                <a role="link" aria-disabled="true">
                                    <div className='category-image card-image'>
                                        <img
                                            src={process.env.PUBLIC_URL + '/img/category/3d_printing.jpg'}
                                            alt="category-image"/>
                                    </div>
                                    <div className="category-caption card-caption">
                                        <p className='category-title'>3D프린팅</p>
                                    </div>
                                </a>
                            </div>
                            <div className='category-card col-3 col-md-6'>
                                <a role="link" aria-disabled="true">
                                    <div className='category-image card-image'>
                                        <img
                                            src={process.env.PUBLIC_URL + '/img/category/leather.jpg'}
                                            alt="category-image"/>
                                    </div>
                                    <div className="category-caption card-caption">
                                        <p className='category-title'>가죽</p>
                                    </div>
                                </a>
                            </div>
                            <div className='category-card col-3 col-md-6'>
                                <a role="link" aria-disabled="true">
                                    <div className='category-image card-image'>
                                        <img
                                            src={process.env.PUBLIC_URL + '/img/category/paper.jpg'}
                                            alt="category-image"/>
                                    </div>
                                    <div className="category-caption card-caption">
                                        <p className='category-title'>펄프/종이</p>
                                    </div>
                                </a>
                            </div>
                            <div className='category-card col-3 col-md-6'>
                                <a role="link" aria-disabled="true">
                                    <div className='category-image card-image'>
                                        <img
                                            src={process.env.PUBLIC_URL + '/img/category/molding.jpg'}
                                            alt="category-image"/>
                                    </div>
                                    <div className="category-caption card-caption">
                                        <p className='category-title'>사출금형</p>
                                    </div>
                                </a>
                            </div>
                            <div className='category-card col-3 col-md-6'>
                                <a role="link" aria-disabled="true">
                                    <div className='category-image card-image'>
                                        <img
                                            src={process.env.PUBLIC_URL + '/img/category/circuit.jpg'}
                                            alt="category-image"/>
                                    </div>
                                    <div className="category-caption card-caption">
                                        <p className='category-title'>회로/기판</p>
                                    </div>
                                </a>
                            </div>
                            <div className='category-card col-3 col-md-6'>
                                <a role="link" aria-disabled="true">
                                    <div className='category-image card-image'>
                                        <img
                                            src={process.env.PUBLIC_URL + '/img/category/components.jpg'}
                                            alt="category-image"/>
                                    </div>
                                    <div className="category-caption card-caption">
                                        <p className='category-title'>조립/부품</p>
                                    </div>
                                </a>
                            </div>
                            <div className='category-card col-3 col-md-6'>
                                <a role="link" aria-disabled="true">
                                    <div className='category-image card-image'>
                                        <img
                                            src={process.env.PUBLIC_URL + '/img/category/cosmetics.jpg'}
                                            alt="category-image"/>
                                    </div>
                                    <div className="category-caption card-caption">
                                        <p className='category-title'>화장품</p>
                                    </div>
                                </a>
                            </div>
                            <div className='category-card col-3 col-md-6'>
                                <a role="link" aria-disabled="true">
                                    <div className='category-image card-image'>
                                        <img
                                            src={process.env.PUBLIC_URL + '/img/category/design.jpg'}
                                            alt="category-image"/>
                                    </div>
                                    <div className="category-caption card-caption">
                                        <p className='category-title'>설계</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default HomeBody;