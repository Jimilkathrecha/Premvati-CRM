import React from 'react'
import '../../assets/style/rightsidebar.css'
const RightSideBar = () => {
  return (
    <>
      <div className='right-sidebar '>
        <div className='d-flex'>
          <input type="text" name="text" className="add-qty-input" placeholder="Search By Product name , Categories & Key code" />
          <button className="Qty_btn">Qty
          </button>
          <button className="search_btn">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
        <div className='d-flex justify-content-between mt-3'>
          <div className='d-flex justify-content-between'>
            <div className="dropdown">
              <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                9512214441 - Billberry
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">9512214441 - Billberry</a></li>
                <li><a className="dropdown-item" href="#">9512214441 - Billberry</a></li>
                <li><a className="dropdown-item" href="#">9512214441 - Billberry</a></li>
              </ul>
            </div>
            <div className='ms-2'>
              <button type="button" className='user-plus-btn' >
                <i class="fa-solid fa-user-plus tx-org"></i>
              </button>
            </div>
          </div>
          <div className='d-flex justify-content-between'>
            <div className="dropdown">
              <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                -- Table No --
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">1</a></li>
                <li><a className="dropdown-item" href="#">2</a></li>
                <li><a className="dropdown-item" href="#">3</a></li>
              </ul>
            </div>
            <div className='ms-4'>
              <button type="button" className='user-plus-btn' >
                <i class="fa-solid fa-user-plus tx-org"></i>
              </button>
            </div>
          </div>
        </div>
        <div className='mt-3'>
          <div className='d-flex justify-content-between'>
            <input type="add remark" class="add-remark-input" placeholder="Add Order Remarks" />
            <button className='offer-btn'>Offers 0</button>
          </div>
        </div>
        <div className='mt-3'>
          <table class="table">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Order Details</th>
                <th scope="col"></th>
                <th scope="col">Qty</th>
                <th scope="col">Price</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <i class="fa-solid fa-xmark"></i>
                </th>
                <td>HOT & SOUR SOUP-NORMAL</td>
                <td>
                  <i class="fa-solid fa-pen-to-square"></i>
                </td>
                <td>8</td>
                <td>90.00</td>
                <td>720.00</td>
              </tr>
              <tr>
                <th scope="row">
                  <i class="fa-solid fa-xmark"></i>
                </th>
                <td>MINESTRONE SOUP - NORMAL</td>
                <td>
                  <i class="fa-solid fa-pen-to-square"></i>
                </td>
                <td>1</td>
                <td>90.00</td>
                <td>90.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </>

  )
}

export default RightSideBar