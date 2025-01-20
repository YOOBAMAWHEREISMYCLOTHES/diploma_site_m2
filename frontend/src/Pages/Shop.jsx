import React from 'react';
import Hero from '../Components/Hero/Hero';
import Popular from '../Components/Popular/Popular';
import Offers from '../Components/Offers/Offers';
import NewCollections from '../Components/NewCollections/NewCollections';
import Newsletter from '../Components/Newsletter/Newsletter';
import LogoSlider from '../Components/LogoSlider/LogoSlider';
import Testimonials from '../Components/Testimonials/Testimonials';
import HomeDescription from '../Components/HomeDescription/HomeDescription';

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <HomeDescription/>
      <Offers/>
      <LogoSlider/>
      <NewCollections id='newcollections'/>
      <Testimonials/>
      <Newsletter id='newsletter'/>
    </div>
  )
}

export default Shop;
