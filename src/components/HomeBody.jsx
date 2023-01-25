import {
    collection,
    getDocs,
    orderBy,
    query,
    getCountFromServer
} from 'firebase/firestore';
import React, {useEffect, useState} from 'react'
import Slider from 'react-slick';

const HomeBody = ({settings, db}) => {

    const [list, setList] = useState([]);
    const [pages, setPages] = useState([]);
    const [cardNum, setCardNum] = useState(8);
    const [len, setLen] = useState(0);

    let currPage = 0;

    const categoryRef = collection(db, "categories");

    useEffect(() => {
        const getCLength = async () => {
            const lengthSnapshot = await getCountFromServer(categoryRef);
            await setLen(lengthSnapshot.data().count);
            console.log("len = " + len);
            setPagesCnt();
        }
        getCLength();
    }, [len]);

    useEffect(() => {
        const fetchData = async () => {
            const categories = await query(categoryRef, orderBy("id"));
            const documentSnapshots = await getDocs(categories);
            await setList(documentSnapshots.docs.map((doc) => ({
                key: doc.id,
                ...doc.data()
            })));
        }
        fetchData();
    }, [])

    const setPagesCnt = () => {
        if(len === 0) {
            setPages(0);
        } else if(len%8 === 0) {
            setPages(parseInt(len/8));
        } else {
            setPages(parseInt(len/8) + 1);
        }
    }

    const showPages = () => {
        let id = 0;
        return ([...Array(pages)].map(() => {
            return (
                <div key={'id' + id++} className='carousel-item'>
                    <div className='row category-row'>
                        {showCategories()}
                    </div>
                </div>
            )
        }));
    }

    let catIndex = 0;
    const slicer = (list, start, end) => {
        return list.slice(start, end).map((v) => (
            <div key={'id'+(catIndex++)} className="category-card col-3 col-md-6">
                <a role='link' aria-disabled='true'>
                    <div className='category-image card-image'>
                        <img src={v.img} alt='category-img' className="category-img" />
                    </div>
                    <div className='category-caption card-caption'>
                        <p className='category-title'>{v.name}</p>
                    </div>
                </a>
            </div>
        ));
    }

    const showCategories = () => {
        let startPoint = currPage * cardNum;
        let cardsCnt = 8;
        if(len - startPoint < 8) {cardsCnt = len - startPoint;}
        let nextPoint = startPoint + cardsCnt;
        currPage += 1;

        return slicer(list, startPoint, nextPoint);
    }

    return (
        <div className='sections section-category'>
            <div className='container container-category'>
                <h2 id='category-title'>산업 분야</h2>
                <Slider {...settings}>
                    {showPages()}
                </Slider>
            </div>
        </div>
    )
}

export default HomeBody;