import React, {useState, useEffect} from 'react';

function Products() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [products, setProducts] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("http://localhost:8080/products")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setProducts(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="card-row1">
        {products.map(product => (
          <div className="card" key={product.id} style={{ margin: '30px' }}>
            <div className= "ascii-face">{`${product.face}`}</div>
            <div className= "product-description">{`Font Size: ${product.size}`}</div>
            <div className= "product-description">{`Price: ${product.price}`}</div>
            <button className="buy-button"> Buy</button>
          </div>
        ))}
      </div>
    );
  }
}

export default Products;
