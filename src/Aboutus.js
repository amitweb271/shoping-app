import React from 'react';
const Aboutus = () => {
  return (
    <>
<section class="about" id="about">
        <div class="about-img">
        <img src="https://images.unsplash.com/photo-1604578762246-41134e37f9cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80" alt=""/>

            {/* <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80" alt=""/> */}
        </div>
        <div class="about-text">
            <span>About Us</span>
            <h2>Furniture is important part <br/>for comfort</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, placeat praesentium. Quas quis, omnis repellendus reiciendis eius fuga quidem eum illum veniam explicabo excepturi fugit distinctio sequi quisquam quaerat dignissimos! Beatae delectus numquam perspiciatis.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi ex aut repellat ipsum possimus delectus cum quaerat rerum?</p>
            <a href={"#shop"} class="btn">Learn More.</a>
        </div>
    </section>
    </>
  )
}

export default Aboutus;