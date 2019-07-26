import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LandingPage from './components/LandingPage';
import Jokes from './components/Jokes';
import WithAuth from './components/WithAuth';

const App = () => (
  <Router>
    <div>
      <h1>Jokes</h1>
      <Route exact path="/" component={LandingPage} />
      <WithAuth path="/jokes" component={Jokes} />
    </div>
  </Router>
);

export default App;
