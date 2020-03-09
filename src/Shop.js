import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom'

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const items = await data.json();
    console.log(items.results);
    setItems(items.results);
  }

  return (
    <div>
      {items.map(item => (
        <h1 key={item.name}>
          <Link to={`/shop/${item.name}`}>{item.name}</Link>
        </h1>
      ))}
    </div>
  );
}

export default Shop;
