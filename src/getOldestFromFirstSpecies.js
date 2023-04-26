const data = require('../data/zoo_data');

const { species } = data;

const getOldestFromFirstSpecies = (id) => {
  const getFirstAnimal = data.employees.find((employee) => id === employee.id)
    .responsibleFor[0];
  const oldest = species.find((specie) => specie.id === getFirstAnimal).residents
    .reduce((acc, animal) => (acc.age > animal.age ? acc : animal));
  return [oldest.name, oldest.sex, oldest.age];
};

module.exports = getOldestFromFirstSpecies;
