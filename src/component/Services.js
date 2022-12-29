import React, { Component } from "react";
import ServiceBanner from "./service/ServiceBanner";
import SolarServices from "./service/SolarServices";
import ServiceList from "./service/ServiceList";
import CustomerService from "./service/CustomerService";
import WantMoreInformation from "./home/WantMoreInformation";

class Services extends Component{
  render(){
  return (
    <>
    <ServiceBanner />
    <SolarServices />
    <ServiceList />
    <CustomerService />
    <WantMoreInformation />    
    </>
  );
}
};
export default Services;
