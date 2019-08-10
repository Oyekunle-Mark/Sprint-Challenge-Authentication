import React, { useState } from 'react';
import axios from 'axios';
import { object } from 'prop-types';
import styled from 'styled-components';

const StyledLandingPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h4 {
    font-family: 'Rajdhani', sans-serif;
    margin-top: 40px;
    font-size: 20px;
    font-weight: bold;
  }

  hr {
    width: 70vw;
    font-weight: 100;
    transform: scaleY(0.3);
  }

  div p {
    font-family: 'Rajdhani', sans-serif;
    font-size: 16px;
    font-weight: bold;
    color: #d11e48;
    text-align: center;
  }
`;

import Form from './Form';

const LandingPage = ({ history }) => {
  const [registerMessage, updateRegisterMessage] = useState('');
  const [loginMessage, updateloginMessage] = useState('');

  const register = user =>
    axios
      .post('http://localhost:5000/api/auth/register', user)
      .then(res => {
        updateRegisterMessage(res.data.message);
      })
      .catch(err => {
        console.log('Error creating user');
      });

  const login = user =>
    axios
      .post('http://localhost:5000/api/auth/login', user)
      .then(res => {
        console.log('Logged in');
        localStorage.setItem('token', res.data.token);
        history.push('/jokes');
      })
      .catch(err => {
        updateloginMessage('Incorrect username or password');
      });

  return (
    <StyledLandingPage>
      <h4>Register</h4>
      <div>
        <Form type="Register" handleSubmit={register} />
        <p>{registerMessage}</p>
      </div>

      <hr />

      <h4>Login</h4>
      <div>
        <Form type="Login" handleSubmit={login} />
        <p>{loginMessage}</p>
      </div>
    </StyledLandingPage>
  );
};

LandingPage.propTypes = {
  history: object.isRequired,
};

export default LandingPage;
