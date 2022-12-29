import React from "react";

const ProductList = (props) => {
  //const { productlist } = props; // initializing prop
  
  console.log("testtt", props.productlist);

  if (!props.productlist || props.productlist.length === 0)
    return <p>No repos, sorry</p>;
  return (
    <section className="toppsdifference">
      <div className="container">
        <div className="row">
          <table className="employee-dta">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Image</th>
              <th>Price</th>
              <th>Discount</th>
            </tr>
            {props.productlist.length > 0 &&
              props.productlist.map((repo) => {
                return (
                  <tr>
                    <td>{repo.id}</td>
                    <td>{repo.name}</td>
                    <td>{repo.description}</td>
                    <td><img src={repo.image} /></td>
                    <td>{repo.price}</td>
                    <td>{repo.discount_amount}</td>
                  </tr>
                );
              })}
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Image</th>
              <th>Price</th>
              <th>Discount</th>
            </tr>
          </table>
        </div>
      </div>
    </section>
  );
};
export default ProductList;
