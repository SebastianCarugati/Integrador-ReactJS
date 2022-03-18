import React from "react";
import { useDispatch } from "react-redux";
import { ProductAction } from "../../redux/products";
import { useSelector } from "react-redux";
import './Products.css';

const Product = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const token = useSelector (state=> state.user);
  console.log (products)



const handleClickProducts = () => {
  dispatch (ProductAction(token))
}

  return (
    <div className="contenedor">
      <div className="contenedor-button">
      <button className="button" onClick={handleClickProducts}>Solicitar Productos</button>
      </div>
      <div>
      {products.products.map(p => <h5>{p.name}</h5>)}
      </div>
    </div>
  );
};

export default Product;

