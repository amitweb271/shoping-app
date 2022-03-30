import React from 'react';
const Header = () => {
  return (
    <>
      {/* <!-- Home --> */}
      <section className="home" id="home">
        <div className="home-text">
          <h1><span>Make</span>Your Comfort <br />
            Is Our <span>Happiness</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
            Dolores veritatis ad blanditiis molestias sunt aspernatur.</p>
          <a href={"/shop"} className="btn">Shop Now</a>
        </div>
      </section>
    </>
  )
}

export default Header;