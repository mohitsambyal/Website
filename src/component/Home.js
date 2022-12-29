import React, { Component } from "react";
import HomeBanner from "./home/HomeBanner";
import SolarDetails from "./home/SolarDetails";
import WhyPayMore from "./home/WhyPayMore";
import OurHappyClients from "./home/OurHappyClients";
import CertificateAndPartners from "./home/CertificateAndPartners";
import FreeQuoteForm from "./home/FreeQuoteForm";
import WantMoreInformation from "./home/WantMoreInformation";

class Home extends Component {
  state = {
    user: { first: "Test", second: "Data" },
  };

  render() {
    return (
      <>
        <HomeBanner user={this.state.user} />
        <SolarDetails />
        <WhyPayMore />
        <OurHappyClients />
        <CertificateAndPartners />
        <FreeQuoteForm />
        <WantMoreInformation />
      </>
    );
  }
};
export default Home;
