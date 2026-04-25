import React, { createContext, useEffect, useState } from 'react';
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer';
import Login from './Pages/Login/Login';
import Signup from './Pages/sign/Signup';
import Product from './Pages/Product/Product';
import { getCategoriy, getList } from './services';

export const Datacontext = createContext();

function App() {

  const [category, setCategory] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    getList().then((res) => {
      setList(res?.data || res);
    });

    getCategoriy().then((res) => {
      setCategory(res?.data || res);
    });
  }, []);

  return (
    <Datacontext.Provider value={{ category, list }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/product/:id' element={<Product />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Datacontext.Provider>
  );
}

export default App;