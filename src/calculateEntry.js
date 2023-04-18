const data = require('../data/zoo_data');

const countEntrants = (entrants) => entrants.reduce((People, visitor) => {
  const newPeople = { ...People };
  if (visitor.age < 18) {
    newPeople.child += 1;
  }
  if (visitor.age >= 18 && visitor.age < 50) {
    newPeople.adult += 1;
  }
  if (visitor.age >= 50) {
    newPeople.senior += 1;
  }
  return newPeople;
}, { child: 0, adult: 0, senior: 0 });

const calculateEntry = (entrants) => {
  if (!entrants || entrants.length === 0) return 0;
  const { child, adult, senior } = data.prices;
  const count = countEntrants(entrants);
  const result = (count.adult * adult) + (count.child * child) + (count.senior * senior);

  return result;
};

module.exports = { calculateEntry, countEntrants };
