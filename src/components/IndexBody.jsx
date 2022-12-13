import React from 'react'
import styled from 'styled-components'
import {Container} from 'semantic-ui-react'
import Slider from "react-slick";

const IndexBody = () => {
    const StyledSlider = styled(Slider)`
        .slick-slide div{
            outline: none;
        }
    `;
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className='section-category'>
            <Container className='container-category'>
                <h2>
                    Single Item</h2>
                <Slider {...settings}>
                    <div className='carousel-item'>
                        <div className='row text-center'>
                            <div className='category-card col-3 col-md-6'>
                                <a role="link" aria-disabled="true">
                                    <div className='category-image card-image'>
                                        <img
                                            src={process.env.PUBLIC_URL + '/img/category/gear.jpg'}
                                            alt="category-image"/>
                                    </div>
                                    <div className="category-caption card-caption">
                                        <h3 className='category-title'>금속가공</h3>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='carousel-item'>
                        <h3>2</h3>
                    </div>
                </Slider>
            </Container>
        </div>
    )
}

export default IndexBody;