import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const About = () => {
  return (
    <>
        <Navbar />
        <section className='bg-light p-5'>
                <div className='container'>
                    <h6 className='text-warning'>About</h6>
                    <h5>Know More About Us</h5>
                    <p>Everything you need to know about the modrasah</p>
                </div>
            </section>


        <Footer />
    </>
  )
}

export default About