import React from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useCartContext } from '../../Context/CartContext'; 

const CartWidget = () => {
    const { totalProducts } = useCartContext(); 

    return (
        <div>
            <button type="button" className="btn colorCartButton position-relative">
                <BsFillCartPlusFill />
                {totalProducts() > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {totalProducts()}
                    </span>
                )}
            </button>
        </div>
    )
}

export default CartWidget;
