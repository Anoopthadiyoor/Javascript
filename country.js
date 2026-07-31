const countries = [
  { name: 'United States', population: 331002651, continent: 'North America', capital: 'Washington, D.C.' },
  { name: 'China', population: 1439323776, continent: 'Asia', capital: 'Beijing' },
  { name: 'Brazil', population: 212559417, continent: 'South America', capital: 'Brasília' },
  { name: 'United Kingdom', population: 67886011, continent: 'Europe', capital: 'London' },
  { name: 'South Africa', population: 59308690, continent: 'Africa', capital: 'Pretoria, Cape Town, Bloemfontein' },
];


// 1. Print the names of all countries.
console.log(" Country Names:");countries.map(country => console.log(country.name));


// 2. Find the country with the largest population.
let largestPopulation = countries.reduce((max, country) =>country.population > max.population ? country : max);
console.log(" Largest Population:",largestPopulation);


// 3. Find the total population of all countries.
let totalPopulation = countries.reduce((sum, country) => sum + country.population, 0);
console.log(" Total Population:",totalPopulation);


// 4. Find all countries in a specific continent (Asia).
let asiaCountries = countries.filter(country =>country.continent === "Asia"
);
console.log(" Countries in Asia:");
console.log(asiaCountries);


// 5. Print the names of capitals with more than one city.
let multipleCapitals = countries.filter(country => country.capital.includes(",")).map(country => country.capital);

console.log(" Capitals with More Than One City:");
console.log(multipleCapitals);


// 6. Sort countries based on population (descending order).
let sortedCountries = [...countries].sort((a, b) => b.population - a.population);

console.log("Countries Sorted by Population:");console.log(sortedCountries);


// 7. Find the country with the smallest population.
let smallestPopulation = countries.reduce((min, country) =>country.population < min.population ? country : min
);

console.log("Smallest Population:");
console.log(smallestPopulation);


// 8. Find the country with the longest name.
let longestName = countries.reduce((longest, country) => country.name.length > longest.name.length ? country : longest
);

console.log("Longest Country Name:");
console.log(longestName);


// 9. Find the country with the shortest name.
let shortestName = countries.reduce((shortest, country) => country.name.length < shortest.name.length ? country : shortest
);

console.log(" Shortest Country Name:");
console.log(shortestName);


// 10. Find the average population of all countries.
let averagePopulation = countries.reduce((sum, country) => sum + country.population, 0) / countries.length;

console.log("Average Population:");
console.log(averagePopulation);
