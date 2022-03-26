import React from 'react'

const ProductItem = ({ item }) => {
    return (
        <div className="card mb-3 me-2 product text-center" key={item.id}>
            <img src={item.image} className="card-img-top card-img" alt="..." />
            <div className="card-body">
                <h5>{item.name}</h5>
                <p className="card-text"> <span className='text-muted'>Price:</span>  $ {item.price}</p>
                <button className='btn btn-success text-center'>Add to cart</button>
            </div>
        </div>
    )
}

export default ProductItem