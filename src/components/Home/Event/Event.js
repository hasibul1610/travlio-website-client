import React from 'react';
import { Container } from 'react-bootstrap';
import './Event.css';

const Event = () => {
    return (
        <div className="event">
            <p className="text-center my-2 pt-5">Trending Event of The Week</p>
            <h2 className="text-center my-2 pb-5">Trending Event</h2>
            <div className="event-container">
                <Container>
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-6">
                            <h2 className="text-white">584</h2>
                            <p className="text-white">Top local Guides</p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6">
                            <h2 className="text-white">7,410</h2>
                            <p className="text-white">Winter Destinations</p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6">
                            <h2 className="text-white">680</h2>
                            <p className="text-white">New Tours</p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6">
                            <h2 className="text-white">2,540</h2>
                            <p className="text-white">Happy travelers</p>
                        </div>

                    </div>
                </Container>

            </div>

        </div>
    );
};

export default Event;