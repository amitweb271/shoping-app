import React from 'react';
import "./card.css";
import ShopApi from './API/ShopApi';
const Shops = () => {
  return (
    <>
    <section class="shop" id="shop">
        <div class="heading">
            <span>New Arrival</span>
            <h2>Shop Now</h2>
        </div>
        {/* <!-- Content --> */}
        <div class="shop-container">
            {/* <!-- Box 1 --> */}
    {ShopApi.map((props) => (
                <div className="box">
              <div class="box-img">
                    <img src={props.imgsrc} alt=""/>
                </div>
                <div class="title-price">
                    <h3>{props.title}</h3>
                    <div class="stars">
                        <i class='bx bxs-star' ></i>
                        <i class='bx bxs-star' ></i>
                        <i class='bx bxs-star' ></i>
                        <i class='bx bxs-star' ></i>
                        <i class='bx bxs-star-half' ></i>
                    </div>
                </div>
                <span>{props.price}</span>
                <i class='bx bx-cart' ></i>
                <a href={props.link} className="btn">shop Now </a>
            </div>
            ))}
            </div>
  </section>
            </>
  )
}

export default Shops;