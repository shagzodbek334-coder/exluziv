import React from 'react'
import "./Produc.css"
import { FaTruckFast } from 'react-icons/fa6'
import { GiReturnArrow } from 'react-icons/gi'
function Product() {
  return (
    <>
      <div className="co">


        <div className="leftt">
          <div className="thumbnails">
            <img className='thumb' src="https://images.uzum.uz/d6pu6ei1146th72v1b10/original.jpg" alt="" />
            <img className='thumb' src="https://images.uzum.uz/d6pu6ei1146th72v1b1g/original.jpg" alt="" />
            <img className='thumb' src="https://images.uzum.uz/d6pu6egs9rf3ubr1qi30/original.jpg" alt="" />
            <img className='thumb' src="https://images.uzum.uz/d6pu6elsp2tohdbem870/original.jpg" alt="" />

          </div>

          <img className='main-img' src="https://images.uzum.uz/d6pu6elsp2tohdbem870/original.jpg" alt="" />
        </div>


        <div className="rightt">
          <h2 className='h2'>Havic HV G-92 Gamepad</h2>

          <div className="rating">
            ⭐⭐⭐⭐☆ <span>(150 Reviews)</span> <span className="stock">In Stock</span>
          </div>

          <p className="price">$192.00</p>

          <p className="desc">
            PlayStation 5 Controller Skin High quality vinyl with air channel adhesive
            for easy bubble free install & mess free removal Pressure sensitive.
          </p>

          <hr />


          <div className="colors">
            <span>Colours:</span>
            <div className="color black"></div>
            <div className="color red"></div>
          </div>


          <div className="sizes">
            <span>Size:</span>
            <button>XS</button>
            <button>S</button>
            <button className="active">M</button>
            <button>L</button>
            <button>XL</button>
          </div>


          <div className="quantity">
            <button>-</button>
            <span>2</span>
            <button>+</button>
          </div>


          <div className="actions">
            <button className="buy">Buy Now</button>
            <button className="fav">♡</button>
          </div>


          <div className="box">
            
            <p> <FaTruckFast /> <b>Free Delivery</b></p>
            <p>Enter your postal code for Delivery Availability</p>
          </div>

          <div className="box">
            <p> <GiReturnArrow />    <b>Return Delivery</b></p>
            <p>Free 30 Days Delivery Returns. Details</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product