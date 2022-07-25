import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const About = () => {
  return (
    <>
      <Navbar />
      <section className='bg-light p-5mb-3'>
        <div className='container'>
          <h6 className='text-warning'>About</h6>
          <h5>Know More About Us</h5>
          <p>Everything you need to know about the modrasah</p>
        </div>
      </section>
      <section className='container'>
        <p className='text-justify'>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jawaahir Qur'an Academy is an Online Qur'an and Tajweed School for women and Children to learn how to read, recite and memorize the Quran.

          The Classes take place Online and Each session lasts between 30 to 45 minutes depending on the category or course taken. Some Classes last up to an hour.

          The Classes take place on Zoom or Skype, whichever the student finds preferable.

          At Jawaahir, our main Focus is teaching and spreading the Knowledge of Qur'an Recitation and Memorization with perfection, it's importance, benefits and to impact the women and the children of the Ummah, using the Qur'an and Hadeeth.
        </p>
      </section>

      <Footer />
    </>
  )
}

export default About