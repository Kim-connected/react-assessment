import React from 'react';
import Products from './components/Products.js'

function Sort() {

  products.sort((a,b)=>{
    return b.price - a.price;
  });
  console.log(products);
}
export default Sort
