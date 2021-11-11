import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';
import Partner from '../Partners/Partner';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <MenuBar></MenuBar>
            <Banner></Banner>
            <Products></Products>
            <Partner></Partner>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;