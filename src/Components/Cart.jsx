import React from 'react'
import { FaEye, FaHeart, FaStar } from 'react-icons/fa6'
import "./Cart.css"
import { Link } from 'react-router-dom'
import { basurl } from '../services'

function Cart({ item }) {
    return (
        <Link onClick={() => {
            console.log(item?.id);

        }} to={`/product/${item?.id}`} className="cart" >
            <div className="cart-card">
                <div className="cart-img">
                    <span className="discount">-35%</span>

                    <img src={`${basurl}${item?.pictures?.[0]}`} alt="" />

                    <div className="icons">
                        <FaHeart className='s' />
                        <FaEye className='s' />
                    </div>

                    <button className="add-btn">Add To Cart</button>
                </div>

                <div className="cart-body">
                    <h3>
                        {item?.title?.length > 15
                            ? item.title.slice(0, 15) + "..."
                            : item?.title}
                    </h3>

                    <div className="price">
                        <span className="new">${item?.price}</span>
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
            </div>
        </Link >
    )
}

export default Cart 