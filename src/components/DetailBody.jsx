import {React, useState, useRef} from "react";
import {Icon} from "semantic-ui-react";
import {useLocation, useNavigate} from "react-router-dom";
import ReactImageMagnify from '@vorld/react-image-magnify';
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../firebaseConfig";
import { useEffect } from "react";

const DetailBody = () => {

    const [imgList, setImgList] = useState(['']);

    const navigate = useNavigate();
    const location = useLocation();
    const id = location.state.itemId;
    const ref = location.state.itemRef;

    const docRef = doc(firestore, ref, id);
    
    useEffect(() => {
        const getImages = async () => {
            const docSnap = await getDoc(docRef);
            setImgList(Object.values(docSnap.data()).map((doc) => doc));
        }
        getImages();
    }, [])

    const [img, setImg] = useState(imgList[0]);

    const refs = useRef([]);
    refs.current = [];
    const addRefs = (el) => {
        if (el && !refs.current.includes(el)) {
            refs
                .current
                .push(el);
        }
    };

    const hoverHandler = (image, i) => {
        setImg(image);
        refs
            .current[i]
            .classList
            .add('active');
        for (var j = 0; j < imgList.length; j++) {
            if (i !== j) {
                refs
                    .current[j]
                    .classList
                    .remove('active');
            }
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
                                    imgList.map((image, i) => (
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
                                width: 2700,
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
                    {
                        imgList.map((src, index) => (
                            <div key={index} className="img-list-box">
                                <img src={src} alt="" className="img-list-item"/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default DetailBody;