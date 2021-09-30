import React from "react";
import './Product.css'

const Product = (props) => {
  const{name,position,Age,salary,country,img}=props.product || {};
  return (
    <div className="col-md-4 my-2 py-2 ">
      <div className="card py-3 card-details">
        <img src={img} className="card-img-top card-img rounded-circle" alt="..." />
        <div className="card-body ">
          <h1 className="card-title">{name}</h1>
          <h3 className="card-text">
            <small>Position: {position}</small>
          </h3>
          <h5 className="card-text">
            <small>Age: {Age}</small>
          </h5>
          <h5 className="card-text">
            <small>Country: {country}</small>
          </h5>
          <h5 className="card-text">
            <small>Salary: ${salary}</small>
          </h5>
          <button className="add-btn" 
          onClick={()=>props.handleAddProduct(props.product)}
          ><i className="fas fa-shopping-cart"></i> Add to cart</button> <br />
          <div className="icon">
            <h2>
              <a href="#home"><i className="fab fa-facebook "></i></a>
              <a href="#home"><i className="fab fa-twitter-square"></i></a>
            </h2>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
