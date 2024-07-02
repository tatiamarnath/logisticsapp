import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/Menu.css';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/data/menu.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched data:', data); // Debugging line
        if (Array.isArray(data)) {
          setMenuItems(data);
        } else {
          throw new Error('Data is not an array');
        }
      })
      .catch(error => {
        console.error('Fetch error:', error);
        setError(error.message);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <nav className="menu">
      <ul>
        {menuItems.map(item => (
          <li key={item.id}>
            <Link to={item.route}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
