import React from 'react'
import "./login.css"
import { Link } from 'react-router-dom'
function Login() {
    return (
        <>
            <div className="cont">

                
                    <img
                        src="/public/imgs/1.png"
                        alt="shopping"
                    />
                


                <div className="right">
                    <div className="form-box">
                        <h2>Log in to Exclusive</h2>
                        <p>Enter your details below</p>

                        <input type="text" placeholder="Email or Phone Number" />
                        <input type="password" placeholder="Password" />

                        <div className="actions">
                            <button>Log In</button>
                            <Link>Forget Password?</Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login