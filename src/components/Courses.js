import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

function Courses() {
    return (
        <>
            <Navbar />
            <section className='bg-light p-5'>
                <div className='container'>
                    <h6 className='text-warning'>Courses</h6>
                    <h5>Check out our courses</h5>
                    <p>Everything you need to know about the modrasah</p>
                </div>
            </section>


            <Footer />
        </>
    )
}

export default Courses