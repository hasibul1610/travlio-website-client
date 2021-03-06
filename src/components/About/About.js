import React from 'react';
import './About.css';

const About = () => {
    return (
        <div>
            <div className="about-header-bg">
                <p className="container">About</p>
            </div>
            <div className="container mission">
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <img className="img-fluid" src="https://cdn.corporatefinanceinstitute.com/assets/business-deal.jpeg" alt="" />
                    </div>
                    <div className="col-lg-6 col-sm-12 mission-details">
                        <h3>Our Company</h3>
                        <h2>Mission Statement</h2>
                        <p>A travel agency is a private retailer or public service that provides travel and tourism-related services to the general public on behalf of accommodation or travel suppliers to offer different kinds of travelling packages for each destination. Travel agencies can provide outdoor recreation activities, airlines, car rentals, cruise lines, hotels, railways, travel insurance, package tours, insurance, guide books, VIP airport lounge access, arranging logistics for luggage and medical items delivery for travellers upon request, public transport timetables, car rentals, and bureau de change services. Travel agencies can also serve as general sales agents for airlines that do not have offices in a specific region.</p>

                    </div>
                </div>
            </div>
            <div className="container">
                <h2 className="text-center pt-4 mt-4">Meet Our Team</h2>
                <h3 className="text-center py-3">Professional & Dedicated Team</h3>
                <div className="team-members">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="team-member-card text-center">
                                <img src="http://g5p6r6b9.stackpathcdn.com/travlio/wp-content/uploads/2020/08/user-6.jpg" className="img-fluid" alt="" />
                                <div className="team-member-details text-center">
                                    <h3>John Doe</h3>
                                    <h5>Co-Founder</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="team-member-card text-center">
                                <img src="http://g5p6r6b9.stackpathcdn.com/travlio/wp-content/uploads/2020/08/user-7.jpg" className="img-fluid" alt="" />
                                <div className="team-member-details text-center">
                                    <h3>Deanna Rose</h3>
                                    <h5>Content Writer</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="team-member-card text-center">
                                <img src="http://g5p6r6b9.stackpathcdn.com/travlio/wp-content/uploads/2020/08/user-4.jpg" className="img-fluid" alt="" />
                                <div className="team-member-details text-center">
                                    <h3>Lori Ramos</h3>
                                    <h5>Front End Developer</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="team-member-card text-center">
                                <img src="http://g5p6r6b9.stackpathcdn.com/travlio/wp-content/uploads/2020/08/user-3.jpg" className="img-fluid" alt="" />
                                <div className="team-member-details text-center">
                                    <h3>Dominikus Yuri</h3>
                                    <h5>UI-UX Designer</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="team-member-card text-center">
                                <img src="http://g5p6r6b9.stackpathcdn.com/travlio/wp-content/uploads/2020/08/user-5.jpg" className="img-fluid" alt="" />
                                <div className="team-member-details text-center">
                                    <h3>Ralph Johnson</h3>
                                    <h5>Marketing</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="team-member-card text-center">
                                <img src="http://g5p6r6b9.stackpathcdn.com/travlio/wp-content/uploads/2020/08/user-2-1.jpg" className="img-fluid" alt="" />
                                <div className="team-member-details text-center">
                                    <h3>Adam Wilcard</h3>
                                    <h5>UI-UX Designer</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <br />
            <br />

        </div>
    );
};

export default About;