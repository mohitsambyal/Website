import React, { Component } from "react";
import ContactBanner from "./contact/ContactBanner";
import ContactAddress from "./contact/ContactAddress";
import ContactForm from "./contact/ContactForm";
import MapIframe from "./contact/MapIframe";
import WantMoreInformation from "./home/WantMoreInformation";

class Contact extends Component {
  FormData = {
    fullname: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
    state: "",
    comment: "",
  };
  state = {
    contactform: this.FormData,
    // contactform: {
    //   fullname: "",
    //   email: "",
    //   phone: "",
    //   address: "",
    //   city: "",
    //   zip: "",
    //   state: "",
    //   comment: "",
    // },
    contactFormData: [],
    errors: {},
  };

  handleValidation() {
    let fields = this.state.contactform;
    let errors = {};
    let formIsValid = true;
    //console.log("field", fields["fullname"].length);
    /* Address Validation*/
    if (!fields["address"]) {
      formIsValid = false;
      errors["address"] = "Address field cannot be empty";
    }
    /* State Validation*/
    if (!fields["state"]) {
      formIsValid = false;
      errors["state"] = "Select state option";
    }
    /* Name Validation*/
    if (!fields["fullname"]) {
      formIsValid = false;
      errors["fullname"] = "Name field cannot be empty";
    } else if (typeof fields["fullname"] !== "undefined") {
      var pattern = new RegExp(/^[a-zA-Z][a-zA-Z\s]*$/);
      if (!pattern.test(fields["fullname"])) {
        formIsValid = false;
        errors["fullname"] = "Only letters";
      }
    }
    /* Email Validation*/
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Email field cannot be empty";
    } else if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf("@");
      let lastDotPos = fields["email"].lastIndexOf(".");
      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].indexOf("@@") == -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }
    /* Phone Validation*/
    if (!fields["phone"]) {
      formIsValid = false;
      errors["phone"] = "Phone field cannot be empty";
    } else if (typeof fields["phone"] !== "undefined") {
      var pattern = new RegExp(/^[0-9\b]+$/);
      if (!pattern.test(fields["phone"])) {
        formIsValid = false;
        errors["phone"] = "Please enter only number.";
      } else if (fields["phone"].length != 10) {
        formIsValid = false;
        errors["phone"] = "Please enter valid phone number.";
      }
    }
    /* Zip Validation*/
    if (!fields["zip"]) {
      formIsValid = false;
      errors["zip"] = "Zip field cannot be empty";
    } else if (typeof fields["zip"] !== "undefined") {
      var pattern = new RegExp(/^[0-9\b]+$/);
      if (!pattern.test(fields["zip"])) {
        formIsValid = false;
        errors["zip"] = "Please enter only number.";
      } else if (fields["zip"].length != 5) {
        formIsValid = false;
        errors["zip"] = "Please enter valid zip code.";
      }
    }
    /* City Validation*/
    if (!fields["city"]) {
      formIsValid = false;
      errors["city"] = "City field cannot be empty";
    } else if (typeof fields["city"] !== "undefined") {
      var patterncity = new RegExp(/^[a-zA-Z][a-zA-Z\s]*$/);
      if (!patterncity.test(fields["city"])) {
        formIsValid = false;
        errors["city"] = "Only letters";
      }
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      contactform: {
        ...this.state.contactform,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.handleValidation()) {
      //alert("Form submitted");
      this.state.contactFormData.push(this.state.contactform);
      this.setState({
        ...this.state,
        contactform: this.FormData,
        errors:{},
      });
    }
    // else {
    //   alert("Form has errors.");
    // }
  };

  render() {
    return (
      <>
        <ContactBanner />
        <ContactAddress />
        <ContactForm
          formlistDta={this.state.contactform}
          handleChangebtn={this.handleChange}
          handleSubmitbtn={this.handleSubmit}
          errorsbtn={this.state.errors}
          formdatasubmit={this.state.contactFormData}
        />
        <MapIframe />
        <WantMoreInformation />
      </>
    );
  }
};
export default Contact;
