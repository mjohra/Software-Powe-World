import React from "react";
import "./Person.css";

const Person = (props) => {
  const { name, img } = props.pd || {};
  return (

      <div className="card mb-3 person-details">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={img} className="img-fluid rounded-start text-center mx-auto d-block" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h4 className="card-title">{name}</h4>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Person;
