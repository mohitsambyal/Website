import React from "react";
import { Link } from "react-router-dom"; 

const Header = () => {

    const message = () => {
      var element = document.getElementById("banner");
      element.classList.toggle("header-add");
      var element2 = document.getElementById("collapseut");
      element2.classList.toggle("show");
    };       

    return (
      <header>
          <nav className="navbar navbar-expand-md navbar-dark inner-nav"  id="banner">
            <div className="container">
                  <a className="navbar-brand" href="/">
                      <img src="/images/solar-logo-01.svg" alt="img"/>
                 </a>
                  <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" onClick={message}> <span className="navbar-toggler-icon"></span> </button>
                  <div className="collapse navbar-collapse" id="collapseut">
                      <ul className="navbar-nav ml-auto">
                          <li className="nav-item"> <a className="nav-link" href="/">Home</a> </li>
                          <li className="nav-item"> <a className="nav-link" href="/about">About Us</a> </li>
                          <li className="nav-item"> <a className="nav-link" href="/service">Services</a> </li>
                          <li className="nav-item"> <a className="nav-link" href="/blog">Blog</a> </li>
                          <li className="nav-item"> <a className="nav-link" href="/contact">Contact Us</a> </li>
                          {/* <li className="nav-item"> <a className="nav-link" href="/employee-list">Employees List</a> </li> */}
                          <li className="nav-item"> <a className="nav-link" href="/product">Product</a> </li>
                          <li className="nav-item"> <a className="nav-link" href="/userapi">User API</a> </li>
                      </ul>
                  </div>

            </div>
         </nav>
     </header>            
    );

}
export default Header;