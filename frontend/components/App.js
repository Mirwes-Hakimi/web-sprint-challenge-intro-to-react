import React, { useState, useEffect } from 'react';
import Character from './Character';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);

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
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Find the planet's name based on the character's homeworld id
  const getHomeworldName = (homeworldId) => {
    const planet = planets.find((planet) => planet.id === homeworldId);
    return planet ? planet.name : 'Unknown';
  };

  return (
    <div>
      <h2>Star Wars Characters</h2>
      {characters.length > 0 ? (
        characters.map((char, index) => (
          <Character
            key={index}
            name={char.name}
            birthYear={char.birth_year}
            homeworld={getHomeworldName(char.homeworld)}
          />
        ))
      ) : (
        <p>Loading characters...</p>
      )}
    </div>
  );
};

export default App;




// import React, {useState, useEffect} from 'react';
// import axios from 'axios';
// import Character from './Character';


// // const urlPlanets = 'http://localhost:9009/api/planets';
// // const urlPeople = 'http://localhost:9009/api/people';

// function App() {
//   // ❗ Create state to hold the data from the API;
//   const [characters, setCharacters] = useState([]);

//   // Fetch data using useEffect hook

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [charactersResponse, planetResponse] = await Promise.all([
//           fetch('http://localhost:9009/api/people'),
//           fetch('http://localhost:9009/api/planets')
//         ]);
//         // Convert the responses to JSON
//         const charactersData = await charactersResponse.json();
//         const planetsData = await planetResponse.json();

//         // Combine the characters with their homeworld data
//         const combineCharacters = charactersData.map(char => {
//           const homeworld = planetsData.find(planet => planet.id === char.homeworldId);
//           return {...char, homeworld: homeworld ? homeworld.name : 'Unknown'};
//         });

//         // Save the data in state
//         setCharacters(combineCharacters);
//       } catch (error){
//         console.log('Error fetching data: ', error);
//       }
//     };

//   fetchData();

//   },[]);

//   // Render the component
//   return (
//     <div>
//       <h2>Star Wars Characters</h2>
//       {/* Map over the characters and render a character component for each */}
//       {characters.length > 0 ? (
//         characters.map((char, index) => (
//           <Character
//             key={index}
//             name={char.name}
//             birthYear={char.birthYear}
//             homeworld={char.homeworld}
//           />
//         ))
//       ) : (
//         <p>Loading characters...</p>
//       )}
//     </div>
//   );

  
// // export default App;


// //   // const fetchData = async () =>{

// //   //   try{
// //   //     const [charactersResponse, planetsResponse] = await Promise.all([
// //   //       fetch('http://localhost:9009/api/people'),
// //   //       fetch('http://localhost:9009/api/planets')
// //   //     ]);
// //   //     // Covert the responses to JSON
// //   //     const characters = await charactersResponse.json();
// //   //     const planets = await planetsResponse.json();
// //   //     // Combine and use the data
// //   //     console.log('Characters: ', characters);
// //   //     console.log('Planets: ', planets);
// //   //   } catch (error){
// //   //     console.error('Error fetching data: ', error)
// //   //   }
// //   // }
// //   // fetchData()
// //   // // ❗ Create effects to fetch the data and put it in state
// //   // return (
// //   //   <div>
// //   //     <h2>Star Wars Characters</h2>
// //   //     <p>See the README of the project for instructions on completing this challenge</p>

// //   //     {characters.map((char, index) => (
// //   //       <Character 
// //   //       key={index}
// //   //       name={char.name}
// //   //       birthYear={char.birthYear}
// //   //       homeworld={char.homeworld}
// //   //       />
// //   //     ))}
// //   //     {/* ❗ Map over the data in state, rendering a Character at each iteration */}
// //   //   </div>
// //   // )
// // }

// }
//  export default App

// //  ❗ DO NOT CHANGE THE CODE  BELOW
//  if (typeof module !== 'undefined' && module.exports) module.exports = App



