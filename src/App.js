import React from 'react';
import Navbar from './components/views/Navbar/Menu';
import Products from './components/views/Products/Products'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/products' exact component={Products} />
      </Switch>
    </Router>
  );
};

export default App;