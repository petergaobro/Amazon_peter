
import React from 'react';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
// import Product from './Product/Product';

function App() {
  return (
    // BEM
    <div className="App">
      {/* Home */}
      <Header />
      {/* Home */}
      <Home />
      {/* product */}
      {/* <Product /> */}
    </div>

  );
}

export default App;
