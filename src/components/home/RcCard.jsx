import React, { useEffect, useState } from 'react'
import {collection, doc, getDoc} from 'firebase/firestore';

export default function RcCard({logo, name, desc}) {

    // const companyRef = doc(firestore, "recommend", cardId);
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     const getCompany = async () => {
    //         const documentSnapshot = await getDoc(companyRef);
    //         setData({
    //             logo: documentSnapshot.logo,
    //             name: documentSnapshot.name,
    //             sname: documentSnapshot.sname,
    //             desc: documentSnapshot.desc
    //         });
    //     }
    //     getCompany();
    // }, [])
    return (
        <div className='recommend-card'>
            <div className='company-logo-box'>
                <img id='company-logo' src={logo} alt='logo' />
            </div>
            <div className='company-content-box'>
                <div className='company-title-box'>
                    <p className='company-title'>{name}</p>
                </div>
                <div className='company-desc-box'>
                    <p className='company-desc'>{desc}</p>
                </div>
            </div>
        </div>
    )
}
