import React from 'react'
import ProductItem from './ProductItem.comp'

const ProductList = ({ items }) => {
    return (
        <div className="products">
            {items.map(headphone => (
                <ProductItem item={headphone} />
            ))}
        </div>
    )
}

export default ProductList