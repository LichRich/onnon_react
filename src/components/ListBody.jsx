import {collection, getDocs, orderBy, query, getCountFromServer, where} from 'firebase/firestore';
import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import {useNavigate} from "react-router-dom";

const ListBody = ({settings, db, keyword}) => {
    

    const companiesRef = collection(db, "companies");
    let query_ = query(companiesRef, where("keywords", "array-contains-any", keyword));

    useEffect(() => {
        query_ = query(companiesRef, where("keywords", "array-contains-any", keyword));
    }, [keyword])

    const [companyList, setCompanyList] = useState([]);
    const [companyPage, setCompanyPage] = useState(0);
    const [companyLen, setCompanyLen] = useState(0);

    let currCompanyPage = 0;
    const companyNum = 4;

    const navigate = useNavigate();
    const handleNavigate = (e) => {
        navigate("/company", {
            state: {
                id: e.currentTarget.id,
            }
        });
    }

    useEffect(() => {
        const getCompaniesLength = async () => {
            const lengthSnapshot = await getCountFromServer(query_);
            await setCompanyLen(lengthSnapshot.data().count);
            setCompanyPages();
        }
        getCompaniesLength();
    }, [companyLen, keyword]);

    useEffect(() => {
        const getCompanies = async () => {
            const companies = query(query_, orderBy("sName"));
            const documentSnapshots = await getDocs(companies);
            setCompanyList(documentSnapshots.docs.map((doc) => ({
                key: doc.id,
                ...doc.data()
            })));
        }
        getCompanies();
    }, [keyword])

    const setCompanyPages = () => {
        if (companyLen === 0) {
            setCompanyPage(0);
        } else if (companyLen % 4 === 0) {
            setCompanyPage(parseInt(companyLen / 4));
        } else {
            setCompanyPage(parseInt(companyLen / 4) + 1);
        }
    }

    const showCompanyPages = () => {
        let id = 0;
        if(companyPage > 0) {
            return ([...Array(companyPage)].map(() => {
                return (
                    <div
                        key={'id' + (
                            id++
                        )}
                        className='carousel-item'>
                        <div className='row list-row'>
                            {showCompanies()}
                        </div>
                    </div>
                )
            }));
        } else {
            return (
                <div className='carousel-item'>
                    <div className='row list-row'>
                        <div className='no-items'>
                            <p className='no-items-desc'>조건을 만족하는 기업이 없습니다.</p>
                        </div>
                    </div>
                </div>
            )
        }
    }

    let comIndex = 0;
    const companySlicer = (list, start, end) => {
        return list
            .slice(start, end)
            .map((v) => (
                <div
                    key={'id' + (
                        comIndex++
                    )}
                    className="card card-company"
                    id={v.id}
                    onClick={handleNavigate}>
                    <div className="card-img-top">
                        <img src={v.logo} className="card-company-img" alt="company logo"/>
                    </div>
                    <div className="card-body">
                        <p className="card-title">{v.sName}</p>
                        <p className="card-text">{v.desc}</p>
                    </div>
                </div>
            ));
    }

    const showCompanies = () => {
        let companyCnt = 4;
        let startPoint = currCompanyPage * companyNum;
        if (companyLen - startPoint < 4) {
            companyCnt = companyLen - startPoint;
        }
        let nextPoint = startPoint + companyCnt;
        currCompanyPage += 1;

        return companySlicer(companyList, startPoint, nextPoint);
    }

    return (
        <section className="sections section-list">
            <div className="container container-list">
                <h2 id="list-title">'{keyword[1]}' 기업 목록</h2>
                <Slider {...settings}>
                    {showCompanyPages()}
                </Slider>
            </div>
        </section>
    )
}

export default ListBody;