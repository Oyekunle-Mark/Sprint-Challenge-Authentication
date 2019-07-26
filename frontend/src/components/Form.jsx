import React, { createRef } from 'react';
import { func, string } from 'prop-types';

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
    <form onSubmit={submitForm}>
      <input type="text" placeholder="username" ref={username} />
      <input type="password" placeholder="password" ref={password} />
      <button type="submit">{type}</button>
    </form>
  );
};

Form.propTypes = {
  type: string.isRequired,
  handleSubmit: func.isRequired,
};

export default Form;
