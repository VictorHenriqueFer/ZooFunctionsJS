const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (!employeeName) {
    return {};
  }
  return employees.filter((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName)[0];
};
module.exports = getEmployeeByName;
