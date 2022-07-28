import React from 'react'

const Staffs = () => {
    return (
        <>
            <div className='container p-3 mt-5'>
                <div className='mb-3'>
                    <h3 className='text-warning text-center'>Meet Our Teachers</h3>
                    <p className='text-center w-50 m-auto' style={{ fontSize: "12px" }}>There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think about setting up your own viewing station.</p>
                </div>
                <div className="d-flex justify-content-evenly p-4 staff">
                    <div>
                        <img src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" class="rounded-circle mb-3 d-block m-auto" style={{ width: "150px" }}
                            alt="Avatar" />

                        <h5 class="mb-2 text-center"><strong>John Doe</strong></h5>
                        <p class="text-muted text-center">Web designer <span class="badge bg-primary">PRO</span></p>
                    </div>
                    <div>
                        <img src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" class="rounded-circle mb-3 d-block m-auto" style={{ width: "150px" }}
                            alt="Avatar" />

                        <h5 class="mb-2 text-center"><strong>John Doe</strong></h5>
                        <p class="text-muted text-center">Web designer <span class="badge bg-primary">PRO</span></p>
                    </div>
                    <div>
                        <img src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" class="rounded-circle mb-3 d-block m-auto" style={{ width: "150px" }}
                            alt="Avatar" />

                        <h5 class="mb-2 text-center"><strong>John Doe</strong></h5>
                        <p class="text-muted text-center">Web designer <span class="badge bg-primary">PRO</span></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Staffs