import React from 'react'
import SubHeader from '../header/SubHeader'
import '../../assets/style/footer.css'

const Footer
    = () => {
        return (
            <div className='d-flex justify-content-between align-items-center px-3 footer w-100'>
                <div className='d-flex'>
                    <div className=' my-3 position-relative mx-3 '>
                        <button className='border-0 free-btn'>Free Of Cost</button>
                        <span className='count-btn'>F8</span>
                    </div>
                    <div className=' my-3 position-relative mx-3'>
                        <button className='border-0 free-btn'>Redeem Points</button>
                        {/* <span className='take-count-btn'>3</span> */}
                    </div>
                    <div className=' my-3 position-relative mx-3'>
                        <button className='border-0 free-btn'>Advance Order</button>
                        {/* <span className='take-count-btn'>3</span> */}
                    </div>
                    <div className='my-3 position-relative mx-3'>
                        <button className='border-0 free-btn'>Card Payment</button>
                        <span className='count-btn'>F5</span>
                    </div>
                    <div className='my-3 position-relative mx-3'>
                        <button className='border-0 free-btn'>Wallet Payment</button>
                        <span className='count-btn'>F4</span>
                    </div>
                    <div className='my-3 mx-3'>
                        <button className='border-0 free-btn'>
                            {/* <span className='px-2 tx-org'><i class="fa-solid fa-cart-plus "></i>
                            </span> */}
                            Save Order</button>
                        {/* <span className='take-count-btn'>F4</span> */}
                    </div>
                    <div className='my-3 mx-3'>
                        <button className='border-0 free-btn'>
                            {/* <span className='px-2 tx-org'><i class="fa-solid fa-cart-plus "></i>
                            </span> */}
                            Print & settle</button>
                        {/* <span className='take-count-btn'>F4</span> */}
                    </div>
                    <div className='my-3 mx-3'>
                        <button className='border-0 free-btn'>
                            {/* <span className='px-2 tx-org'><i class="fa-solid fa-cart-plus "></i>
                            </span> */}
                            Print Bill</button>
                        {/* <span className='take-count-btn'>F4</span> */}
                    </div>
                    <div className='my-3 mx-3'>
                        <button className='border-0 free-btn'>
                            More</button>
                        {/* <span className='take-count-btn'>F4</span> */}
                    </div>

                </div>

            </div>
        )
    }

export default Footer
