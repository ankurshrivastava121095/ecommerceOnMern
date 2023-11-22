import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
    return (
        <>
            {/* breadcrumb starts */}
            <div className="container-fluid">
                <div className="row px-xl-5">
                    <div className="col-12">
                        <nav className="breadcrumb bg-light mb-30">
                            <Link className="breadcrumb-item text-dark" to="/">Home</Link>
                            <span className="breadcrumb-item active">Contact</span>
                        </nav>
                    </div>
                </div>
            </div>
            {/* breadcrumb ends */}

            <div className="container-fluid">
                <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Contact Us</span></h2>
                <div className="row px-xl-5">
                    <div className="col-lg-7 mb-5">
                        <div className="contact-form bg-light p-30">
                            <div id="success"></div>
                            <form name="sentMessage" id="contactForm" noValidate="noValidate">
                                <div className="control-group">
                                    <input type="text" className="form-control" id="name" placeholder="Your Name"
                                        required="required" data-validation-required-message="Please enter your name" />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group">
                                    <input type="email" className="form-control" id="email" placeholder="Your Email"
                                        required="required" data-validation-required-message="Please enter your email" />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group">
                                    <input type="text" className="form-control" id="subject" placeholder="Subject"
                                        required="required" data-validation-required-message="Please enter a subject" />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group">
                                    <textarea className="form-control" rows="8" id="message" placeholder="Message"
                                        required="required"
                                        data-validation-required-message="Please enter your message"></textarea>
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div>
                                    <button className="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton">Send
                                        Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-5 mb-5">
                        <div className="bg-light p-30 mb-3">
                            <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mr-3"></i>123 Street, New York, USA</p>
                            <p className="mb-2"><i className="fa fa-envelope text-primary mr-3"></i>info@example.com</p>
                            <p className="mb-2"><i className="fa fa-phone-alt text-primary mr-3"></i>+012 345 67890</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact