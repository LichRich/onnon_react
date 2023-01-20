import {
    collection,
    endBefore,
    getDoc,
    getDocs,
    limit,
    limitToLast,
    orderBy,
    query,
    startAfter,
    documentId,
    endAt,
    getCountFromServer
} from 'firebase/firestore';
import React, {useEffect, useState} from 'react'
import {Button} from 'semantic-ui-react'
import Slider from 'react-slick';

const HomeBody = ({settings, db}) => {

    const [list, setList] = useState([]);
    const [page, setPage] = useState(1);
    const [len, setLen] = useState(0);

    const categoryRef = collection(db, "categories");

    useEffect(() => {
        const getCLength = async () => {
            const lengthSnapshot = await getCountFromServer(categoryRef);
            setLen(lengthSnapshot.data().count);
        }
        getCLength();
    }, [len]);
    

    useEffect(() => {
        const fetchData = async () => {
            const categories = query(categoryRef, orderBy("id"), limit(8));
            const documentSnapshots = await getDocs(categories);
            setList(documentSnapshots.docs.map((doc) => ({
                key: doc.id,
                ...doc.data(),
            })));
            // const docs = await getDocs(categoryRef); setCategories(docs.docs.map((doc) =>
            // ({     ...doc.data(),     id: doc.id })));
        }
        fetchData();
    }, [])

    const showNext = ({item}) => {
        if(page < len/8) {
            const fetchNext = async () => {
                const nextSnapshots = query(categoryRef, orderBy("id"), startAfter(item.id), limit(8));
                const nextDocs = await getDocs(nextSnapshots);
                setList(nextDocs.docs.map((doc) => ({
                    key: doc.id,
                    ...doc.data()
                })));
                setPage(page + 1);
            }
            fetchNext();
        }
    }

    const showPrev = ({item}) => {
        const fetchPrev = async () => {
            if(page > 1) {
                const prevSnapshots = query(
                    categoryRef,
                    orderBy("id"),
                    endBefore(item.id),
                    limitToLast(8)
                );
                const prevDocs = await getDocs(prevSnapshots);
                setList(prevDocs.docs.map((doc) => ({
                    key: doc.id,
                    ...doc.data()
                })));
                setPage(page - 1);
            }
        }
        fetchPrev();
    }

    let catIndex = 0;

    const showCategories = () => {
        return list.map((value) => (
            <div
                key={'id' + (
                    catIndex++
                )}
                className="category-card col-3 col-md-6">
                <a role='link' aria-disabled='true'>
                    <div className="category-image card-image">
                        <img src={value.img} alt="category-img"/>
                    </div>
                    <div className='category-caption card-caption'>
                        <p className='category-title'>{value.name}</p>
                    </div>
                </a>
            </div>
        ));
    }
    // const showCategories = () => {     <div className="carousel-item"> <div
    // className='row category-row'>             {categories.map((value) => ( <div
    // key={"id"+(catIndex++)} className='category-card col-3 col-md-6'> <a
    // role="link" aria-disabled="true">                         <div
    // className='category-image card-image'>                             <img
    // src={value.img}                                 alt="category-img"/> </div>
    // <div className="category-caption card-caption">
    // <p className='category-title'>{value.name}</p>                         </div>
    // </a>                 </div>             ))}         </div>     </div> }

    return (
        <div className='sections section-category'>
            <div className='container container-category'>
                <h2 id='category-title'>산업 분야</h2>
                <div className='carousel-item'>
                    <div className='row category-row'>
                        {showCategories()}
                    </div>
                </div>
                <button onClick={() => showPrev({item: list[0]})}>prev</button>
                <button onClick={() => showNext({
                    item: list[list.length - 1]
                })}>next</button>
                {/* {
                    page === 1
                        ? ''
                        : <Button onClick={() => showPrev({item: list[0]})}>prev</Button>
                }
                {
                    list.length < 8
                        ? ''
                        : <Button
                                onClick={() => showNext({
                                    item: list[list.length - 1]
                                })}>next</Button>
                } */}
                {/* {showCategories} */}
                {/* <Slider {...settings}>
                    <div className='carousel-item'>
                        <div className='row category-row'>
                            <div className='category-card col-3 col-md-6'>
                                <a role="link" aria-disabled="true">
                                    <div className='category-image card-image'>
                                        <img
                                            src={process.env.PUBLIC_URL + '/img/category/gear.jpg'}
                                            alt="category-img"/>
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
                                            alt="category-img"/>
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
                                            alt="category-img"/>
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
                                            alt="category-img"/>
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
                                            alt="category-img"/>
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
                                            alt="category-img"/>
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
                                            alt="category-img"/>
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
                                            alt="category-img"/>
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
                                            alt="category-img"/>
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
                                            alt="category-img"/>
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
                                            alt="category-img"/>
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
                                            alt="category-img"/>
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
                                            alt="category-img"/>
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
                                            alt="category-img"/>
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
                                            alt="category-img"/>
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
                                            alt="category-img"/>
                                    </div>
                                    <div className="category-caption card-caption">
                                        <p className='category-title'>설계</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </Slider> */
                }
            </div>
        </div>
    )
}

export default HomeBody;