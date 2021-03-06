
import React from "react";
import {NavLink} from "react-router-dom";
const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <NavLink className="navbar-brand" to="/"><img src="https://i1.lmsin.net/website_images/in/logos/logo-homecentre.svg" alt=""/></NavLink>
    <button className="navbar-toggler" type="button"
     data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent" 
      aria-controls="navbarSupportedContent" 
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0"/>
        <li className="nav-item">
          <NavLink className="nav-NavLink active" aria-current="page" exact to="/">Home</NavLink>
        </li>
         <li classNameName="nav-item">
           <NavLink classNameName="nav-NavLink" exact to="/shop">
             Shop
           </NavLink>
         </li> <li classNameName="nav-item">
           <NavLink classNameName="nav-NavLink" exact to="/newarrivel">
             NewArrivel
           </NavLink>
         </li>
         <li classNameName="nav-item">
           <NavLink classNameName="nav-NavLink" exact to="/about">
             About
           </NavLink>
         </li>
         <li classNameName="nav-item">
           <NavLink classNameName="nav-NavLink" exact to="/contact">
             Contact
           </NavLink>
         </li>
    </div>
  </div>
</nav>
    </>
);
};

export default Navbar;    