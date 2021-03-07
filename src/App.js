import React from 'react';
import Navbar from './components/views/Navbar/Menu';
import ProductsPage from './components/views/Products/ProductsPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/products' exact component={ProductsPage} />
      </Switch>
    </Router>
  );
};

export default App;