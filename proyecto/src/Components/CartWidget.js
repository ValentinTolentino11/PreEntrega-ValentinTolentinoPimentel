import React from 'react'
import { useState } from 'react'


const Cart = () => {
    const [counter, setCounter]= useState (0);
  return (
    <div>
        <button onClick={()=>setCounter(counter +1)}></button>
        <button onClick={()=>setCounter(counter -1)}></button>
        <button variant="outline-success"><i class="bi bi-cart4"></i><span>0</span></button>

    </div>
  )
}

export default Cart