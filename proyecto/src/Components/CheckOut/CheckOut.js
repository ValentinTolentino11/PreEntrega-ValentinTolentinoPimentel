import { useState } from "react";
import {getFirestore, addDoc, collection, doc, getDoc, updateDoc} from 'firebase/firestore';
import { useCartContext } from "../../Context/CartContext";

export const Checkout = ()=> {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [emailConfirmacion, setEmailConfirmacion] = useState('');
    const [error, setError] = useState('');
    const [ordenId, setOrdenId] = useState('');
    const [mensaje, setMensaje] = useState('');
}

const {cart, removeProduct, totalPrice} = useCartContext();

const manejadorFormulario = (event) =>{
    event.PreventDefault();
    if(!nombre|| !apellido || !telefono || !email || !emailConfirmacion){
        setError('Completa todos los campos obligatorios');
        return;
    }
    if(email !== emailConfirmacion){
        setError('El email no coincide');
        return;
    }
    const total= totalPrice();
    const orden= {
        items: cart.map((product)=>({
            id: product.id,
            title: product.title,
            price: product.price,
            quantity: product.quantity,

        })),

        total: total,
        fecha: new Date(),
        nombre,
        apellido,
        telefono,
        email,
    };

    Promise.all(
        orden.items.map(async(productoOrden)=>{
            constDb = getFirestore();
            const productoRef = Doc (db, 'products', productoOrden.id);

            const productoDoc = await getDoc(productoRef);
        })
    )
}

