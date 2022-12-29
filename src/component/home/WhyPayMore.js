import React, { Component } from "react";

const WhyPayMore = () => {
    return (
      <>
        <section className="pay-more">
          <img className="pay-bag" src="/images/pay-bag.png" alt="img" />
          <div className="container">
            <div className="row">
              <div className="col- col-sm-12 col-md-6 col-lg-6 animate-in" data-anim-type="bounce-in-up-large">
                <div className="pay-more-content">
                  <span>
                    <img src="/images/home-icon.png" alt="img" />
                  </span>
                  <h5>Residential</h5>
                </div>
                <div className="pay-more-content">
                  <span>
                    <img src="/images/commercial-icon.png" alt="img" />
                  </span>
                  <h5>Commercial</h5>
                </div>
              </div>
              <div className="col- col-sm-12 col-md-6 col-lg-6 animate-in"
                data-anim-type="bounce-in-down-large">
                <h3>Why Pay More?</h3>
                <h4>Choose the Right Plan for You</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                  Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed
                  augue semper porta. Mauris massa. Vestibulum lacinia arcu eget
                  nulla.
                </p>
                <p>
                  Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque
                  nibh. Aenean quam. In scelerisque sem at dolor. Maecenas
                  mattis. Sed convallis tristique sem. Proin ut ligula vel nunc
                  egestas porttitor. Morbi lectus risus, iaculis vel, suscipit
                  quis, luctus non, massa.
                </p>
                <a className="call-us" href="#">
                  Call Us Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}
export default WhyPayMore;
