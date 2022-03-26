import { useEffect, useState } from 'react';
import './App.css';

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
          <div className="products">
            {headphones.map(headphone => (
              <div className="card mb-3 me-2 product text-center" key={headphone.id}>
                <img src={headphone.image} className="card-img-top card-img" alt="..." />
                <div className="card-body">
                  <h5>{headphone.name}</h5>
                  <p className="card-text"> <span className='text-muted'>Price:</span>  $ {headphone.price}</p>
                  <button className='btn btn-success text-center'>Add to cart</button>
                </div>
              </div>
            ))}

          </div>
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
