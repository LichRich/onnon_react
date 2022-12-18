import React from "react";
import {useNavigate} from "react-router-dom";
import {MasonryGrid} from "@egjs/react-grid";
import Slider from "react-slick";

const Products = ({settings}) => {

    const navigate = useNavigate();
    const toDetail = () => {
        navigate("/detail");
    }


    return (
        <section id="products">
            <div className="container products-container">
                <div className="products-title">
                    <p className="products-title-text">제품 현황</p>
                </div>
                <Slider {...settings}>
                    <div className="carousel-item">
                        <MasonryGrid
                            className="container masonry-container"
                            gap={30}
                            defaultDirection={"end"}
                            align={"center"}
                            column={3}>
                            <div className={"item product-items"} onClick={toDetail}>
                                <img
                                    src={process.env.PUBLIC_URL + "/img/company/dongseo/products/IMG_1099.jpg"}
                                    alt="제품 이미지"
                                    className="product-imgs"/>
                            </div>
                            <div className={"item product-items"}>
                                <img
                                    src={process.env.PUBLIC_URL + "/img/company/dongseo/products/IMG_1118.jpg"}
                                    alt="제품 이미지"
                                    className="product-imgs"/>
                            </div>
                            <div className={"item product-items"}>
                                <img
                                    src={process.env.PUBLIC_URL + "/img/company/dongseo/products/IMG_1134.jpg"}
                                    alt="제품 이미지"
                                    className="product-imgs"/>
                            </div>
                            <div className={"item product-items"}>
                                <img
                                    src={process.env.PUBLIC_URL + "/img/company/dongseo/products/IMG_1149.jpg"}
                                    alt="제품 이미지"
                                    className="product-imgs"/>
                            </div>
                            <div className={"item product-items"}>
                                <img
                                    src={process.env.PUBLIC_URL + "/img/company/dongseo/products/IMG_1195.jpg"}
                                    alt="제품 이미지"
                                    className="product-imgs"/>
                            </div>
                            <div className={"item product-items"}>
                                <img
                                    src={process.env.PUBLIC_URL + "/img/company/dongseo/products/IMG_1202.jpg"}
                                    alt="제품 이미지"
                                    className="product-imgs"/>
                            </div>
                        </MasonryGrid>
                    </div>
                    <div className="carousel-item">
                        <MasonryGrid className="container masonry-container" gap={30} defaultDirection={"end"} align={"center"} column={3}>
                        <div className={"item product-items"}>
                                <img
                                    src={process.env.PUBLIC_URL + "/img/company/dongseo/products/IMG_1223.jpg"}
                                    alt="제품 이미지"
                                    className="product-imgs"/>
                            </div>
                            <div className={"item product-items"}>
                                <img
                                    src={process.env.PUBLIC_URL + "/img/company/dongseo/products/IMG_1227.jpg"}
                                    alt="제품 이미지"
                                    className="product-imgs"/>
                            </div>
                            <div className={"item product-items"}>
                                <img
                                    src={process.env.PUBLIC_URL + "/img/company/dongseo/products/IMG_1250.jpg"}
                                    alt="제품 이미지"
                                    className="product-imgs"/>
                            </div>
                            <div className={"item product-items"}>
                                <img
                                    src={process.env.PUBLIC_URL + "/img/company/dongseo/products/IMG_1253.jpg"}
                                    alt="제품 이미지"
                                    className="product-imgs"/>
                            </div>
                            <div className={"item product-items"}>
                                <img
                                    src={process.env.PUBLIC_URL + "/img/company/dongseo/products/IMG_1264.jpg"}
                                    alt="제품 이미지"
                                    className="product-imgs"/>
                            </div>
                            <div className={"item product-items"}>
                                <img
                                    src={process.env.PUBLIC_URL + "/img/company/dongseo/products/IMG_1268.jpg"}
                                    alt="제품 이미지"
                                    className="product-imgs"/>
                            </div>
                        </MasonryGrid>
                    </div>

                </Slider>
            </div>
        </section>
    )
}

export default Products;