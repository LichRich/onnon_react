import React from "react";

const Contact = () => {
    return (
        <section className="bg-dark" id="contact">
            <div className="container">
                <div className="row contact-row">
                    <div className="contact-caption" id="contact-caption">
                        <p className="contact-title" id="contact-title">Contact Us</p>
                        <p className="contact-desc">
                            <strong>주소:
                            </strong>충남 아산시 염치읍 현대로 244-12
                        </p>
                        <p className="contact-desc">
                            <strong>TEL:
                            </strong>041)532-1658
                        </p>
                        <p className="contact-desc">
                            <strong>FAX:
                            </strong>041)532-1659
                        </p>
                        <p className="contact-desc">
                            <strong>E-MAIL:
                            </strong>ceda63@hanmail.net
                        </p>
                    </div>
                    <div className="col-md-3 col-sm-6" id="contact-map">
                        <img src={process.env.PUBLIC_URL + "img/company/dongseo/fundamentals.svg"} className="" alt="" />
                    </div>
                </div>
            </div>
        </section>    
    )
}

export default Contact;