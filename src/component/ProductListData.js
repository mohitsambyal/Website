import React, { Component } from "react";
import ProductList from "./ProductList";

import { FetchProduct } from "./../component/data";

class ApiProductList extends Component {
  state = {
    productlist: [],
  };

  async componentDidMount() {
    try {
      const data = await FetchProduct().then((res) => res.data);
      this.setState({ productlist: data.data });
    } catch (err) {
      new Error(err);
    }
  }

  render() {
    console.log("Data Render", FetchProduct().then(res => res.data));
    return (
      <>
        <ProductList productlist={this.state.productlist} />
      </>
    );
  }
}
export default ApiProductList;
