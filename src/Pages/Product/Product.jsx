import React, { useContext, useEffect, useState } from 'react'
import "./Produc.css"
import { FaTruckFast } from 'react-icons/fa6'
import { GiReturnArrow } from 'react-icons/gi'
import { Datacontext } from '../../App'
import Cart from '../../Components/Cart'
import { useParams } from 'react-router-dom'
import { basurl, getProduct } from '../../services'
function Product() {
  const { list } = useContext(Datacontext)
  console.log(list);
  const { id } = useParams()
  useEffect(() => {
    getProduct(id).then((result) => {
      setInfo(result);
    });
  }, [id]);

  const [info, setInfo] = useState()
  console.log(info);


  return (
    <>
      <div className="container">
        <div className="co">


          <div className="leftt">
            <div className="thumbnails">
              <img className='thumb' src={info?.pictures?.[0]?.file ? `${basurl}${info.pictures[0].file}` : ""} alt="" />
              <img className='thumb' src={info?.pictures?.[1]?.file ? `${basurl}${info.pictures[1].file}` : ""} alt="" />
              <img className='thumb' src={info?.pictures?.[2]?.file ? `${basurl}${info.pictures[2].file}` : ""} alt="" />
              <img className='thumb' src={info?.pictures?.[3]?.file ? `${basurl}${info.pictures[3].file}` : ""} alt="" />
            </div>

            <img
              className='main-img'
              src={info?.pictures?.[0]?.file ? `${basurl}${info.pictures[0].file}` : ""}
              alt=""
            />
          </div>



          <div className="rightt">
            <h2 className='h2'>{info?.title}</h2>

            <div className="rating">
              ⭐⭐⭐⭐☆ <span>(150 Reviews)</span> <span className="stock">In Stock</span>
            </div>

            <p className="price">${info?.price}</p >

            <p className="desc">
              {info?.description}
            </p>

            <hr />


            <div className="colors">
              <span>Colours:</span>
              <div className="color black"></div>
              <div className="color red"></div>
            </div>


            <div className="sizes">
              <span>Size:</span>
              <button>XS</button>
              <button>S</button>
              <button className="active">M</button>
              <button>L</button>
              <button>XL</button>
            </div>


            <div className="quantity">
              <button>-</button>
              <span>2</span>
              <button>+</button>
            </div>


            <div className="actions">
              <button className="buy">Buy Now</button>
              <button className="fav">♡</button>
            </div>


            <div className="box">

              <p> <FaTruckFast /> <b>Free Delivery</b></p>
              <p>Enter your postal code for Delivery Availability</p>
            </div>

            <div className="box">
              <p> <GiReturnArrow />    <b>Return Delivery</b></p>
              <p>Free 30 Days Delivery Returns. Details</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="flr">
          {list?.slice(0, 5).map((item) => (
            <Cart key={item.id} item={item} />
          ))}

        </div>
      </div>
    </>
  )
}

export default Product