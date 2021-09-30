import React from "react";
import Person from "../Person/Person";
import './Cart.css'

const Cart = (props) => {
  const { carts } = props || {};
  const totalReducer = (prevValue, currentValue) =>
    prevValue + currentValue.salary;

  const total = carts.reduce(totalReducer, 0).toFixed(2);
  return (
    <div className="cart-details">
      <h3><i className="fas fa-user"></i> Total Added: {carts.length}</h3>
      <h3>Total Cost: ${total} </h3>
      {
        carts.map((pd)=><Person
        pd={pd}
        ></Person>)
      }
      {/* <ul>
        {carts.map((product) => (
          <li>{product.name}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default Cart;
