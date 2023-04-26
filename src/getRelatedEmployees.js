const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const isManager = (id) => employees.some((managerId) => console.log(managerId));
isManager();

const getRelatedEmployees = (managerId) => {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const relateEmployess = data.employees.filter((employee) =>
    employee.managers.includes(managerId));
  return relateEmployess.map((employee) => `${employee.firstName} ${employee.lastName}`);
};

module.exports = { isManager, getRelatedEmployees };
