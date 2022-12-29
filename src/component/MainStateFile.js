import React, { Component } from "react";
import EmployeeList from "./EmployeeList";

import { FetchEmployees }  from "./data";

class ApiEmployeeList extends Component {
  state = {
    employees: [],
    butonste: false,
    list: [
      { id: "A", name: "Robin" },
      { id: "B", name: "Dennis" },
      { id: "C", name: "John" },
      { id: "D", name: "Sandy" },
    ],
  };

  async componentDidMount() {
    try {
      const data = await FetchEmployees().then((res) => res.data);
      this.setState({ employees: data.data });
    } catch (err) {
      new Error(err);
    }
  }

  
  buttonset = () => {
    this.setState({
      ...this.state,
      butonste: !this.state.butonste,
    });
    //console.log("thiffffff", this.state.butonste);
  };

  render() {
    // console.log("Data Render", FetchEmployees().then(res => res.data.data));
    
    return (
      <>
        <EmployeeList
          employees={this.state.employees}
          buttonshowdta={this.state.butonste}
          buttonset={this.buttonset}
          ArylistDta={this.state.list}
        />
        
      </>
    );
  }
}
export default ApiEmployeeList;
