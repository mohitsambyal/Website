import React, { Component } from "react";

const SolarDetails = () => {
    return (
      <>
       <section className="topps-difference">
          <div className="container">
            <div className="row">
              <div className="col- col-sm-12 col-md-12 col-lg-12">
                <h2>Lorem Ipsum Dolo</h2>
                <h3>Why We Are Different from Others</h3>
              </div>
            </div>
            <div className="row">
              <div className="col- col-sm-12 col-md-5 col-lg-5 animate-in" data-anim-type="fade-in-right-big">
                <div className="topps-difference-content">
                  <img src="/images/partnership-icon.png" alt="img" />
                  <h4>The Best & Nothing Less</h4>
                  <p>
                    As an industry leader, we use only the best product from
                    top-rated manufacturers so that your system performs better
                    and you save more.
                  </p>
                </div>
                <div className="topps-difference-content">
                  <img src="/images/customer-driven-icon.png" alt="img" />
                  <h4>Customer Driven Approach</h4>
                  <p>
                    The opinions of our customers is our true measure of
                    success. With outstanding, around-the-clock customer
                    support, we don’t rest so you can relax.
                  </p>
                </div>
                <div className="topps-difference-content">
                  <img src="/images/local-solar-experts-icon.png" alt="img" />
                  <h4>Local Experts</h4>
                  <p>
                    As your neighbor, we want what is best for you, your family
                    and your business. You can trust our in-house team to give
                    you the best value or we won’t do it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}
export default SolarDetails;
