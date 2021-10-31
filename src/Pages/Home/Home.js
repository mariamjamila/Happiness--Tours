import React from 'react';
import Booking from '../../Services/Booking/Booking';
import Tours from '../../Services/Tours/Tours';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Reviews from './Reviews/Reviews';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <h2> Come To Explore With Us</h2>
           <Tours></Tours>
           <Reviews></Reviews>
              <Footer></Footer>
        </div>
    );
};

export default Home;