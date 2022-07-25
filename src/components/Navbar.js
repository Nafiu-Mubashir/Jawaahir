import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assests/img/Jawaahir_logo.png";

function Navbar() {
    return (
        <>
            {/* <!-- Navbar --> */}
            {/* <header className='text-warning fixed-top'>
                <div className='container d-flex justify-content-between'>
                    <div>
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-instagram ms-3"></i>
                    <i className="fa-brands fa-whatsapp ms-3"></i>
                    </div>
                    <div className=" d-flex">
                        <p>(+231) 803-3918-7401</p>
                        <p className='ms-3'>jawaahir@gmail.com</p>
                    </div>
                </div>
            </header> */}
            <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
                <div className="container">
                    <a className="navbar-brand text-warning" href="/">
                        <img src={logo} alt="JAWAAHIR" style={{ width: "40px"}}/>
                    </a>
                    <button
                        className="navbar-toggler btn-white"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">

                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className='nav-item'><Link to="/" className='nav-link text-warning'>Home</Link></li>
                            <li className='nav-item'><Link to="/about" className='nav-link text-warning'>About</Link></li>
                            <li className='nav-item'><Link to="/courses" className='nav-link text-warning'>Courses</Link></li>
                            <li className='nav-item'><Link to="/faq" className='nav-link text-warning'>FAQs</Link></li>
                            <li className='nav-item'><Link to="/contact" className='nav-link text-warning'>Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <a href="#" data-activates="slide-out" className="btn btn-primary p-3 button-collapse"><i className="fas fa-bars"></i></a>
    
        </>
    )
}

export default Navbar