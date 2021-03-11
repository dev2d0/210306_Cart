import React from 'react';
import Navbar from './components/views/Navbar/Menu';
import ProductsPage from './components/views/Products/ProductsPage'
import CartPage from './components/views/Cart/CartPage'
import Copyright from './components/views/Copyright/Copyright'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={ProductsPage} />
        <Route path='/cart' exact component={CartPage} />
      </Switch>
      <Copyright />
    </Router>
  );
};

export default App;