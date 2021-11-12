import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AllPackages.css';

const AllPackages = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch("https://peaceful-wildwood-29357.herokuapp.com/allPackages")
            .then(res => res.json())
            .then(data => setPackages(data));

    }, [])
    return (
        <div>
            <p className="text-center pt-5">Popular Travel Packages</p>
            <h2 className="text-center">Featured Travel Packages</h2>
            <div className="all-packages">
                <Container>
                    <div className="row">
                        {
                            packages?.map(pg => (
                                <div className="col-lg-4">
                                    <div className="package">
                                        <div className="package-img">
                                            <img src={pg?.image} alt="" />
                                        </div>
                                        <div className="package-details">
                                            <p>{pg?.location}</p>
                                            <h4>{pg?.name}</h4>
                                            <p>From ${pg?.price}</p>
                                            <Link to={`/booking/${pg?._id}`}>
                                                <button className="btn btn-success">Add To Cart</button>
                                            </Link>

                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </Container>
            </div>

        </div>
    );
};

export default AllPackages;