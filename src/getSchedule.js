const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const weekDays = Object.keys(hours);
const CheckAnimal = (scheduleTarget) => species.some(({ name }) => name === scheduleTarget);
const exhibition = (day) => species.filter((specie) => specie.availability.includes(day))
  .map((animal) => animal.name);
const zooRelatory = () => weekDays.reduce((obj, day) => (day !== 'Monday'
  ? { ...obj,
    [day]: {
      officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
      exhibition: exhibition(day),
    },
  } : { ...obj, [day]: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } }), {});

const getSchedule = (scheduleTarget) => {
  if (CheckAnimal(scheduleTarget)) {
    return species.find(({ name }) => name === scheduleTarget).availability;
  }
  const relatory = zooRelatory();
  if (weekDays.includes(scheduleTarget)) return { [scheduleTarget]: relatory[scheduleTarget] };
  return relatory;
};

module.exports = getSchedule;
