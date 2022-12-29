import React , { Component } from "react";

const HomeBanner = (props) => {
  const {first, second } = props.user;
    return (
      <>
        <section className="banner">
          <div className="container">
            <h1 className="animate-in" data-anim-type="fade-in-right-big">
              Lorem ipsum dolor {first} {second}
            </h1>
            <a
              className="get-btn animate-in"
              data-anim-type="fade-in-right-big"
              href="#"
            >
              Get A Free Quote
            </a>
          </div>
        </section>
      </>
    );
}
export default HomeBanner;