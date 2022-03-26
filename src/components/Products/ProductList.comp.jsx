import React from 'react'
import ProductItem from './ProductItem.comp'

const ProductList = ({ items, onAddCart }) => {
    return (
        <div className="products">
            {items.map(headphone => (
                <ProductItem key={headphone.id} item={headphone} onAddCart={onAddCart} />
            ))}
        </div>
    )
}

export default ProductList