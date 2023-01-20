import {
    collection,
    endBefore,
    getDocs,
    limit,
    limitToLast,
    orderBy,
    query,
    startAfter,
    getCountFromServer
} from 'firebase/firestore';
import React, {useEffect, useState} from 'react'
import {Icon} from 'semantic-ui-react'

const HomeBody = ({settings, db}) => {

    const [list, setList] = useState([]);
    const [pages, setPages] = useState([]);
    const [page, setPage] = useState(1);
    const [len, setLen] = useState(0);

    const handlePage = (pageNo) => {
        setPage(pageNo);
    };

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
                ...doc.data()
            })));
            // const docs = await getDocs(categoryRef); setCategories(docs.docs.map((doc) =>
            // ({     ...doc.data(),     id: doc.id })));
        }
        fetchData();
    }, [])

    const showNext = ({item}) => {
        if (page < len / 8) {
            const fetchNext = async () => {
                const nextSnapshots = query(
                    categoryRef,
                    orderBy("id"),
                    startAfter(item.id),
                    limit(8)
                );
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
            if (page > 1) {
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
    // <div className="category-caption card-caption"> <p
    // className='category-title'>{value.name}</p>                         </div>
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
                <div
                    className='btn-category btn-prev'
                    onClick={() => showPrev({item: list[0]})}>
                    <Icon className='btn-icon prev' name='angle left'/>
                </div>
                <div
                    className='btn-category btn-next'
                    onClick={() => showNext({
                        item: list[list.length - 1]
                    })}>
                    <Icon className='btn-icon next' name='angle right'/>
                </div>
            </div>
        </div>
    )
}

export default HomeBody;