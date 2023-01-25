import React from "react";

const Contact = ({data}) => {
    return (
        <section className="bg-dark" id="contact">
            <div className="container">
                <div className="row contact-row">
                    <div className="contact-caption" id="contact-caption">
                        <p className="contact-title" id="contact-title">Contact Us</p>
                        <p className="contact-desc">
                            <strong>주소:
                            </strong>{data.address}
                        </p>
                        <p className="contact-desc">
                            <strong>TEL:
                            </strong>{data.tel}
                        </p>
                        <p className="contact-desc">
                            <strong>FAX:
                            </strong>{data.fax}
                        </p>
                        <p className="contact-desc">
                            <strong>E-MAIL:
                            </strong>{data.email}
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