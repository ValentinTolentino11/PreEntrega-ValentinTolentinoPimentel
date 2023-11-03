import React from "react";
import {useCartContext} from '../../Context/CartContext';

const ItemCart = ({ product }) => {
  const { removeProduct } = useCartContext(); 

  const handleRemoveClick = () => {
    removeProduct(product.id); 
  };

  return (
    <div>
      <img src={product.img} alt={product.title} />
      <div>
        <p>Título: {product.title}</p>
        <p>Cantidad: {product.stock}</p>
        <p>Precio: {product.price}</p>
        <p>Subtotal: ${product.stock * product.price}</p>
        <button onClick={handleRemoveClick}>Eliminar</button>
      </div>
    </div>
  );
}

export default ItemCart;
