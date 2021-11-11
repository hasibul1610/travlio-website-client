import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (
        <div>

            <div className="contact-header-bg">
                <p className="container">Contact</p>
            </div>
            <div className="contact-form container">
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <img className="img-fluid" src="http://g5p6r6b9.stackpathcdn.com/travlio/wp-content/uploads/2020/09/about.png" alt="" />
                    </div>
                    <div className="col-lg-6 col-sm-12 mission-details">

                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Your Name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Subject</Form.Label>
                                <Form.Control type="text" placeholder="Subject" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Button className="contact-btn" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;