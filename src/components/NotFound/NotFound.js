import React from 'react';
import { NavLink } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found">
            <div className="img-top">
                <img className="img-fluid" src="http://g5p6r6b9.stackpathcdn.com/travlio/wp-content/themes/travlio/images/404.png" alt="" />
            </div>
            <br />
            <br />
            <NavLink to="/home">
                <div className="text-center my-3">
                    <button className="back-to-home-btn">back to home</button>
                </div>
            </NavLink>
        </div>
    );
};

export default NotFound;