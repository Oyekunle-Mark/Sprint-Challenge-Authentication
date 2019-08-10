import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  width: 100%;
  background: #ffc408;
  font-family: 'Bungee Outline', cursive;

  h1 {
    font-size: 30px;
    font-weight: bold;
    padding: 15px;
    text-align: center;
  }
`;

export default () => (
  <StyledHeader>
    <h1>Dad Jokes</h1>
  </StyledHeader>
);
