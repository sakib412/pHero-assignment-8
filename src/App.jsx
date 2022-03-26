import { useEffect, useState } from 'react';
import './App.css';
import ProductList from './components/Products/ProductList.comp';

function App() {
  const [headphones, setHeadphones] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch('data/headphones.json').then(data => data.json()).then(
      results => {
        setHeadphones(results)
        console.log(results)
      }
    )
  }, [])


  return (
    <div className="container">
      <div>
        <h1 className='text-center mt-5 text-success'>Buy Headphones</h1>
        <h4 className='text-center text-secondary'>Choose 4 headphones</h4>
      </div>
      <div className="row">
        <div className="col-md-9">
          <ProductList items={headphones} />
        </div>
        <div className="col-md-3 selected-products">
          <h5>Selected headphones</h5>
          <div className="added-products">
            <div className="added-product">

            </div>
          </div>
        </div>
      </div>





    </div>
  );
}

export default App;
