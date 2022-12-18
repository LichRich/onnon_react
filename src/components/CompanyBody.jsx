import React from "react";
import About from "./company/About";
import Products from './company/Products';
import History from './company/History';
import Contact from './company/Contact';
import License from "./company/License";

const CompanyBody = ({settings}) => {
    return (
        <div className="sections company-section">
            <About />
            <Products settings={settings} />
            <hr className="divider-w" />
            <History />
            <hr className="divider-w" />
            <License settings={settings} />
            <Contact />
        </div>
    )
}

export default CompanyBody;