import React, { useState } from "react";

const ItemCount = ({ stock, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(1);

  const incrementarStock = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
      onQuantityChange(quantity + 1);
    }
  };

  const decrementarStock = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      onQuantityChange(quantity - 1);
    }
  };

  return (
    <div className="container" id="itemcount">
      <div className="row mb-3">
        <div className="col-md-2">
          <div className="btn-group" role="group" aria-label="Basic outlined example">
            <button type="button" className="btn btn-outline-primary" onClick={decrementarStock}>-</button>
            <button type="button" className="btn btn-outline-primary">{quantity}</button>
            <button type="button" className="btn btn-outline-primary" onClick={incrementarStock}>+</button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-2">
          <p>Stock disponible: {stock}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
