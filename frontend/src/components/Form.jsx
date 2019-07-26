import React, { useState } from 'react';
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
  const [formValues, setFormValues] = useState({
    username: '',
    password: '',
  });

  const handleChange = e =>
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });

  const submitForm = e => {
    e.preventDefault();

    handleSubmit(formValues);
    setFormValues({
      username: '',
      password: '',
    });
  };

  return (
    <StyledForm onSubmit={submitForm}>
      <input
        type="text"
        name="username"
        placeholder="username"
        value={formValues.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={formValues.password}
        onChange={handleChange}
      />
      <button type="submit">{type}</button>
    </StyledForm>
  );
};

Form.propTypes = {
  type: string.isRequired,
  handleSubmit: func.isRequired,
};

export default Form;
