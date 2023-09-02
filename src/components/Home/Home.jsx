import React from 'react';
import './Home.css';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import SingleChef from './Chef/SingleChef/SingleChef';
import Chef from './Chef/Chef';

const Home = () => {
    return (
        <>
          <Hero></Hero>
          <Chef></Chef>
        </>
    );
};

export default Home;