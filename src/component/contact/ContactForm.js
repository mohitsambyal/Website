import React from "react";

const ContactForm = (props) => {
    const { fullname, email, phone, address, city, zip, state, comment} = props.formlistDta;
    //console.log("Form Data Test", props.formlistDta);
    //console.log("Form Data Test1", props.errorsbtn);
    return (
      <>
        <div className="contact-page">
          <div className="container">
            <div className="row">
              <div
                className="col- col-sm-12 col-md-12 col-lg-12"
                data-anim-type="fade-in-right-big"
              >
                <div className="home-contact-form">
                  <div className="get-free">
                    <h6>Get A Free Quote</h6>
                    <h3>Get Your Free Estimate</h3>
                  </div>
                  <form onSubmit={props.handleSubmitbtn}>
                    <div className="row">
                      <div className="col- col-sm-12 col-md-6 col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="fullname"
                            className="form-control"
                            value={fullname}
                            onChange={(e) => props.handleChangebtn(e)}
                            placeholder="Full Name"
                          />
                          <span className="error">
                            {props.errorsbtn["fullname"]}
                          </span>
                        </div>
                      </div>
                      <div className="col- col-sm-12 col-md-6 col-lg-6">
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => props.handleChangebtn(e)}
                            className="form-control"
                            placeholder="Email"
                          />
                          <span className="error">
                            {props.errorsbtn["email"]}
                          </span>
                        </div>
                      </div>
                      <div className="col- col-sm-12 col-md-6 col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            value={phone}
                            name="phone"
                            className="form-control"
                            placeholder="Phone"
                            onChange={(e) => props.handleChangebtn(e)}
                          />
                          <span className="error">
                            {props.errorsbtn["phone"]}
                          </span>
                        </div>
                      </div>
                      <div className="col- col-sm-12 col-md-6 col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            value={address}
                            name="address"
                            className="form-control"
                            placeholder="Address"
                            onChange={(e) => props.handleChangebtn(e)}
                          />
                          <span className="error">
                            {props.errorsbtn["address"]}
                          </span>
                        </div>
                      </div>
                      <div className="col- col-sm-12 col-md-6 col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            value={city}
                            name="city"
                            className="form-control"
                            placeholder="City"
                            onChange={(e) => props.handleChangebtn(e)}
                          />
                          <span className="error">
                            {props.errorsbtn["city"]}
                          </span>
                        </div>
                      </div>
                      <div className="col- col-sm-12 col-md-6 col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            value={zip}
                            name="zip"
                            className="form-control"
                            placeholder="Zip Code"
                            onChange={(e) => props.handleChangebtn(e)}
                          />
                          <span className="error">
                            {props.errorsbtn["zip"]}
                          </span>
                        </div>
                      </div>
                      <div className="col- col-sm-12 col-md-6 col-lg-6">
                        <div className="form-group">
                          <select
                            value={state}
                            name="state"
                            className="form-control"
                            onChange={(e) => props.handleChangebtn(e)}
                          >
                            <option value="">---Select State---</option>
                            <option value="alabama">Alabama</option>
                            <option value="alaska">Alaska</option>
                            <option value="arizona">Arizona</option>
                            <option value="arkansas">Arkansas</option>
                            <option value="california">California</option>
                          </select>
                          <span className="error">
                            {props.errorsbtn["state"]}
                          </span>
                        </div>
                      </div>
                      <div className="col- col-sm-12 col-md-12 col-lg-12">
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            rows="5"
                            value={comment}
                            name="comment"
                            maxlength="250"
                            placeholder="Comment"
                            onChange={(e) => props.handleChangebtn(e)}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="col- col-sm-12 col-md-12 col-lg-12">
                      <button type="submit" className="btn btn-primary">
                        Request A Quote
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              {props.formdatasubmit.length > 0 && (
                <table className="employee-dta">
                  <tr>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Zip Code</th>
                    <th>State</th>
                    <th>Comment</th>
                  </tr>
                  {props.formdatasubmit.map((repo) => {
                    return (
                      <tr>
                        <td>{repo.fullname}</td>
                        <td>{repo.email}</td>
                        <td>{repo.phone}</td>
                        <td>{repo.address}</td>
                        <td>{repo.city}</td>
                        <td>{repo.zip}</td>
                        <td>{repo.state}</td>
                        <td>{repo.comment}</td>
                      </tr>
                    );
                  })}
                </table>
              )}
            </div>
          </div>
        </div>
      </>
    );
}
export default ContactForm;
