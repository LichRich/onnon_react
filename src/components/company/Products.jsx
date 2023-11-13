import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import {MasonryGrid} from "@egjs/react-grid";
import Slider from "react-slick";
import {getDocs, getCountFromServer} from 'firebase/firestore';

const Products = ({settings, data, path}) => {

    const navigate = useNavigate();
    const toDetail = (id) => {
        navigate("/detail", {
            state: {
                itemId: id,
                itemRef: path,
            }
        });
    }

    const [itemList, setItemList] = useState([]);
    const [itemPage, setItemPage] = useState(0);
    const [itemLen, setItemLen] = useState(0);

    let currItemPage = 0;
    const itemNum = 6;

    const itemRef = data;

    useEffect(() => {
        const getItemLength = async () => {
            const lengthSnapshot = await getCountFromServer(itemRef);
            await setItemLen(lengthSnapshot.data().count);
            setItemPages();
        }
        getItemLength();
    }, [itemLen]);

    useEffect(() => {
        const getItems = async () => {
            const documentSnapshots = await getDocs(itemRef);
            await setItemList(documentSnapshots.docs.map((doc) => ({
                id: doc.id,
                img: doc
                    .data()
                    .img1
            })));
        }
        getItems();
    }, [])

    const setItemPages = () => {
        if (itemLen === 0) {
            setItemPage(0);
        } else if (itemLen % itemNum === 0) {
            setItemPage(parseInt(itemLen / itemNum));
        } else {
            setItemPage(parseInt(itemLen / itemNum) + 1);
        }
    }

    const showItemPage = () => {
        let id = 0;
        return ([...Array(itemPage)].map(() => {
            return (
                <div
                    key={'id' + (
                        id++
                    )}
                    className="carousel-item">
                    <MasonryGrid
                        className="container masonry-container"
                        gap={30}
                        defaultDirection={"end"}
                        align={"center"}
                        column={3}>
                            {showItems()}
                        </MasonryGrid>
                </div>
            )
        }));
    }

    let itemIndex = 0;
    const itemSlicer = (list, start, end) => {
        return list
            .slice(start, end)
            .map((v) => (
                <div key={'id'+(itemIndex++)} className={"item product-items"} onClick={() => toDetail(v.id)}>
                    <img
                        src={v.img}
                        alt="제품 이미지"
                        className="product-imgs"/>
                </div>
            ));
    }

    const showItems = () => {
        let itemCnt = 6;
        let startPoint = currItemPage * itemNum;
        if (itemLen - startPoint < itemNum) {
            itemCnt = itemLen - startPoint;
        }
        let nextPoint = startPoint + itemCnt;
        currItemPage += 1;

        return itemSlicer(itemList, startPoint, nextPoint);
    }

    return (
        <section id="products">
            <div className="container products-container">
                <div className="products-title">
                    <p className="products-title-text">제품 현황</p>
                </div>
                <Slider {...settings}>
                    {showItemPage()}
                </Slider>
            </div>
        </section>
    )
}

export default Products;