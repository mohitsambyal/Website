import React from "react";
//import { Button, Modal }from "react-bootstrap";
//import { Button }from "react-bootstrap";
import Modal from "react-modal";


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

const UserApiList = (props) => {
 // const regex = /(<([^>]+)>)/gi;
 // console.log("Form Data search", props.handlesearch);
 // console.log("Form Data search", props.search);
  //console.log("Test User Api", props.userproductlists);
  
  //if (!props.userproductlists || props.userproductlists.length === 0) 
    // return (
    //   <>
    //     <section className="toppsdifference">
    //       <div className="container">
    //         <div className="row">
    //           <input
    //             type="text"
    //             placeholder="Search"
    //             name="search"
    //             value={props.search}
    //             className="search-input"
    //             onChange={props.handlesearch}
    //           ></input>
    //           <table
    //             id="dtBasicExample"
    //             className="table table-striped table-bordered table-sm"
    //             cellSpacing="0"
    //             width="100%"
    //           >
    //             <thead>
    //               <tr>
    //                 <th className="th-sm">ID 🎉</th>
    //                 <th className="th-sm">Name</th>
    //                 <th className="th-sm">Email</th>
    //                 <th className="th-sm">Phone</th>
    //                 <th className="th-sm">Address</th>
    //                 <th className="th-sm">Agreement Text </th>
    //               </tr>
    //             </thead>
    //             <tbody>
    //               <tr>
    //                 <p>No Result, sorry</p>
    //               </tr>
    //             </tbody>
    //           </table>
    //         </div>
    //       </div>
    //     </section>
    //   </>
    // );
  return (
    <section className="toppsdifference">
      <div className="container">
        <div className="row">
          <input
            type="text"
            placeholder="Search"
            name="search"
            value={props.search}
            className="search-input"
            onChange={props.handlesearch}
          ></input>
          <table
            id="dtBasicExample"
            className="table table-striped table-bordered table-sm"
            cellSpacing="0"
            width="100%"
          >
            <thead>
              <tr>
                <th className="th-sm">ID 🎉</th>
                <th className="th-sm">Agreement Text </th>
              </tr>
            </thead>
            <tbody>
              {props.userproductlists.length > 0 ?
                props.userproductlists.map((repo) => {
                  return (
                    <tr key={repo.id}>
                      <td>{repo.id}</td>
                      <td>{repo.name}</td>
                      <td>
                        {repo.desc.length > 30
                          ? `${repo.desc && repo.desc.substring(0, 25)} .... `
                          : repo.desc && repo.desc}
                        {repo.desc && repo.desc.length > 30 && (
                          <span
                            onClick={() => props.handleShow(repo)}
                            className="read-content"
                          >
                            Read More
                          </span>
                        )}
                        {/* {repo.associateAgreement &&
                        repo.associateAgreement.agreementText.replace(regex, "")
                          .length > 60
                          ? `${
                              repo.associateAgreement &&
                              repo.associateAgreement.agreementText
                                .replace(regex, "")
                                .substring(0, 55)
                            }....`
                          : repo.associateAgreement &&
                            repo.associateAgreement.agreementText.replace(
                              regex,
                              ""
                            )} */}
                      </td>
                    </tr>
                  );
                }) : <tr> <td colSpan="3" className="error-found">  Not Found Record!  </td> </tr>}
            </tbody>
          </table>
          <Modal
            isOpen={props.show}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <div className="modal-header">
              <h5 className="modal-title">{props.id}</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={props.handleClose}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>{props.name}</p>
              <p>{props.desc}</p>
            </div>
          </Modal>
        </div>
      </div>
    </section>
  );
};
export default UserApiList;
