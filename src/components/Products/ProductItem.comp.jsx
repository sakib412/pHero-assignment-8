import React from 'react'

const ProductItem = (props) => {
    const { item, onAddCart } = props
    return (
        <div className="card mb-3 me-2 product text-center">
            <img src={item.image} className="card-img-top card-img" alt={item.name} />
            <div className="card-body">
                <h5>{item.name}</h5>
                <p className="card-text"> <span className='text-muted'>Price:</span>  $ {item.price}</p>
                <button className='btn btn-success' onClick={() => { onAddCart(item) }}>Add to cart</button>
            </div>
        </div>
    )
}

export default ProductItem