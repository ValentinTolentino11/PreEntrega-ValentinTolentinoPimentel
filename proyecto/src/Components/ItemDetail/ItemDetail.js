import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useCartContext } from '../../Context/CartContext';

const ItemDetail = ({ item }) => {
  const { addProduct, isInCart } = useCartContext();
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const handleAddToCart = () => {
    if (!isInCart(item.id)) {
      // Si el producto no está en el carrito, lo agrega con la cantidad seleccionada.
      if (selectedQuantity <= item.stock) {
        addProduct(item, selectedQuantity);
      } else {
        // Si la cantidad seleccionada supera el stock, limita la cantidad al stock disponible.
        addProduct(item, item.stock);
      }
    } else {
      // Si el producto ya está en el carrito, actualiza la cantidad sin verificar el stock.
      addProduct(item, selectedQuantity);
    }
  };

  return (
    <div className='cardItemDetail'>
      <Card className='mx-auto' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={item.img} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            <p>{item.description}</p>
            <p>$ {item.price}</p>
            <p>Stock: {item.stock}</p>
          </Card.Text>
          <Button variant="primary" onClick={handleAddToCart}>
            Añadir al carrito
          </Button>
        </Card.Body>
      </Card>
      <div>
        <ItemCount
          stock={item.stock}
          onQuantityChange={setSelectedQuantity}
        />
      </div>
    </div>
  );
};

export default ItemDetail;
