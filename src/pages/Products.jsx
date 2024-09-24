import React from "react";
import { useFetch } from "../custom hooks/useFetch";
import { Link } from "react-router-dom";
const Products = () => {
  let products = useFetch("https://fakestoreapi.com/products");
  console.log(products);
  
  return (
    <>
      {products.map((product) => {
        return (
          <div className="product" style={{border:"2px solid black"}}>
            <h1>{product.category}</h1>
            <h1>{product.title}</h1>
            <h1>{product.price}</h1>
            <Link to ={`/products/${product.id}`}>
            <button>details</button>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Products;
