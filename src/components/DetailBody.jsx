import { React, useState, useRef } from "react";
import {Icon} from "semantic-ui-react";
import {useNavigate} from "react-router-dom";
import ReactImageMagnify from '@vorld/react-image-magnify';

const DetailBody = ({settings}) => {

    const navigate = useNavigate();
    
    const images = [
        '../img/company/dongseo/products/detail/IMG_1089.jpg',
        '../img/company/dongseo/products/detail/IMG_1096.jpg',
        '../img/company/dongseo/products/detail/IMG_1099.jpg',
    ];

    const [img, setImg] = useState(images[0]);
    const hoverHandler = (image, i) => {
        setImg(image);
        refs.current[i].classList.add('active');
        for (var j = 0; j < images.length; j++) {
            if (i !== j) {
                refs.current[j].classList.remove('active');
            }
        }
    };
    const refs = useRef([]);
    refs.current = [];
    const addRefs = (el) => {
        if (el && !refs.current.includes(el)) {
            refs.current.push(el);
        }
    };

    return (
        <div className="section-showcase">
            <div className="container showcase-container">
                <div className="go-back" onClick={() => navigate(-1)}>
                    <div className="go-back-contents">
                        <Icon className="go-back-icon" name="arrow left"></Icon>
                    </div>
                </div>
                <div className="showcase-title">
                    <h2>제품 상세 정보</h2>
                </div>
                <div className="row showcase-row">
                    <div className="detail-img-container">
                        <div className="left">
                            <div className="left_1">
                                {
                                    images.map((image, i) => (
                                        <div
                                            className={i == 0
                                                ? 'img_wrap active'
                                                : 'img_wrap'}
                                            key={i}
                                            onMouseOver={() => hoverHandler(image, i)}
                                            ref={addRefs}>
                                            <img src={image} alt=""/>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="left_2">
                                <ReactImageMagnify
                                    {...{
                            smallImage: {
                                alt: '제품 이미지',
                                isFluidWidth: true,
                                src: img,
                            },
                            largeImage: {
                                src: img,
                                width: 3000,
                                height: 1500,
                            },
                            enlargedImageContainerDimensions: {
                                width: '115%',
                                height: '100%',
                            },
                        }}/>
                            </div>
                        </div>
                        <div className="right"></div>
                    </div>
                </div>

                <div className="images-list">
                    <div className="img-list-box">
                        <img
                            src={process.env.PUBLIC_URL + "/img/company/dongseo/products/detail/IMG_1089.jpg"}
                            alt=""
                            className="img-list-item"/>
                    </div>
                    <div className="img-list-box">
                        <img
                            src={process.env.PUBLIC_URL + "/img/company/dongseo/products/detail/IMG_1096.jpg"}
                            alt=""
                            className="img-list-item"/>
                    </div>
                    <div className="img-list-box">
                        <img
                            src={process.env.PUBLIC_URL + "/img/company/dongseo/products/detail/IMG_1099.jpg"}
                            alt=""
                            className="img-list-item"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailBody;