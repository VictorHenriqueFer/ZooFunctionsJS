const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getEmployeesCoverage = (pessoa) => {
  const getEmployees = employees.map((person) => ({
    id: person.id,
    fullName: `${person.firstName} ${person.lastName}`,
    species: species.filter(({ id }) => person.responsibleFor.includes(id))
      .map((specie) => specie.name),
    locations: species.filter(({ id }) => person.responsibleFor.includes(id))
      .map((specie) => specie.location),
  }));
  if (!pessoa || pessoa === {}) {
    return getEmployees;
  }
  if (!getEmployees.some((person) => person.fullName
    .includes(pessoa.name) || person.id === pessoa.id)) {
    throw new Error('Informações inválidas');
  }
  return getEmployees.find((nome) => nome.fullName.includes(pessoa.name) || nome.id === pessoa.id);
};

module.exports = getEmployeesCoverage;
