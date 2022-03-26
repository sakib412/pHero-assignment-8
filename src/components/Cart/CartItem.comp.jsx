import React from 'react'

const CartItem = ({ cartItem }) => {
    return (
        <div className="added-product">
            <div className='row'>
                <img src={cartItem.image} alt={cartItem.name} className="img-fluid img-thumbnail rounded col-md-3" />
                <span className='col-md-7'>{cartItem.name}</span>

            </div>

        </div>
    )
}

export default CartItem