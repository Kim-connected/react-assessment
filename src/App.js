import React from 'react';
import './App.css';
import Header from './components/Header.js'
import Products from './components/Products.js'


function App() {
  return(
    <div className="container">
      <Header/>
      <Products/>
    </div>
  );
}
export default App;
