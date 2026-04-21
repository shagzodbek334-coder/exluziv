import React from 'react'
import { FaEye, FaHeart, FaStar } from 'react-icons/fa6'
import "./Cart.css"
import { Link } from 'react-router-dom'
function Cart() {
    return (
        <Link to={"/produc"} className="cart">
            <div className="cart-img">
                <span className="discount">-35%</span>

                <img
                    src="https://pngimg.com/uploads/keyboard/keyboard_PNG101840.png"
                    alt=""
                />

                <div className="icons">
                    <FaHeart className='s' />
                    <FaEye className='s' />
                </div>

                <button className="add-btn">Add To Cart</button>
            </div>

            <div className="cart-body">
                <h3>AK-900 Wired Keyboard</h3>

                <div className="price">
                    <span className="new">$960</span>
                    <span className="old">$1160</span>
                </div>

                <div className="rating">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar className="gray" />
                    <span>(75)</span>
                </div>
            </div>
        </Link>
    )
}

export default Cart