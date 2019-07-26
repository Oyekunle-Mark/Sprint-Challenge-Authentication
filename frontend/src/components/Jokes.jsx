import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const StyledJokes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h4 {
    font-family: 'Rajdhani', sans-serif;
    margin: 20px;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
  }

  ul li {
    background: #ecbe13;
    width: 70vw;
    margin: 10px 0;
    padding: 15px;
    font-size: 14px;
    font-family: sans-serif;
    border-radius: 3px;
  }
`;

const Jokes = () => {
  const [jokes, setJokes] = useState([]);
  const [current, setCurrent] = useState('Loading...');

  const getJokes = () => {
    const token = localStorage.getItem('token');

    axios
      .get('http://localhost:5000/api/jokes', {
        headers: {
          Authorization: token,
        },
      })
      .then(res => setJokes(res.data))
      .catch(err => setCurrent('Error fetching jokes.'));
  };

  useEffect(getJokes, []);

  const jokeList = jokes.map(jk => <li key={jk.id}>{jk.joke}</li>);

  return (
    <StyledJokes>
      <h4>Joke Collection</h4>
      <h2>{!jokes.length && current}</h2>
      <ul>{jokeList}</ul>
    </StyledJokes>
  );
};

export default Jokes;
