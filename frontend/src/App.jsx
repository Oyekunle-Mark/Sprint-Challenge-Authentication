import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';

import LandingPage from './components/LandingPage';
import Jokes from './components/Jokes';
import WithAuth from './components/WithAuth';
import Header from './components/Header';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;

  background: #fde6bd;
  min-height: 100vh;
`;

const App = () => (
  <Router>
    <StyledApp>
      <Header />
      <Route exact path="/" component={LandingPage} />
      <WithAuth path="/jokes" component={Jokes} />
    </StyledApp>
  </Router>
);

export default App;
