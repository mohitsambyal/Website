import React from "react";

const EmployeeList = (props) => {
  //const { employees } = props; // initializing prop
  //console.log("tesyyyyyyyyy", props.ArylistDta);

  if (!props.employees || props.employees.length === 0)
    return <p>No repos, sorry</p>;
  return (
    <section className="topps-difference">
      <div className="container">
        <div className="row">
          <table className="employee-dta">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Salary</th>
              <th>Age</th>
            </tr>
            {props.employees.length > 0 &&
              props.employees.map((repo) => {
                return (
                  <tr>
                    <td>{repo.id}</td>
                    <td>{repo.employee_name}</td>
                    <td>{repo.employee_salary}</td>
                    <td>{repo.employee_age}</td>
                  </tr>
                );
              })}
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Salary</th>
              <th>Age</th>
            </tr>
          </table>
        </div>
        <ul>   
        {props.buttonshowdta === true && (      
          props.ArylistDta.map((item) => (
            <li key={item.id}>{item.id} {item.name}</li>
          ))       
        )}    
        </ul>     
        <button onClick={props.buttonset}>
          {props.buttonshowdta === true ? ( 
            "Hide"
          ) : (
            "Show"
          )}
        </button>
      </div>
    </section>
  );
};
export default EmployeeList;
