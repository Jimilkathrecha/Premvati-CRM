import React from 'react'

const Header = () => {
    return (
        <>
            <div className='d-flex justify-content-between align-items-center bg-gark-white pr-10'>
                <div className='d-flex align-items-center'>
                    <div className='menu'>
                        <i class="fa-solid fa-bars"></i>
                    </div>
                    <div className='logo'>  <img src="/img/premvati_logo.png" alt="" /></div>
                </div>
                <div className='h-r-div'>
                    <div className='d-flex'>
                        {/* <span>Icon</span> */}
                        <h6 className='ms-2'>CASH BAL-20155</h6>
                    </div>
                    <div className='ms-3 d-flex flex-column'>
                        <div className='d-flex '>
                            <div className='d-flex'>
                                <input id="file" type="file" hidden />
                                <label className="avatar" for="file">
                                    <span className='profile'>
                                        <i className="fa-solid fa-user"></i>
                                    </span>
                                </label>
                            </div>
                            <div className='ms-2'>
                                <div className='d-flex'>
                                    <span>9512214441 - </span>
                                    <h6>Billberry Bal: 0</h6>
                                </div>
                                <div className=''>Reward Points : 0 </div>
                            </div>
                        </div>
                    </div>

                    <div className=' ms-3 end-day'>
                        <span className='tx-org'><i class="fa-regular fa-clock"></i></span>
                        <h5 className='ms-2'>END DAY</h5>
                    </div>
                    <div className='d-flex ms-3'>
                        <div className="">
                            <button className='avatar'>
                                <img className='cal-img'  src='/img/calendar.png'/>
                                </button>
                        </div>
                        <div className='d-flex flex-column ms-2'>
                            <span>23 Jan 2021</span>
                            <span>11:25:50</span>
                        </div>
                    </div>

                    <div className='d-flex ms-2'>
                        <input id="file" type="file" hidden />
                        <label className="avatar" for="file">
                            <span className='profile'>
                                <i className="fa-solid fa-user"></i>
                            </span>
                        </label>
                    </div>
                    <div className='ms-2'>BHAKTI PATEL</div>
                    <div className='ms-2'>
                        <label className="avatar" for="file">
                            <span className='profile'>
                                <i class="fa-solid fa-wifi"></i>
                            </span>
                        </label></div>
                </div>

            </div>
        </>
    )
}

export default Header