import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRemove } from '@fortawesome/free-solid-svg-icons'


const CartItem = ({ cartItem }) => {
    return (
        <div className="added-product mt-3">
            <div className='row'>
                <img src={cartItem.image} alt={cartItem.name} className="img-fluid img-thumbnail rounded col-3" />
                <span className='col-6'>{cartItem.name}</span>
                <FontAwesomeIcon className='col-1' icon={faRemove} />
            </div>
        </div>
    )
}

export default CartItem