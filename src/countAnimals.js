const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (!animal) {
    const lengAnimal = {};
    data.species.forEach((specie) => { lengAnimal[specie.name] = specie.residents.length; });
    return lengAnimal;
  }
  const countAnimalsResidents = data.species
    .filter((specie) => specie.name.includes(animal.species))
    .reduce((acc, curr) => curr)
    .residents;

  const countResults = countAnimalsResidents
    .filter((foundAnimal) => !animal.sex || foundAnimal.sex === animal.sex).length;

  return countResults;
};
module.exports = countAnimals;
