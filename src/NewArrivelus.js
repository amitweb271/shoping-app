import React from 'react'
import NewArrivelApi from './API/NewArrivelApi';
import "./card.css";
const NewArrivelus = () => {
  return (
    <>
    <section class="new" id="new">
        <div class="heading">
            <span>New Collection</span>
            <h2>Best Selling</h2>
        </div>
        <div class="shop-container">
            {/* <!-- Box 1 --> */}
    {NewArrivelApi.map((props) => (
                <div className="box">
              <div className="box-img">
                    <img src={props.imgsrc} alt=""/>
                </div>
                <div className="title-price">
                    <h3>{props.title}</h3>
                    <div className="stars">
                        <i className='bx bxs-star' ></i>
                        <i className='bx bxs-star' ></i>
                        <i className='bx bxs-star' ></i>
                        <i className='bx bxs-star' ></i>
                        <i className='bx bxs-star-half' ></i>
                    </div>
                </div>
                <span>{props.price}</span>
                <i className='bx bx-cart' ></i>
                <a href={props.link} className="btn">shop Now </a>
            </div>
            ))}
            </div>
  </section>
    </>
  )
}

export default NewArrivelus;