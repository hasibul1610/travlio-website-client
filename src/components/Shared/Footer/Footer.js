import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className="footer-bg">
                <Container>
                    <div className="row footer-links">
                        <div className="col-lg-3 col-sm-12">
                            <h2 className="text-white">Travlio</h2>
                            <ul>
                                <li className="fw-bold">Email:</li>
                                <li>bcse.hasibul@gmail.com</li>
                                <br />
                                <li className="fw-bold">Call:</li>
                                <li>+880765471227</li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-sm-12">
                            <h4 className="text-white">Quick Links</h4>
                            <ul>
                                <li>About</li>
                                <li>Contact</li>
                                <li>My Account</li>
                                <li>Confirmation</li>
                                <li>Terms & Conditions</li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-sm-12">
                            <h4 className="text-white">Categories</h4>
                            <ul>
                                <li>Travel</li>
                                <li>Lifestyle</li>
                                <li>Fashion</li>
                                <li>Destinations</li>
                                <li>Food & Drinks</li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-sm-12">
                            <h4 className="text-white">Useful Links</h4>
                            <ul>
                                <li>Tour</li>
                                <li>Event</li>
                                <li>Hostel</li>
                                <li>Car</li>
                                <li>Hostel</li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="footer-bottom-bg">
                <p className="py-4 text-center text-white">Copyright 2021 || Designed By Md Hasibul Islam Shanto</p>


            </div>
        </div>
    );
};

export default Footer;