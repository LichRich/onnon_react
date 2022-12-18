import React from "react";
import CompanyBody from '../components/CompanyBody';
import '../css/company_style.css';

const Company = ({settings}) => {
    return(
        <CompanyBody settings={settings} />
    )
}

export default Company;