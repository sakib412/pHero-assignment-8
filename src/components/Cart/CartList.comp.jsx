import React from 'react'
import CartItem from './CartItem.comp'

const CartList = ({ cart, onDelete }) => {
    return (
        <div className="added-products">
            {cart.map(cartItem => (
                <CartItem key={cartItem.id} cartItem={cartItem} onDelete={onDelete} />
            ))}
        </div>
    )
}

export default CartList