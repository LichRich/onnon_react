import {collection, getDocs, orderBy, query, getCountFromServer, where} from 'firebase/firestore';
import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import {useLocation, useNavigate} from "react-router-dom";

const ListBody = ({settings, db}) => {
    
    const [location, setLocation] = useState(useLocation());
    let keywords = [""];

    const companiesRef = collection(db, "companies");
    let query_ = query(companiesRef, where("keywords", "array-contains-any", keywords));

    useEffect(() => {
        keywords = location.state.keyword;
        query_ = query(companiesRef, where("keywords", "array-contains-any", keywords));
        console.log(keywords);
    }, [location])
    const isEmpty = false;


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

    if(keywords.length == 0) {
        isEmpty = true;
    }

    useEffect(() => {
        const getCompaniesLength = async () => {
            const lengthSnapshot = await getCountFromServer(query_);
            // const dummyLength = await getCountFromServer(query_);
            await setCompanyLen(lengthSnapshot.data().count);
            setCompanyPages();
        }
        getCompaniesLength();
    }, [companyLen]);

    useEffect(() => {
        const getCompanies = async () => {
            const companies = await query(query_, orderBy("sName"));
            const documentSnapshots = await getDocs(companies);
            await setCompanyList(documentSnapshots.docs.map((doc) => ({
                key: doc.id,
                ...doc.data()
            })));
            // console.log(keywords);
        }
        getCompanies();
    }, [])

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
                <h2 id="list-title">기업 목록</h2>
                <Slider {...settings}>
                    {showCompanyPages()}
                    {/* <div className="carousel-item">
                        <div className="row list-row">
                            <div className="card card-company" id="onandon" onClick={toCompany}>
                                <div className="card-img-top">
                                    <img
                                        src={process.env.PUBLIC_URL + "/img/company/dongseo/logo.png"}
                                        className="card-company-img"
                                        alt="..."/>
                                </div>
                                <div className="card-body">
                                    <p className="card-title">(주) 동서정밀</p>
                                    <p className="card-text">금형 제조, 산업용 접착제 부품 제조 및 판매, 플라스틱 용품 제조</p>
                                </div>
                            </div>
                            <div className="card card-company">
                                <div className="card-img-top">
                                    <img
                                        src={process.env.PUBLIC_URL + "/img/logo/symbol_basic.png"}
                                        className="card-company-img"
                                        alt="..."/>
                                </div>
                                <div className="card-body">
                                    <p className="card-title">온앤온 협동조합</p>
                                    <p className="card-text">온앤온은 새로운 마케팅 방식을 제안하고, 이를 통해 제조업체들의 성장과 성공에 기여하고자 합니다.</p>
                                </div>
                            </div>
                            <div className="card card-company">
                                <div className="card-img-top">
                                    <img src="" className="card-company-img" alt="기업로고"/>
                                </div>
                                <div className="card-body">
                                    <p className="card-title">기업이름</p>
                                    <p className="card-text">기업에 대한 간략한
                                        설명asdfasdfasdfasdfasdfasdfasdfasdfasfafdsasdfasdfasdfasdfasdfsadfasdfasdfasdfsdafsda</p>
                                </div>
                            </div>
                            <div className="card card-company">
                                <div className="card-img-top">
                                    <img src="" className="card-company-img" alt="기업로고"/>
                                </div>
                                <div className="card-body">
                                    <p className="card-title">기업이름</p>
                                    <p className="card-text">기업에 대한 간략한
                                        설명asdfasdfasdfasdfasdfasdfasdfasdfasfafdsasdfasdfasdfasdfasdfsadfasdfasdfasdfsdafsda</p>
                                </div>
                            </div>
                        </div>
                    </div> */
                    }
                    {/* <div className="carousel-item">
                        hihi
                    </div> */}
                </Slider>
            </div>
        </section>
    )
}

export default ListBody;