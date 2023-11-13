import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import {getDocs, getCountFromServer} from 'firebase/firestore';

const License = ({settings, data}) => {

    const [licList, setLicList] = useState([]);
    const [licPage, setLicPage] = useState(0);
    const [licLen, setLicLen] = useState(0);

    let currLicensePage = 0;
    const licenseNum = 3;

    const licenseRef = data;

    useEffect(() => {
        const getLicenseLength = async () => {
            const lengthSnapshot = await getCountFromServer(licenseRef);
            await setLicLen(lengthSnapshot.data().count);
            setLicensePages();
        }
        getLicenseLength();
    }, [licLen]);

    useEffect(() => {
        const getLicenses = async () => {
            const documentSnapshots = await getDocs(licenseRef);
            await setLicList(documentSnapshots.docs.map((doc) => ({
                img: doc.data().img,
            })));
        }
        getLicenses();
    }, [])

    const setLicensePages = () => {
        if (licLen === 0) {
            setLicPage(0);
        } else if (licLen % licenseNum === 0) {
            setLicPage(parseInt(licLen / licenseNum));
        } else {
            setLicPage(parseInt(licLen / licenseNum) + 1);
        }
    }

    const showLicensePage = () => {
        let id = 0;
        return ([...Array(licPage)].map(() => {
            return (
                <div
                    key={'id' + (
                        id++
                    )}
                    className='carousel-item'>
                    <div className='row license-row'>
                        {showLicenses()}
                    </div>
                </div>
            )
        }));
    }

    let licIndex = 0;
    const licenseSlicer = (list, start, end) => {
        return list
            .slice(start, end)
            .map((v) => (
                <div key={'id'+(licIndex++)} className="card-item license-card">
                    <img
                        src={v.img}
                        alt="licenses"
                        className="license-imgs"/>
                </div>
            ));
    }

    const showLicenses = () => {
        let licenseCnt = 3;
        let startPoint = currLicensePage * licenseNum;
        if (licLen - startPoint < licenseNum) {
            licenseCnt = licLen - startPoint;
        }
        let nextPoint = startPoint + licenseCnt;
        currLicensePage += 1;

        return licenseSlicer(licList, startPoint, nextPoint);
    }

    return (
        <section id="license">
            <div className="container license-container">
                <p className="license-title">특허</p>
                <Slider {...settings} className="carousel license-carousel">
                    {showLicensePage()}
                </Slider>
            </div>
        </section>
    )
}

export default License;