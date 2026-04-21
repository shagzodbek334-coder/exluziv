import React from 'react'
import "./Signup.css"
import { Link } from 'react-router-dom'
function Signup() {
    return (
        <>
            <div className="con">

                <img
                    src="/public/imgs/1.png"
                    alt="shopping"
                />


                <div className="right">
                    <div className="form-box">
                        <h2>Create an account</h2>
                        <p>Enter your details below</p>

                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Email or Phone Number" />
                        <input type="password" placeholder="Password" />

                        <button className="primary-btn">Create Account</button>

                        <button className="google-btn">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
                                alt="google"
                            />
                            Sign up with Google
                        </button>

                        <p className="login-link">
                            Already have account? <Link to={"/Login"}>Log in</Link>
                        </p>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Signup