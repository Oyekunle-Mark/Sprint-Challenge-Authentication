import React, { useState } from 'react';
import axios from 'axios';
import { object } from 'prop-types';

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
    <div>
      <div>
        <Form type="register" handleSubmit={register} />
        <p>{registerMessage}</p>
      </div>
      <div>
        <Form type="login" handleSubmit={login} />
        <p>{loginMessage}</p>
      </div>
    </div>
  );
};

LandingPage.propTypes = {
  history: object.isRequired,
};

export default LandingPage;
