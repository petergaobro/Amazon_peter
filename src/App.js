
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import Subtotal from './components/Subtotal/Subtotal';
// import Product from './Product/Product';

function App() {
  return (
    // BEM
    <Router>
      <div className="App">
        <Header />
        <Switch>
          {/* checkout */}
          <Route path="/checkout">
            <Checkout />
          </Route>
          {/* home */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
