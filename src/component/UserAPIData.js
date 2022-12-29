import React, { Component } from "react";
import UserApiList from "./UserApiList";

import { UserAPI } from "./../component/data";

class UserAPIData extends Component {
  state = {
    userproductlist: [],
    show: false,
    desc: "",
    id: "",
    name: "",
    search: "",
  };

  handleShow = (data) => {
    this.setState({
      ...this.state,
      show: !this.state.show,
      desc: data.desc,
      id: data.id,
      name: data.name,
    });
    //console.log("Test click", this.state.show);
  };

  handleClose = () => {
    this.setState({ ...this.state, show: false });
  };

  handlesearch = (e) => {
    let keyword = e.target.value;
    this.setState({ search: keyword }, () => {
      this.onSearchData();
    });
  };
  onSearchData = async () => {
    try {
      const params = {searchText: this.state.search};
      const data = await UserAPI(params).then((res) => res.data);
      this.setState({ userproductlist: data.data.content });
    } catch (err) {
      new Error(err);
    }   
  };

   componentDidMount() {
    // console.log("props",this.props.location.pathname);
    const qString = this.props.location.pathname;
    this.onSearchData();
    this.props.history.push(`${qString}?page=1&size=50`);
  }
  

  render() {
    //console.log("Data Render APi--->>>>>>>>>>>>>", this.state.show);
    return (
      <>
        <UserApiList
          userproductlists={this.state.userproductlist}
          show={this.state.show}
          desc={this.state.desc}
          id={this.state.id}
          name={this.state.name}
          search={this.state.search}
          handlesearch={this.handlesearch}
          handleShow={this.handleShow}
          handleClose={this.handleClose}
        />
      </>
    );
  }
}
export default UserAPIData;
