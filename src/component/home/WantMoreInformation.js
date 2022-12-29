import React, { Component } from "react";

const WantMoreInformation = () => {
    return (
      <>
        <section className="solar-estimate">
          <div className="container">
            <div className="row">
              <div className="Information-want footer-sub" data-anim-type="fade-in-down">
                <h4>Want More Information?</h4>
                <p>We can be reached at <a href="#">info@example.com</a></p>
                <h4>OR</h4>
                <a className="call-btn" href="#"><img src="/images/number-icon.png" alt="img" /> Call Us (202) 555-0161 </a>
              </div>
            </div>
          </div>
          <img className="contact-bag-solar" src="/images/contact-bag.png" alt="img"/>
        </section>
      </>
    );
}
export default WantMoreInformation;
