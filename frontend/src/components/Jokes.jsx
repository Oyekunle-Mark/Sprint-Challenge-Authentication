import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    <div>
      <h1>Joke Collection</h1>
      <h2>{!jokes.length && current}</h2>
      <ul>{jokeList}</ul>
    </div>
  );
};

export default Jokes;
