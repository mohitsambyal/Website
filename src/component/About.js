import React, { Component } from "react";
import AboutBanner from "./about/AboutBanner";
import AboutYourBusiness from "./about/AboutYourBusiness";
import WhoWeAre from "./about/WhoWeAre";
import HowToChoose from "./about/HowToChoose";
import WantMoreInformation from "./home/WantMoreInformation";

class About extends Component {
  render() {
  return (
    <>
    <AboutBanner />
    <AboutYourBusiness />
    <WhoWeAre />
    <HowToChoose />
    <WantMoreInformation />    
    </>
  );
  }
};
export default About;
