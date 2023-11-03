import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';
import ItemCart from '../ItemCart/ItemCart';
import { getFirestore, addDoc, collection } from 'firebase/firestore';


const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const order = {
    buyer: {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
    },
    items: cart.map((product) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      stock: product.stock,
    })),
    total: totalPrice(),
  };

  const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    addDoc(ordersCollection, order).then(({ id }) => console.log(id));    
  };

  if (cart.length === 0) {
    return (
      <>
        <p>No hay productos en el carrito.</p>
        <Link to='/'>Volver a la tienda</Link>
      </>
    );
  }

    return (
      <div>
        {cart.map((product) => (
          <ItemCart key={product.id} product={product} />
        ))}
        <p>Total: {totalPrice()}</p>
        <form>
          <label>
            Nombre:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Teléfono:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Dirección:
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
            />
          </label>
        </form>
        <button onClick={handleClick}>Confirmar compra</button>
        
        <Link to='/'>Seguir comprando</Link>
      </div>
    );
        }
export default Cart;