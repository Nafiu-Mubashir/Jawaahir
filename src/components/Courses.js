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
            <section className="container p3 mt-4">
                <h4 className='text-center'>Jawaahir Courses</h4>
                <p className="text-center">These are the courses with duration that are offered in Jawwaahir.</p>
                <div className="p-3 row courses">
                    <h5>KIDDIES QURAN COURSES</h5>
                    <p>The Qur'an courses for the kids are in levels. Your kid will need to complete one before going to the next.
                        You can choose the category you want your kid to join and let us know:
                        All Classes are one to one and they hold on either Zoom or Skype.
                        Each session lasts between 45 minutes to an hour.  and the Classes hold on Zoom or Skype. Each session lasts between 45 minutes to an hour.
                        Classes hold on Zoom or Skype. Some students prefer WhatsApp or Telegram which is fine too.</p>
                    <div className="col-md-6 col-lg-3 mt-md-2">
                        <div className="card p-2">
                            <div className="card-body">
                                <h4 className='text-warning'>Level One</h4>
                                <hr className='text-warning' />
                                <p className='fw-bold'>Learning identification of Arabic letters and their forms.</p>
                                <p>PAYMENTS ARE ACCEPTED IN NAIRA, £ AND $</p>
                                <ol class="list-group list-group-light list-group-numbered">
                                    <li class="list-group-item d-flex justify-content-between align-items-start">
                                        <div class="ms-2 me-auto">
                                            <div class="fw-bold">Students based in Nigeria pay in Naira</div>
                                            <p>Classes for Three times weekly to 12 sessions monthly costs 25000naira.</p>
                                            <p>Classes for Four times weekly to 16 sessions monthly costs 35000naira.</p>
                                        </div>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-start">
                                        <div class="ms-2 me-auto">
                                            <div class="fw-bold">Students based in UK pay in £</div>
                                            <p>Classes for three times weekly to 12 sessions monthly costs 50£.</p>
                                            <p>Classes for four times weekly to 16 sessions monthly costs 70£.</p>
                                        </div>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-start">
                                        <div class="ms-2 me-auto">
                                            <div class="fw-bold">Students based in other countries pay in $.</div>
                                            <p>Classes for twice weekly to 8 sessions monthly costs 50$.</p>
                                            <p>Classes for three times weekly to 12 sessions monthly costs 70$.</p>
                                        </div>
                                    </li>
                                </ol>
                                <div><button className="btn btn-warning">Register</button></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 mt-md-2">
                        <div className="card">
                            <div className="card-body">
                                <h4 className='text-warning'>Level Two</h4>
                                <hr className='text-warning' />
                                <p className='fw-bold'>How to write Arabic letters.</p>
                                <p>PAYMENTS ARE ACCEPTED IN NAIRA, £ AND $</p>
                                <ol class="list-group list-group-light list-group-numbered">
                                    <li class="list-group-item d-flex justify-content-between align-items-start">
                                        <div class="ms-2 me-auto">
                                            <div class="fw-bold">Students based in Nigeria pay in Naira</div>
                                            <p>Classes for Three times weekly to 12 sessions monthly costs 25000naira.</p>
                                            <p>Classes for Four times weekly to 16 sessions monthly costs 35000naira.</p>
                                        </div>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-start">
                                        <div class="ms-2 me-auto">
                                            <div class="fw-bold">Students based in UK pay in £</div>
                                            <p>Classes for three times weekly to 12 sessions monthly costs 50£.</p>
                                            <p>Classes for four times weekly to 16 sessions monthly costs 70£.</p>
                                        </div>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-start">
                                        <div class="ms-2 me-auto">
                                            <div class="fw-bold">Students based in other countries pay in $.</div>
                                            <p>Classes for twice weekly to 8 sessions monthly costs 50$.</p>
                                            <p>Classes for three times weekly to 12 sessions monthly costs 70$.</p>
                                        </div>
                                    </li>
                                </ol>
                                <div><button className="btn btn-warning">Register</button></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 mt-md-2">
                        <div className="card">
                            <div className="card-body">
                                <h4 className='text-warning'>Level Three</h4>
                                <hr className='text-warning' />
                                <p className='fw-bold'>How to read and write Arabic words</p>
                                <p>PAYMENTS ARE ACCEPTED IN NAIRA, £ AND $</p>
                                <ol class="list-group list-group-light list-group-numbered">
                                    <li class="list-group-item d-flex justify-content-between align-items-start">
                                        <div class="ms-2 me-auto">
                                            <div class="fw-bold">Students based in Nigeria pay in Naira</div>
                                            <p>Classes for Three times weekly to 12 sessions monthly costs 25000naira.</p>
                                            <p>Classes for Four times weekly to 16 sessions monthly costs 35000naira.</p>
                                        </div>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-start">
                                        <div class="ms-2 me-auto">
                                            <div class="fw-bold">Students based in UK pay in £</div>
                                            <p>Classes for three times weekly to 12 sessions monthly costs 50£.</p>
                                            <p>Classes for four times weekly to 16 sessions monthly costs 70£.</p>
                                        </div>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-start">
                                        <div class="ms-2 me-auto">
                                            <div class="fw-bold">Students based in other countries pay in $.</div>
                                            <p>Classes for twice weekly to 8 sessions monthly costs 50$.</p>
                                            <p>Classes for three times weekly to 12 sessions monthly costs 70$.</p>
                                        </div>
                                    </li>
                                </ol>
                                <div><button className="btn btn-warning">Register</button></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 mt-md-2">
                        <div className="card">
                            <div className="card-body">
                                <h4 className='text-warning'>Level Four</h4>
                                <hr className='text-warning' />
                                <p className='fw-bold'>How to read sentences</p>
                                <p>PAYMENTS ARE ACCEPTED IN NAIRA, £ AND $</p>
                                <ol class="list-group list-group-light list-group-numbered">
                                    <li class="list-group-item d-flex justify-content-between align-items-start">
                                        <div class="ms-2 me-auto">
                                            <div class="fw-bold">Students based in Nigeria pay in Naira</div>
                                            <p>Classes for Three times weekly to 12 sessions monthly costs 25000naira.</p>
                                            <p>Classes for Four times weekly to 16 sessions monthly costs 35000naira.</p>
                                        </div>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-start">
                                        <div class="ms-2 me-auto">
                                            <div class="fw-bold">Students based in UK pay in £</div>
                                            <p>Classes for three times weekly to 12 sessions monthly costs 50£.</p>
                                            <p>Classes for four times weekly to 16 sessions monthly costs 70£.</p>
                                        </div>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-start">
                                        <div class="ms-2 me-auto">
                                            <div class="fw-bold">Students based in other countries pay in $.</div>
                                            <p>Classes for twice weekly to 8 sessions monthly costs 50$.</p>
                                            <p>Classes for three times weekly to 12 sessions monthly costs 70$.</p>
                                        </div>
                                    </li>
                                </ol>
                                <div><button className="btn btn-warning">Register</button></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 mt-md-2">
                        <div className="card">
                            <div className="card-body">
                                <h4 className='text-warning'>Level Five</h4>
                                <hr className='text-warning' />
                                <p className='fw-bold'>Learning recitation from Suratun  Naas till Naba' </p>
                                <p>PAYMENTS ARE ACCEPTED IN NAIRA, £ AND $</p>
                                <ol class="list-group list-group-light list-group-numbered">
                                    <li class="list-group-item d-flex justify-content-between align-items-start">
                                        <div class="ms-2 me-auto">
                                            <div class="fw-bold">Students based in Nigeria pay in Naira</div>
                                            <p>Classes for Three times weekly to 12 sessions monthly costs 25000naira.</p>
                                            <p>Classes for Four times weekly to 16 sessions monthly costs 35000naira.</p>
                                        </div>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-start">
                                        <div class="ms-2 me-auto">
                                            <div class="fw-bold">Students based in UK pay in £</div>
                                            <p>Classes for three times weekly to 12 sessions monthly costs 50£.</p>
                                            <p>Classes for four times weekly to 16 sessions monthly costs 70£.</p>
                                        </div>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-start">
                                        <div class="ms-2 me-auto">
                                            <div class="fw-bold">Students based in other countries pay in $.</div>
                                            <p>Classes for twice weekly to 8 sessions monthly costs 50$.</p>
                                            <p>Classes for three times weekly to 12 sessions monthly costs 70$.</p>
                                        </div>
                                    </li>
                                </ol>
                                <div><button className="btn btn-warning">Register</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <Footer />
        </>
    )
}

export default Courses