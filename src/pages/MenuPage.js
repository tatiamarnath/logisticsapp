 import React from 'react';

 const MenuPage = ({ match }) => (
 <div>
 <h2>{match.params.name}</h2>
 <p>
Placeholder for {match.params.name} content.</p>
 </div>
 );

export default MenuPage;