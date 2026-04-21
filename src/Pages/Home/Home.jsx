import React from 'react'
import Heroslider from '../../Components/heroslider/Heroslider'
import { FaCheck, FaChevronRight, FaTruckFast } from 'react-icons/fa6'
import "./Home.css"
import Cart from '../../Components/Cart'
import Categoriya from '../../Components/Categoriya'
import { TfiHeadphoneAlt } from 'react-icons/tfi'
function Home() {
  return (
    <>
      <div className="hero">
        <Heroslider />

      </div>
      <section className='sec1'>
        <div className="container">
          <h2 className="tex">Flash Sales</h2>
        </div>
        <div className="container">
          <div className="flr">
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />

          </div>
          <button className='viyov'>
            View All Products
          </button>
        </div>


      </section>
      <section className='sec2'>
        <div className="container">
          <h2 className="tex">Browse By Category</h2>
        </div>
        <div className="container">
          <div className="flee">
            <Categoriya /><Categoriya /><Categoriya /><Categoriya /><Categoriya /><Categoriya />
          </div>
        </div>



      </section>
      <section className='sec3'>
        <div className="container">
          <h2 className="tex">Best Selling Products</h2>
        </div>
        <div className="container">
          <div className="flr">
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />

          </div>
        </div>

      </section> <section className='sec4'>
        <div className="container">
          <h2 className="tex">Explore Our Products</h2>
        </div>
        <div className="container">
          <div className="flr">
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />

          </div>
        </div>

      </section>
      <section className='sec5'>
        <div className="container">
          <h2 className="tex">New Arrival</h2>
        </div>
        <div className="container">
          <div className="grid">
            <div className="card large">
              <img src="/public/imgs/1q.png" alt="ps5" />
              <div className="overlay">
                <h2>PlayStation 5</h2>
                <p>Black and White version of the PS5 coming out on sale.</p>
                <span>Shop Now</span>
              </div>
            </div>

            <div className="right">
              <div className="card wide">
                <img src="public/imgs/2q.png" alt="women" />
                <div className="overlay">
                  <h3>Women’s Collections</h3>
                  <p>Featured woman collections that give you another vibe.</p>
                  <span>Shop Now</span>
                </div>
              </div>

              <div className="bottom">
                <div className="card small">
                  <img src="public/imgs/3q.png" alt="speaker" />
                  <div className="overlay">
                    <h4>Speakers</h4>
                    <p>Amazon wireless speakers</p>
                    <span>Shop Now</span>
                  </div>
                </div>

                <div className="card small">
                  <img src="public/imgs/4q.png" alt="perfume" />
                  <div className="overlay">
                    <h4>Perfume</h4>
                    <p>GUCCI INTENSE OUD EDP</p>
                    <span>Shop Now</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='sec6'>

        <div className="container">
          <div className="features">
            <div className="feature">
              <div className="icon"><FaTruckFast /></div>
              <h4>FREE AND FAST DELIVERY</h4>
              <p>Free delivery for all orders over $140</p>
            </div>

            <div className="feature">
              <div className="icon"><TfiHeadphoneAlt /></div>
              <h4>24/7 CUSTOMER SERVICE</h4>
              <p>Friendly 24/7 customer support</p>
            </div>

            <div className="feature">
              <div className="icon"><FaCheck /></div>
              <h4>MONEY BACK GUARANTEE</h4>
              <p>We return money within 30 days</p>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Home