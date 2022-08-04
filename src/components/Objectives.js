import React from 'react';
import quran from '../assests/img/quran.webp';
import hadith from '../assests/img/hadith.jfif';
import tajweeed from '../assests/img/tajweed.png';
import arrobiyyah from '../assests/img/arobiyyah.jpg';

function Objectives() {
    return (
        <>
        {/* {09138966978} */}
            <div className="container p-3 mt-4">
                <div className='w-50 m-auto'>
                    <h4 className="text-warning text-center">Our Puropose</h4>
                    <p className="text-center" style={{ fontSize: "12px" }}>There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think about setting up your own viewing station.</p>
                </div>
                <div className="row w-75 m-auto g-0">
                    <div className="col-md-4 m-auto">
                        <div className="card shadow">
                            <div className="card-body p-3">
                                <h5 className="text-center text-warning">Our Aims</h5>
                                <p className='text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nesciunt mollitia necessitatibus quisquam! Officiis, sint eos. Corrupti, ratione cupiditate voluptates voluptatibus sed error itaque quibusdam sit dolorem? Corrupti, suscipit cum!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 m-auto objs">
                        <div className="card shadow">
                            <div className="card-body p-3">
                                <h5 className="text-center text-warning">Our Objectives</h5>
                                <p className='text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nesciunt mollitia necessitatibus quisquam! Officiis, sint eos. Corrupti, ratione cupiditate voluptates voluptatibus sed error itaque quibusdam sit dolorem? Corrupti, suscipit cum!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container p-3 obj mt-5">
                <div className='mb-3'>
                    <h4 className='text-warning text-center'>Our Courses</h4>
                    <p className='text-center w-50 m-auto' style={{ fontSize: "12px" }}>These are the set of courses offered at Jawaahir</p>
                </div>
                <div className="row p-2 m-auto">
                    <div className="col-md-3">
                        <div className="card shadow">
                            <div className="card-body p-3">
                                <img src={quran} className='rounded-circle d-block m-auto shadow-1-strong mb-3' alt="avatar"
                                style={{ width: "120px", height: "120px"}}  />
                                <p className='text-center fw-bold'>Quran Memorization/Murojaah</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card shadow">
                            <div className="card-body p-3">
                            <img src={hadith} className='rounded-circle d-block m-auto shadow-1-strong mb-3' alt="avatar"
                                style={{ width: "120px", height: "120px"}}  />
                                <p className='text-center fw-bold'>Hadeeth</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card shadow">
                            <div className="card-body p-3">
                            <img src={tajweeed} className='rounded-circle d-block m-auto shadow-1-strong mb-3' alt="avatar"
                                style={{ width: "120px", height: "120px"}}  />
                                <p className='text-center fw-bold'>Tajweed</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card shadow">
                            <div className="card-body p-3">
                            <img src={arrobiyyah} className='rounded-circle d-block m-auto shadow-1-strong mb-3' alt="avatar"
                                style={{ width: "120px", height: "120px"}}  />
                                <p className='text-center fw-bold'>Arabiyyah</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Objectives