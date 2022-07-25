import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import second from '../assests/img/first.jpg';
import logo from "../assests/img/Jawaahir_logo.png";

const Contact = () => {
    return (
        <>
            <Navbar />
            <section className='bg-light p-5 mb-3'>
                <div className='container'>
                    <h6 className='text-warning'>Contact Us</h6>
                    <h5>Get in touch with us</h5>
                    <p>Ask us everything you need to know about the modrasah</p>
                </div>
            </section>
            <section className="mb-5">
                <div className="container p-3">
                    <div className="row d-flex justify-content-center align-items-center h-10">
                        <div className="col col-xl-10">
                            <div className="card" style={{ borderRadius: "1rem" }}>
                                <div className="row g-0">
                                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                                        <img src={second}
                                            alt="login form" className="img-fluid h-100" style={{ borderRadius: "1rem 0 0 1rem" }} />
                                    </div>
                                    <div className="col-md-6 col-lg-7 d-flex align-items-center bg-dark">
                                        <div className="card-body p-4 p-lg-5">
                                            <form>
                                                <div className="d-flex align-items-center mb-3 pb-1">
                                                <img src={logo} className='d-block m-auto' alt="JAWAAHIR" style={{ width: "80px"}}/>
                                                </div>

                                                <h5 className="fw-normal mb-3 pb-3 text-white" style={{ letterSpacing: "1px" }}>Contact</h5>
                                                
                                                <div className="form-outline mb-3">
                                                    <input type="text" id="form2Example17" className="form-control form-control-lg border-bottom" />
                                                    <label className="form-label text-white" for="form2Example17">Fullname</label>
                                                </div>

                                                <div className="form-outline mb-3">
                                                    <input type="email" id="form2Example17" className="form-control form-control-lg border-bottom" />
                                                    <label className="form-label text-white" for="form2Example17">Email address</label>
                                                </div>

                                                <div className="form-outline mb-3">
                                                    <input type="text" id="form2Example17" className="form-control form-control-lg border-bottom" />
                                                    <label className="form-label text-white" for="form2Example17">Subject</label>
                                                </div>

                                                <div className="form-outline mb-3">
                                                    <textarea name="" id="form2Example17" className='form-control form-control-lg border-bottom'></textarea>
                                                    <label className="form-label text-white">Message</label>
                                                </div>

                                                <div className="pt-1 mb-4">
                                                    <button className="btn btn-warning btn-lg btn-block" type="button">Send</button>
                                                </div>
                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Contact