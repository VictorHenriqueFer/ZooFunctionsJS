const getOpeningHours = require('../src/getOpeningHours');

const openingHours = {
    Tuesday: { open: 8, close: 6 },
    Wednesday: { open: 8, close: 6 },
    Thursday: { open: 10, close: 8 },
    Friday: { open: 10, close: 8 },
    Saturday: { open: 8, close: 10 },
    Sunday: { open: 8, close: 8 },
    Monday: { open: 0, close: 0 },
}
describe('Testes da função getOpeningHours', () => {
    it('Testa o retorno da função quando chamada', () => {
        expect(getOpeningHours()).toStrictEqual(openingHours);
    });

    it('Testa se está aberto em Monday 09:00AM', () => {
        expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
    });

    it('Testa se está aberto em Tuesday 09:00AM', () => {
        expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
    });

    it('Testa se está aberto em Wednesday 09:00PM', () => {
        expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
    });
});
