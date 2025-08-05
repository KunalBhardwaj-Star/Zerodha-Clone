import React from 'react'

import Navbar from '../NavBar';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Education from './Education';
import OpenAccount from '../OpenAccount';
import Footer from '../Footer';
import Pricing from './PricingComponent';


function HomePage() {
    return (
        //Fragments we use for each exports
        <>
          <Hero/>
          <Awards/>
          <Stats/>
          <Pricing/>
          <Education/>
          <OpenAccount/>
        </>
    );
}

export default HomePage;