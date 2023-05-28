import React from 'react'
import '../../assets/style/subheader.css'

const SubHeader = () => {
    return (
        <div className='d-flex justify-content-between align-items-center px-3'>
            <div className='d-flex'>
                <div className=' my-3 position-relative '>
                    <button className='border-0 din-btn'>Dine In</button>
                    <span className='count-btn'>5</span>
                </div>
                <div className=' my-3 position-relative mx-4 ps-3'>
                    <button className='border-0 take-away-btn'>Take Away</button>
                    <span className='take-count-btn'>3</span>
                </div>
                <div className=' my-3 position-relative  mx-4 '>
                    <button className='border-0 take-away-btn'>Home Delivery</button>
                    <span className='take-count-btn'>3</span>
                </div>
            </div>
            <div className='d-flex'>
                <div className='my-3 mx-2'>
                    <button className='border-0 take-away-btn'>Online Orders</button>
                </div>
                <div className='my-3 mx-2'>
                    <button className='border-0 take-away-btn'>Running Orders</button>
                </div>
                <div className='my-3 mx-2'>
                    <button className='border-0 take-away-btn'>
                        <span className='px-2 tx-org'><i class="fa-solid fa-cart-plus "></i>
                        </span>Clear</button>
                </div>

            </div>

        </div>
    )
}

export default SubHeader