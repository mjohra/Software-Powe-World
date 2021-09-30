import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [carts,setCarts]=useState([]);

  const handleAddProduct=(product)=>{
      const newCart=[...carts, product ]
      setCarts(newCart)
  }

  useEffect(() => {
    fetch("/personData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <div className="row details">
        <div className="col-md-9">
          {/* product load */}
          <div className="row">
              {
                products.map(product=><Product
                key={product.key}
                product={product}
                handleAddProduct={handleAddProduct}
                ></Product>)
              }
            
          </div>
        </div>
        <div className="col-md-3">
            {/* cart calculation */}
            <Cart
            carts={carts}
            ></Cart>
            
            </div>
      </div>
    </div>
  );
};

export default Shop;
