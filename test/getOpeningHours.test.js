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
    it('Testa se o dia informado e válido', () => {
        expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow(Error('The day must be valid. Example: Monday'));
    });
    it('Testa se a abreviação é \'AM\' or \'PM\'', () => {
        expect(() => getOpeningHours('Monday', '09:00-A')).toThrow(Error('The abbreviation must be \'AM\' or \'PM\''));
    });
    it('Teste se a hora apresentada são numeros', () => {
        expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow(Error('The hour should represent a number'));
    });
    it('Teste se os minutos apresentados são numeros', () => {
        expect(() => getOpeningHours('Sunday', '09:c0-AN')).toThrow(Error('The minutes should represent a number'));
    });
    it('Teste se a hora está entre 0 e 12', () => {
        expect(() => getOpeningHours('Monday', '13:00-AM')).toThrow(Error('The hour must be between 0 and 12'));
    });
    it('Teste se os minutos está entre 0 e 59', () => {
        expect(() => getOpeningHours('Tuesday', '09:60-AM')).toThrow(Error('The minutes must be between 0 and 59'));
    });
});
