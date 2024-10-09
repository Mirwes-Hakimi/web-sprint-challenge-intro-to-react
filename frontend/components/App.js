// import React, { useState, useEffect } from 'react';
// import Character from './Character';

// const App = () => {
//   const [characters, setCharacters] = useState([]);
//   const [planets, setPlanets] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [charactersResponse, planetsResponse] = await Promise.all([
//           fetch('http://localhost:9009/api/people'),
//           fetch('http://localhost:9009/api/planets')
//         ]);

//         const charactersData = await charactersResponse.json();
//         const planetsData = await planetsResponse.json();

//         // Store the fetched data in the state
//         setCharacters(charactersData);
//         setPlanets(planetsData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   // Find the planet's name based on the character's homeworld id
//   const getHomeworldName = (homeworldId) => {
//     const planet = planets.find((planet) => planet.id === homeworldId);
//     return planet ? planet.name : 'Unknown';
//   };

//   return (
//     <div>
//       <h2>Star Wars Characters</h2>
//       {characters.length > 0 ? (
//         characters.map((char, index) => (
//           <Character
//             key={index}
//             name={char.name}
//             birthYear={char.birth_year}
//             homeworld={getHomeworldName(char.homeworld)}
//           />
//         ))
//       ) : (
//         <p>Loading characters...</p>
//       )}
//     </div>
//   );
// };

// export default App;



import React, { useState, useEffect } from 'react';
import Character from './Character';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add a loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [charactersResponse, planetsResponse] = await Promise.all([
          fetch('http://localhost:9009/api/people'),
          fetch('http://localhost:9009/api/planets')
        ]);

        const charactersData = await charactersResponse.json();
        const planetsData = await planetsResponse.json();

        // Store the fetched data in the state
        setCharacters(charactersData);
        setPlanets(planetsData);
        setIsLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const getHomeworldName = (homeworldId) => {
    const planet = planets.find((planet) => planet.id === homeworldId);
    return planet ? planet.name : 'Unknown';
  };

  if (isLoading) {
    return <p>Loading characters...</p>; // Show loading state until data is fetched
  }

  return (
    <div>
      <h2>Star Wars Characters</h2>
      {characters.map((char, index) => (
        <Character
          key={index}
          name={char.name}
          birthYear={char.birth_year}
          homeworld={getHomeworldName(char.homeworld)}
        />
      ))}
    </div>
  );
};

export default App;


