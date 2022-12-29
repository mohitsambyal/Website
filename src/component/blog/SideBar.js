import React, { Component } from "react";

const SideBar = () => {
  return (
    <>
       <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <form className="search-container">
                  <input type="text" id="search-bar" placeholder="Search" />
                  <a href="javascript:void(0);">
                    <i className="fa fa-search search-icon"></i>
                  </a>
                </form>
                <section className="categories mt-5">
                  <div className="blog-post-categories">
                    <h2>Categories</h2>
                    <ul className="list-group">
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <a href="javascript:void(0);">
                          Business
                          <span className="badge badge-pill">4</span>
                        </a>
                      </li>

                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <a href="javascript:void(0);">
                          Consulting
                          <span className="badge badge-pill">2</span>
                        </a>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <a href="javascript:void(0);">
                          Financial Support
                          <span className="badge badge-pill">1</span>
                        </a>
                      </li>

                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <a href="javascript:void(0);">
                          Investment
                          <span className="badge badge-pill">4</span>
                        </a>
                      </li>

                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <a href="javascript:void(0);">
                          Marketing
                          <span className="badge badge-pill">7</span>
                        </a>
                      </li>

                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <a href="javascript:void(0);">
                          Strategies
                          <span className="badge badge-pill">4</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </section>

                <section className="blog-post-subscription mt-5">
                  <i className="fa fa-envelope-open fa-4x"></i>
                  <h2>SUSCRIBE</h2>
                  <p>TO OUR NEWSLETTER</p>
                  <form>
                    <input
                      type="text"
                      className="subscription-email"
                      placeholder="Your Email address"
                    />
                    <input
                      type="submit"
                      className="subscription-email-btn"
                      value="Sign up"
                    />
                  </form>
                </section>

                <section className="blog-post-comments-section mt-5">
                  <div className="blog-post-comments">
                    Greate theme, very flexible, a lot of features are included.
                    Whatever isn't included they are very helpfuul to you with.
                    <br />
                    Def...
                  </div>
                  <div className="blog-profile">
                    <img src="images/blog-profile-img.png" alt="img" />
                    <h5>
                      DAILYOFFICES <br />
                      <span>Founder of WebFlex Inc.</span>
                    </h5>
                  </div>
                </section>

                <section className="blog-tags-widget mt-5">
                  <h2>Tags</h2>
                  <ul className="widget-tags">
                    <li className="widget-tag-items">
                      <a href="javascript:void(0);">Awards</a>
                    </li>
                    <li className="widget-tag-items">
                      <a href="javascript:void(0);">Business</a>
                    </li>
                    <li className="widget-tag-items">
                      <a href="javascript:void(0);">Deadline</a>
                    </li>
                    <li className="widget-tag-items">
                      <a href="javascript:void(0);">History</a>
                    </li>
                    <li className="widget-tag-items">
                      <a href="javascript:void(0);">Plans</a>
                    </li>
                    <li className="widget-tag-items">
                      <a href="javascript:void(0);">success</a>
                    </li>
                  </ul>
                </section>
                <section className="recent-blog-posts mt-5">
                  <h2>Recent Posts</h2>
                  <div className="blog-categories-card">
                    <div className="blog-categories-img">
                      <img src="images/blog-2.png" alt="img" />
                    </div>
                    <div className="blog-categories-content">
                      <h4>Business Planning, Strategy & Execution</h4>
                      <a href="javascript:void(0);" className="blog-readmore">
                        Business Solution
                      </a>
                    </div>
                  </div>
                  <div className="blog-categories-card mt-4">
                    <div className="blog-categories-img">
                      <img src="images/blog-2.png" alt="img" />
                    </div>
                    <div className="blog-categories-content">
                      <h4>Developing strategy and roadmap for clients</h4>
                      <a href="javascript:void(0);" className="blog-readmore">
                        Marketing
                      </a>
                    </div>
                  </div>
                  <div className="blog-categories-card mt-4">
                    <div className="blog-categories-img">
                      <img src="images/blog-2.png" alt="img" />
                    </div>
                    <div className="blog-categories-content">
                      <h4>Company launches new software channel</h4>
                      <a href="javascript:void(0);" className="blog-readmore">
                        Consumer Produc
                      </a>
                    </div>
                  </div>
                </section>
              </div>
    </>
  );
};
export default SideBar;
