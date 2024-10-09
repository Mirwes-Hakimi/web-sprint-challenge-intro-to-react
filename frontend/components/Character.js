import React, { useState } from 'react';

const Character = ({ name, birthYear, homeworld }) => {
  const [showPlanet, setShowPlanet] = useState(false);

  // Toggle planet visibility when the card is clicked
  const handleCardClick = () => {
    setShowPlanet(!showPlanet);
  };

  return (
    <div className="character-card" onClick={handleCardClick}>
      <h3 className="character-name">{name}</h3>
      <p>Birth Year: {birthYear}</p>
      {showPlanet && <p className="character-planet">Homeworld: {homeworld}</p>}
    </div>
  );
};

export default Character;



// const Character = ({ name,  homeworld }) => {
//   const [showPlanet, setShowPlanet] = useState(false);


//   // Toggle the visibility of the planet when clicking the card
//   const handleTogglePlanet = () => {
//     setShowPlanet(!showPlanet);
//   };

//   return (
//     <div className="character-card" key={Character.id} onClick={handleTogglePlanet}>
//       <h3 className="character-name">{name}</h3>
      
//       {showPlanet && <p className="character-planet">Homeworld: {homeworld}</p>}
//     </div>
//   )



// }
// export default Character;