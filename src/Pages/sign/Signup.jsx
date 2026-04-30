import React, { useState } from 'react'
import "./Signup.css"
import { Link, useNavigate } from 'react-router-dom'
import { register } from '../../services'

function Signup() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    return (
        <div className="con">
            <img src="/imgs/1.png" alt="shopping" />

            <div className="right">
                <form
                    onSubmit={(e) => {
                        e.preventDefault()

                        
                        if (!name || !email || !password) {
                            alert("Iltimos, barcha maydonlarni to‘ldiring")
                            return
                        }

                        register(name, email, password)
                            .then((info) => {
                                if (info?.message === "Foydalanuvchi muvaffaqiyatli ro'yxatdan o'tkazildi.") {
                                    alert("Muvaffaqiyatli ro‘yxatdan o‘tildi")
                                    navigate("/login")
                                } else {
                                    alert(info?.email_or_phone?.[0] || "Xatolik yuz berdi")
                                }
                            })
                            .catch((err) => {
                                console.error(err)
                                alert("Serverda xatolik")
                            })
                    }}
                    className="form-box"
                >
                    <h2>Create an account</h2>
                    <p>Enter your details below</p>

                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <input
                        type="email"
                        placeholder="Email or Phone Number"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button className="primary-btn">
                        Create Account
                    </button>

                    <button type="button" className="google-btn">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
                            alt="google"
                        />
                        Sign up with Google
                    </button>

                    <p className="login-link">
                        Already have account? <Link to="/login">Log in</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Signup