import React from 'react';
import Navbar from './components/views/Navbar/Menu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
      </Switch>
    </Router>
  );
};

export default App;