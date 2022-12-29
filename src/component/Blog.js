import { render } from "@testing-library/react";
import React, { Component } from "react";
import BlogBanner from "./blog/BlogBanner";
import BlogList from "./blog/BlogList";
import SideBar from "./blog/SideBar";

class Blog extends Component {
  render() {
    return (
      <>
        <BlogBanner />
        <section className="blog-posts">
          <div className="container">
            <div className="row">
              <BlogList />
              <SideBar />
            </div>
          </div>
        </section>
      </>
    );
  }
};
export default Blog;
