import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import second from '../assests/img/first.jpg';
import logo from "../assests/img/Jawaahir_logo.png";
import { useFormik } from 'formik';
import * as  yup from "yup";
import emailjs from 'emailjs-com';
// import { useRef } from 'react';
import axios from 'axios';

const Contact = () => {
    // const send = useRef()
    const formik = useFormik({
        initialValues: {
            fullname: "",
            email: "",
            subject: "",
            message: "",
        },
    onSubmit: async(values) => {
        await emailjs.send("service_jkzltlr", "template_2j4cya9", values, "u9pVSg4WmaQm-ZK0i")
        .catch((result) => {
            console.log(result.text);
        },(error) => {
            console.log(error.text);
        });
        formik.resetForm();
    },
        validationSchema: yup.object({
            email: yup.string().required('This field is required'),
            fullname: yup.string().required('This field is required'),
            subject: yup.string().required('This field is required'),
            message: yup.string().required('This field is required'),
        })
    })
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
                                            <form onSubmit={formik.handleSubmit}>
                                                <div className="d-flex align-items-center mb-3 pb-1">
                                                <img src={logo} className='d-block m-auto' alt="JAWAAHIR" style={{ width: "80px"}}/>
                                                </div>

                                                <h5 className="fw-normal mb-3 pb-3 text-white" style={{ letterSpacing: "1px" }}>Contact</h5>
                                                
                                                <div className="form-outline mb-3">
                                                    <input type="text" id="form2Example17" class="form-control form-control-lg border-bottom" className={formik.errors.fullname ? "form-control form-control-lg border-bottom is-invalid" : "form-control form-control-lg border-bottom"} name='fullname' onChange={formik.handleChange} value={formik.values.fullname} onBlur={formik.handleBlur}/>
                                                    <label className="form-label text-white">Fullname <sup className='text-danger'>*</sup></label>
                                                </div>
                                                {formik.touched.fullname && <p className='text-danger fs-6-auto ms-auto'>{formik.errors.fullname}</p>}

                                                <div className="form-outline mb-3">
                                                    <input type="email" id="form2Example17" class="form-control form-control-lg border-bottom" className={formik.errors.email ? "form-control form-control-lg border-bottom is-invalid" : "form-control form-control-lg border-bottom"} name='email' onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur}/>
                                                    <label className="form-label text-white">Email address <sup className='text-danger'>*</sup></label>
                                                </div>
                                                {formik.touched.email && <p className='text-danger fs-6-auto ms-auto'>{formik.errors.email}</p>}

                                                <div className="form-outline mb-3">
                                                    <input type="text" id="form2Example17" class="form-control form-control-lg border-bottom" className={formik.errors.subject ? "form-control form-control-lg border-bottom is-invalid" : "form-control form-control-lg border-bottom"} name='subject' onChange={formik.handleChange} value={formik.values.subject} onBlur={formik.handleBlur}/>
                                                    <label className="form-label text-white">Subject <sup className='text-danger'>*</sup></label>
                                                </div>
                                                {formik.touched.subject && <p className='text-danger fs-6-auto ms-auto'>{formik.errors.subject}</p>}

                                                <div className="form-outline mb-3">
                                                    <textarea id="form2Example17" class='form-control form-control-lg border-bottom' className={formik.errors.message ? "form-control form-control-lg border-bottom is-invalid" : "form-control form-control-lg border-bottom"} name='message' onChange={formik.handleChange} value={formik.values.message} onBlur={formik.handleBlur}></textarea>
                                                    <label className="form-label text-white">Message <sup className='text-danger'>*</sup></label>
                                                </div>
                                                {formik.touched.message && <p className='text-danger fs-6-auto ms-auto'>{formik.errors.message}</p>}

                                                <div className="pt-1 mb-4">
                                                    <button className="btn btn-warning btn-lg btn-block" type="submit">Send</button>
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