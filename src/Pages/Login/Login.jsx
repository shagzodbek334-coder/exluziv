import React, { useState } from 'react'
import "./login.css"
import { Link } from 'react-router-dom'
import { login } from '../../services'

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <>
            <div className="cont">

                <img
                    src="/imgs/1.png"
                    alt="shopping"
                />

                <div className="right">
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        login(email, password).then((info) => {
                          if(info?.access){
                            alert("royhatan otingiz")
                          }else{
                            alert("hato")
                          }
                        })
                    }} className="form-box">

                        <h2>Log in to Exclusive</h2>
                        <p>Enter your details below</p>

                        <input onInput={(e) => setEmail(e.target.value)} type="text" placeholder="Email or Phone Number" />
                        <input onInput={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />

                        <div className="actions">
                            <Link to={"/"}><button> Log In</button></Link>
                            <Link>Forget Password?</Link>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Login