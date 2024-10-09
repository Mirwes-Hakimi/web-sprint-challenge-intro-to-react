import React, { useState } from 'react';


const Character = ({ name,  homeworld }) => {
  const [showPlanet, setShowPlanet] = useState(false);


  // Toggle the visibility of the planet when clicking the card
  const handleTogglePlanet = () => {
    setShowPlanet(!showPlanet);
  };

  return (
    <div className="character-card" key={Character.id} onClick={handleTogglePlanet}>
      <h3 className="character-name">{name}</h3>
      
      {showPlanet && <p className="character-planet">Homeworld: {homeworld}</p>}
    </div>
  )



}
export default Character;