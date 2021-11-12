import React from 'react';
import AllPackages from '../AllPackages/AllPackages';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Event from '../Event/Event';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <Banner></Banner>
            <AllPackages></AllPackages>
            <br />
            <br />
            <br />
            <Event></Event>
            <br />
            <br />
            <br />
            <Blog></Blog>
        </div>
    );
};

export default Home;