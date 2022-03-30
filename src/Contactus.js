import React from 'react';
const Contactus = () => {
  return (
    <>
    <section class="newsletter" id="contact">
        <h2>Subscribe To Newsletter</h2>
        <div class="news-box">
            <input type="text" placeholder="Enter Your Email..."/>
            <a href={"/"} class="btn">Subscribe</a>
        </div>
    </section>
    {/* <!-- Footer --/> */}
    <section class="footer" id="footer">
        <div class="footer-box">
            <h2><img src="https://i1.lmsin.net/website_images/in/logos/logo-homecentre.svg" alt=""/></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt amet minus mollitia impedit qui asperiores!</p>
            <div class="social">
                <a href={"/"}><i class='bx bxl-facebook'></i></a>
                <a href={"/"}><i class='bx bxl-twitter'></i></a>
                <a href={"/"}><i class='bx bxl-instagram'></i></a>
            </div>
        </div>
        <div className="footer-box">
            <h3>Services</h3>
            <li><a href={"/shop"}>Product</a></li>
            <li><a href={"/"}>Help & Support</a></li>
            <li><a href={"/shop"}>Pricing</a></li>
            <li><a href={"/"}>FAQ</a></li>
        </div>
        <div className="footer-box">
            <h3>Product</h3>
            <li><a href={"/newArrivel"}>Sofa's</a></li>
            <li><a href={"/shop"}>Chair's</a></li>
            <li><a href={"/"}>Living Room</a></li>
            <li><a href={"/"}>Office</a></li>
        </div>
        <div className="footer-box contact-info">
            <h3>Contact</h3>
            <span>Thane Mumbai,maharashtra 421505 </span>
            <span>+919373757270</span>
            <span>homecenter@gmail.com</span>
        </div>
    </section>
    </>
  )
}

export default Contactus;