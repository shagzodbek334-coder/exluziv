import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaCartShopping, FaRegHeart } from 'react-icons/fa6'
import { IoSearch } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
    return (
        <nav>
            <div className="container">
                <div className="flex">
                    <div className="logo">
                        <h2>
                            Exclusive
                        </h2>

                    </div>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/signup">Sign Up</NavLink></li>
                    </ul>
                    <div className="input">
                        <input type="text" placeholder="What are you looking for?" />
                        <IoSearch className="searchIcon" />
                    </div>
                    <div className="ico">
                        <span><FaRegHeart /></span>
                        <span><FaCartShopping /></span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar