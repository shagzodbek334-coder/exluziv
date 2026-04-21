import React from 'react'
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home/Home'
import Footer from './Components/Footer'
import Login from './Pages/Login/Login'
import Signup from './Pages/sign/Signup'
import Product from './Pages/Product/Product'
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/produc' element={<Product/>}/>

        </Routes>
        <Footer />

      </BrowserRouter>


    </>
  )
}

export default App