import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../../Services/Services';
import Blog from '../../Blog/Blog';

const Home = () => {
    return (
        <div className='m-10'>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Blog></Blog>
        </div>
    );
};

export default Home;