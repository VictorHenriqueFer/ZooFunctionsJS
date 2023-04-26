const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const isManager = (id) => employees.some((manager) => manager.managers.includes(id));
// comparar os valores dentro do array do manager como id passado como parametro

const getRelatedEmployees = (managerId) => {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const relateEmployess = data.employees.filter((employee) =>
    employee.managers.includes(managerId));
  return relateEmployess.map((employee) => `${employee.firstName} ${employee.lastName}`);
};

module.exports = { isManager, getRelatedEmployees };
