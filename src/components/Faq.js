import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer'

const Faq = () => {
    return (
        <>
            <Navbar />
            <section className='bg-light p-5'>
                <div className='container'>
                    <h6 className='text-warning'>The FAQs</h6>
                    <h4>Help Center</h4>
                    <p>Everything you need to know about the modrasah</p>
                </div>
            </section>
            <section className="container p-3">
                {/* <h2 className=''>Have a <span className='text-warning'>Question?</span></h2> */}
                <h5>Frequently asked questions</h5>
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button text-warning" type="button" data-mdb-toggle="collapse"
                            data-mdb-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            ‌HOW LONG IS EACH SESSION?
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne">
                        <div className="accordion-body">
                            <p>
                            Duration varies depending on the level and course taken. Each class lasts between 45 minutes to 1Hour.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed text-warning" type="button" data-mdb-toggle="collapse"
                            data-mdb-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseTwo">
                            ‌HOW LONG ARE THE COURSES? Weeks or  months?
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo">
                        <div className="accordion-body">
                            <p>
                            Only Group classes have stipulated period. The Duration for Private classes vary depending on the student and level. Before commencing, The Student can discuss their capability and schedules with Teacher. Thereby, conclude on a stipulated duration to complete.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed text-warning" type="button" data-mdb-toggle="collapse"
                            data-mdb-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseThree">
                            ‌WHAT BOOKS DO YOU USE?
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree">
                        <div className="accordion-body">
                            <p>
                            Books vary depending on the course. Students will be informed of needed books in advance before commencing their course.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button text-warning collapsed" type="button" data-mdb-toggle="collapse"
                            data-mdb-target="#panelsStayOpen-collapseFour" aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseFour">
                            ‌DO YOU TEACH BOYS?
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour">
                        <div className="accordion-body">
                            <p>Yes, boys up to age 12.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                        <button className="accordion-button text-warning collapsed" type="button" data-mdb-toggle="collapse"
                            data-mdb-target="#panelsStayOpen-collapseFive" aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseFive">
                            WHAT'S THE PAYMENT PLAN?
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive">
                        <div className="accordion-body">
                            <p>Payments are usually received before commencement of the Classes. A free trial is considerable. Special payment plans can be discussed. Payment reminders will be sent once payment is due.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSix">
                        <button className="accordion-button text-warning collapsed" type="button" data-mdb-toggle="collapse"
                            data-mdb-target="#panelsStayOpen-collapseSix" aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseSix">
                            ‌WHAT HAPPENS WHEN MY COURSE ENDS?
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix">
                        <div className="accordion-body">
                            <p>Students who like to learn more can advance to the next level, there are different levels available. Once a student is done with one, she can choose to move to the next.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSeven">
                        <button className="accordion-button text-warning collapsed" type="button" data-mdb-toggle="collapse"
                            data-mdb-target="#panelsStayOpen-collapseSeven" aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseSeven">
                            ‌WHAT HAPPENS IF I'M LATE WITH PAYMENT?
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSeven">
                        <div className="accordion-body">
                            <p>We encourage you to let us know in advance to avoid paying an extra charge for the late week. </p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEight">
                        <button className="accordion-button text-warning collapsed" type="button" data-mdb-toggle="collapse"
                            data-mdb-target="#panelsStayOpen-collapseEight" aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseEight">
                            DO YOU OFFER REFUNDS?
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseSix" className="accordion-collapse collapse" aria-labelledby="headingEight">
                        <div className="accordion-body">
                            <p>No. This depends on the circumstance.  We encourage you to clarify and  contact us before making payments. </p>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            <Footer />
        </>
    )
}

export default Faq