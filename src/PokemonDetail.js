import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom'

function Item({ match }) {
  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);

  const [item, setItem] = useState({});
  const fetchItem = async () => {
    const fetchItem = await fetch(`https://pokeapi.co/api/v2/pokemon/${match.params.order}`)
    const item = await fetchItem.json();
    console.log(item);
  }
  return (
    <div>
      <h1>Pokemon</h1>
    </div>
  );
}

export default Item;
