import React from "react";
import About from "./company/About";
import Products from './company/Products';
import History from './company/History';
import Contact from './company/Contact';

const CompanyBody = () => {
    return (
        <div className="sections company-section">
            <About />
            {/* <Products /> */}
            <hr className="divider-w" />
            <History />
            {/* <Contact /> */}
        </div>
    )
}

export default CompanyBody;