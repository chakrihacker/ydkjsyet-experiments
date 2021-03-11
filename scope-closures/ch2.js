// Chapter 2: Illustrating lexical scope

// Marbles, and Buckets, and Bubbles... Oh My!

// RED: Outer most scope: window/global
const planets = [
  { id: 1, name: 'Mercury' },
  { id: 2, name: 'Venus' },
  { id: 3, name: 'Earth' },
  { id: 4, name: 'Mars' },
  { id: 5, name: 'Jupiter' },
  { id: 6, name: 'Neptune' },
  { id: 7, name: 'Pluto' }
]

function getPlanetName(planetId) {
  // BLUE: function scope
  for(let planet of planets) {
    // GREEN: loop scope
    if(planet.id === planetId) {
      return planet.name
    }
  }
}

var nextPlanet = getPlanetName(3)

console.log(nextPlanet) // Earth

// A conversation among friends