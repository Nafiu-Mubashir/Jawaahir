import React from 'react'

function Testimonies() {
    return (
        <>
            <div className="container p-3 mt-5">
                <div className='w-50 m-auto'>
                    <h4 className="text-warning text-center">Remarks</h4>
                    <p className='text-center' style={{ fontSize: "12px" }}>There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think about setting up your own viewing station.</p>
                    {/* <div class="line-mf" style={{background: "#5DC530"}}></div> */}
                </div>
                <div id="carouselExampleControls" class="carousel slide text-center carousel-dark" data-mdb-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="rounded-circle shadow-1-strong mb-4"
                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar"
                                style={{ width: "150px" }} />
                            <div class="row d-flex justify-content-center">
                                <div class="col-lg-8">
                                    <h5 class="mb-3">Maria Kate</h5>
                                    <p>Photographer</p>
                                    <p class="text-muted">
                                        <i class="fas fa-quote-left pe-2"></i>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
                                        nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia
                                        fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit
                                        doloremque.
                                    </p>
                                </div>
                            </div>
                            <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
                                <li><i class="fas fa-star fa-sm"></i></li>
                                <li><i class="fas fa-star fa-sm"></i></li>
                                <li><i class="fas fa-star fa-sm"></i></li>
                                <li><i class="fas fa-star fa-sm"></i></li>
                                <li><i class="far fa-star fa-sm"></i></li>
                            </ul>
                        </div>
                        <div class="carousel-item">
                            <img class="rounded-circle shadow-1-strong mb-4"
                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp" alt="avatar"
                                style={{ width: "150px" }} />
                            <div class="row d-flex justify-content-center">
                                <div class="col-lg-8">
                                    <h5 class="mb-3">John Doe</h5>
                                    <p>Web Developer</p>
                                    <p class="text-muted">
                                        <i class="fas fa-quote-left pe-2"></i>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
                                        nesciunt sint eligendi reprehenderit reiciendis.
                                    </p>
                                </div>
                            </div>
                            <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
                                <li><i class="fas fa-star fa-sm"></i></li>
                                <li><i class="fas fa-star fa-sm"></i></li>
                                <li><i class="fas fa-star fa-sm"></i></li>
                                <li><i class="fas fa-star fa-sm"></i></li>
                                <li><i class="far fa-star fa-sm"></i></li>
                            </ul>
                        </div>
                        <div class="carousel-item">
                            <img class="rounded-circle shadow-1-strong mb-4"
                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" alt="avatar" style={{ width: "150px" }} />
                            <div class="row d-flex justify-content-center">
                                <div class="col-lg-8">
                                    <h5 class="mb-3">Anna Deynah</h5>
                                    <p>UX Designer</p>
                                    <p class="text-muted">
                                        <i class="fas fa-quote-left pe-2"></i>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
                                        nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia
                                        fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit
                                        doloremque.
                                    </p>
                                </div>
                            </div>
                            <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
                                <li><i class="fas fa-star fa-sm"></i></li>
                                <li><i class="fas fa-star fa-sm"></i></li>
                                <li><i class="fas fa-star fa-sm"></i></li>
                                <li><i class="fas fa-star fa-sm"></i></li>
                                <li><i class="far fa-star fa-sm"></i></li>
                            </ul>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-mdb-target="#carouselExampleControls"
                        data-mdb-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        {/* <span class="visually-hidden">Previous</span> */}
                    </button>
                    <button class="carousel-control-next" type="button" data-mdb-target="#carouselExampleControls"
                        data-mdb-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        {/* <span class="visually-hidden">Next</span> */}
                    </button>
                </div>
            </div>
            <div className='students p-5 mt-4'>
                <div className='mt-5'>
                    <h3 className='text-white text-center mb-4'>BECOME A STUDENT</h3>
                    <p className='text-white text-center w-50 m-auto mb-4'>There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think about setting up your own viewing station whether that is on the deck</p>
                    <button className='btn btn-outline-warning d-block m-auto mb-' data-mdb-toggle="modal" data-mdb-target="#exampleModal">Apply to be a student</button>
                </div>
            </div>

            {/* <button type="button" className="btn btn-primary" data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                Launch demo modal
            </button> */}
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content bg-dark text-light">
                        <div className="modal-header">
                            <h6 className="modal-title" id="exampleModalLabel">Register Here</h6>
                            <button type="button" class="btn-close btn-white" data-mdb-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body p-5">
                            <div className="container">
                                <div className='mb-3'>
                                    <p>To register for kids <a href="https://my.forms.app/form/62d979826535fb624aea12cd" target='blank' className='text-warning'>click here</a></p>
                                </div>
                                <div className='mb-3'>
                                    <p>To register for adult <a href="https://my.forms.app/form/5ee4a057b81c7e35cb551c23" target='blank' className='text-warning'>click here</a></p>
                                </div>
                            </div>
                        </div>
                        {/* <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonies