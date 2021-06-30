
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
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
