import React, { Component } from "react";

const FreeQuoteForm = () => {
    return (
      <>
        <section className="solar-estimate">
          <img className="pay-bag" src="/images/pay-bag.png" alt="img" />
          <div className="container">
            <div className="row">
              <div className="col- col-sm-12 col-md-12 col-lg-5 animate-in" data-anim-type="fade-in-right-big">
                <div className="home-contact-form">
                  <div className="get-free">
                    <h6>Get A Free Quote</h6>
                    <h3>Get Your Free Estimate</h3>
                  </div>
                  <form>
                    <div className="row">
                      <div className="col- col-sm-12 col-md-6 col-lg-6">
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Full Name"/>
                        </div>
                      </div>
                      <div className="col- col-sm-12 col-md-6 col-lg-6">
                        <div className="form-group">
                          <input type="email" className="form-control" placeholder="Email"/>
                        </div>
                      </div>
                      <div className="col- col-sm-12 col-md-6 col-lg-6">
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Phone"/>
                        </div>
                      </div>
                      <div className="col- col-sm-12 col-md-6 col-lg-6">
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Address"/>
                        </div>
                      </div>
                      <div className="col- col-sm-12 col-md-6 col-lg-6">
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="City"/>
                        </div>
                      </div>
                    <div className="col- col-sm-12 col-md-6 col-lg-6">
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Zip Code"/>
                        </div>
                      </div>
                      <div className="col- col-sm-12 col-md-12 col-lg-12">
                        <div className="form-group">
                          <textarea className="form-control" rows="5" placeholder="Comment"></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="col- col-sm-12 col-md-12 col-lg-12">
                      <button type="submit" className="btn btn-primary"> Request A Quote</button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col- col-sm-12 col-md-12 col-lg-7 home-contact-banner animate-in" data-anim-type="fade-in-left-big">
                <img src="images/home-contact-banner.png" alt="img" />
              </div>
            </div>
          </div>
        </section>
      </>
    );
}
export default FreeQuoteForm;
