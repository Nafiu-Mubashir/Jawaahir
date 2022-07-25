import React from 'react';
import Navbar from './Navbar';
import Carousel from './Carousel';
import Objectives from './Objectives';
import Testimonies from './Testimonies';
import Footer from './Footer';
import Staffs from './Staffs';

function Home() {
  return (
    <>
        <Navbar />
        <Carousel />
        <Objectives />
        <Staffs />
        <Testimonies />
        <Footer />
    </>
  )
}

export default Home