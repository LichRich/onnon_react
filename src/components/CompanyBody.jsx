import React, { useEffect, useState } from "react";
import About from "./company/About";
import Products from './company/Products';
import History from './company/History';
import Contact from './company/Contact';
import License from "./company/License";
import { useLocation } from "react-router-dom";
import {firestore} from "../firebaseConfig";
import {collection, doc, getDoc} from 'firebase/firestore';

const CompanyBody = ({settings}) => {

    const location = useLocation();
    const id = location.state.id;

    const [dataA, setDataA] = useState([]);
    const [dataC, setDataC] = useState([]);

    const companyRef = doc(firestore, "companies", id);
    const collections = {
        license: collection(firestore, "companies/"+id+"/license"),
        products: collection(firestore, "companies/"+id+"/products"),
        history: collection(firestore, "companies/"+id+"/history"),
    }
    useEffect(() => {
        const getCompany = async () => {
            const documentSnapshot = await getDoc(companyRef);
            setDataA({
                name: documentSnapshot.data().name,
                bLogo: documentSnapshot.data().bLogo,
                desc: documentSnapshot.data().desc,
                bg: documentSnapshot.data().bg,
            });
            setDataC({
                address: documentSnapshot.data().address,
                tel: documentSnapshot.data().tel,
                fax: documentSnapshot.data().fax,
                email: documentSnapshot.data().email,
            })
        }
        getCompany();
    }, [])

    return (
        <div className="sections company-section">
            <About data={dataA} />
            <Products settings={settings} data={collections.products} />
            <hr className="divider-w" />
            <History data={collections.history} />
            <hr className="divider-w" />
            <License settings={settings} data={collections.license} />
            <Contact data={dataC} />
        </div>
    )
}

export default CompanyBody;