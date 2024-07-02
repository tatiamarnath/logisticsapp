import React, { useState, useEffect } from 'react';
import DriverItem from './DriverItem';
import SearchBox from './SearchBox';
import '../style/DriverList.css';

const DriverList = () => {
  const [drivers, setDrivers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('/data/drivers.json')
      .then(response => response.json())
      .then(data => setDrivers(data))
      .catch(error => console.error('Fetch error:', error));
  }, []);

  const filteredDrivers = drivers.filter(driver => {
    const name = driver.name ? driver.name.toLowerCase() : '';
    const registration = driver.registration ? driver.registration.toLowerCase() : '';
    return (
      name.includes(searchTerm.toLowerCase()) || 
      registration.includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="driver-list">
      <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {filteredDrivers.map(driver => (
        <DriverItem key={driver.id} driver={driver} />
      ))}
    </div>
  );
};

export default DriverList;
