const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => data.species.find((animalName) => animalName.name === animal).residents.every((specie) => specie.age >= age);

module.exports = getAnimalsOlderThan;
