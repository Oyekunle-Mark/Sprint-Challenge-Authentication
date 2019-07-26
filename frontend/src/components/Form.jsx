import React, { createRef } from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 270px;
  background: #ecbe13;
  padding: 30px;
  margin: 20px;
  border-radius: 5px;

  input {
    width: 250px;
    height: 25px;
    margin: 10px 0;
    border: 1px solid #634c03;
    border-radius: 3px;
    padding: 3px;
  }

  button {
    border: 1px solid #ffffff;
    background: #ffffff;
    height: 25px;
    width: 80px;
    margin: 10px 0;
    font-size: 12px;
    border-radius: 3px;
  }
`;

const Form = ({ handleSubmit, type }) => {
  const username = createRef();
  const password = createRef();

  const submitForm = e => {
    e.preventDefault();

    handleSubmit({
      username: username.current.value,
      password: password.current.value,
    });
  };

  return (
    <StyledForm onSubmit={submitForm}>
      <input type="text" placeholder="username" ref={username} />
      <input type="password" placeholder="password" ref={password} />
      <button type="submit">{type}</button>
    </StyledForm>
  );
};

Form.propTypes = {
  type: string.isRequired,
  handleSubmit: func.isRequired,
};

export default Form;
