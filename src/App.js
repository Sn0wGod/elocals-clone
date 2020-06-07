import React from 'react';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import { Switch, Route } from 'react-router-dom';
import Seller from './components/Sellers/Seller';
import Product from './components/Products/Product';

function App() {
  return (
    <div className="App">
     
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/product" component={Product} />
        <Route exact paht="/seller" component={Seller} />
      </Switch>
    </div>
  );
}

export default App;
