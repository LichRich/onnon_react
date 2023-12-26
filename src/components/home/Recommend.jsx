import {
    collection,
    getDocs,
    orderBy,
    query,
    getCountFromServer
} from 'firebase/firestore';
import React, {useEffect, useState} from 'react'
import RcCard from './RcCard';

export default function Recommend({db}) {

    const [list, setList] = useState([]);

    const recommendRef = collection(db, "recommend");

    useEffect(() => {
        const fetchData = async () => {
            const rcList = await query(recommendRef, orderBy("id"));
            const documentSnapshots = await getDocs(rcList);
            setList(documentSnapshots.docs.map((doc) => ({
                key: doc.id,
                ...doc.data()
            })));
        }
        fetchData();
    }, [])

    useEffect(() => {
        showList();
    }, [list])

    let rcIndex = 0;
    const showList = () => {
        console.log(list);
        return list.map((v) => (
            <RcCard key={'id'+rcIndex++} logo={v.logo} name={v.name} desc={v.desc} />
        ))
    }

    return (
        <section className='recommend-section'>
            <div className="container container-recommend">
                <h2 id='recommend-title'>이달의 기업 추천</h2>
                <div className='recommend-box'>
                    {showList()}
                </div>
            </div>
        </section>
    )
}
