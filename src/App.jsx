import { useEffect, useState } from 'react';
import './App.css';
import CartList from './components/Cart/CartList.comp';
import ProductList from './components/Products/ProductList.comp';

function App() {
  const [headphones, setHeadphones] = useState([])
  const [cart, setCart] = useState([])
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch('data/headphones.json')
      .then(data => data.json())
      .then(results => { setHeadphones(results) })
  }, [])

  const onAddCart = (item) => {
    setMessage('')
    // first check item is already in cart
    if (cart.find(cartItem => cartItem.id === item.id)) {
      setMessage('This item is already exist')
    }
    else if (cart.length > 3) {
      setMessage('Cart item cannot be greater than 4')
    } else {
      // add item to cart 
      setCart([...cart, item])
    }
  }
  const onResetCart = () => {
    setMessage('')
    // setCart to empty array
    setCart([])
  }
  const onChoose = () => {
    setMessage('')
    // if cart length is not 0
    if (cart.length) {
      const index = Math.floor((Math.random() * (cart.length)))
      setMessage(`Choiced headphone: ${cart[index].name}`)
    } else {
      setMessage('Please add some headphones to cart first.')
    }

  }

  return (
    <div className="container">
      <div>
        <h1 className='text-center mt-5 text-success'>Buy Headphones</h1>
        <h4 className='text-center text-secondary'>Choose 4 headphones</h4>
      </div>
      <div className="row">
        <div className="col-md-9">
          <ProductList items={headphones} onAddCart={onAddCart} />
        </div>
        <div className="col-md-3 selected-products">
          <h5>Selected headphones</h5>
          <CartList cart={cart} />
          <button className='btn btn-primary mt-4' onClick={onChoose}>Choose 1 for me</button>
          <button className='btn btn-danger mt-3' onClick={onResetCart}>Reset</button>
          {message ?
            (<p className='my-5 text-danger'>{message}</p>) :
            null}

        </div>
      </div>
    </div>
  );
}

export default App;
