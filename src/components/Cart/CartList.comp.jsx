import React from 'react'
import CartItem from './CartItem.comp'

const CartList = ({ cart }) => {
    return (
        <div className="added-products">
            {cart.map(cartItem => (
                <CartItem key={cartItem.id} cartItem={cartItem} />
            ))}
        </div>
    )
}

export default CartList