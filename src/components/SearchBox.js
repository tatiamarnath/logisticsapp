import React from 'react';
import '../style/SearchBox.css';

const SearchBox = ({ searchTerm, setSearchTerm }) => (
  <input 
    type="text" 
    placeholder="Search drivers..." 
    value={searchTerm}
    onChange={e => setSearchTerm(e.target.value)}
  />
);

export default SearchBox;
