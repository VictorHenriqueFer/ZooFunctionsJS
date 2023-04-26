const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Retorna a quantidade de elefantes quando o argumento for "count"', () => {
    const result = handlerElephants('count');
    expect(result).toBeDefined();
    expect(typeof result).toBe('number');
  });

  it('Retorna um array com os nomes de todos os elefantes quando o argumento for "names"', () => {
    const result = handlerElephants('names');
    expect(result).toBeDefined();
    expect(Array.isArray(result)).toBe(true);
  });

  it('Retorna a média de idade dos elefantes quando o argumento for "averageAge"', () => {
    const result = handlerElephants('averageAge');
    expect(result).toBeDefined();
    expect(typeof result).toBe('number');
  });

  it('Retorna a localização dos elefantes quando o argumento for "location"', () => {
    const result = handlerElephants('location');
    expect(result).toBeDefined();
    expect(typeof result).toBe('string');
  });

  it('Retorna a popularidade dos elefantes quando o argumento for "popularity"', () => {
    const result = handlerElephants('popularity');
    expect(result).toBeDefined();
    expect(typeof result).toBe('number');
  });

  it('Retorna um array com os dias de disponibilidade para visitação dos elefantes quando o argumento for "availability', () => {
    const result = handlerElephants('availability');
    expect(result).toBeDefined();
    expect(Array.isArray(result)).toBe(true);
  });

  it('Retorna undefined quando o argumento não for uma string válida', () => {
    const result = handlerElephants(undefined);
    expect(result).toBeUndefined();
  });

  it('Retorna uma string de erro quando o argumento não for uma string vazia válida', () => {
    const result = handlerElephants(123);
    expect(result).toBeDefined();
    expect(typeof result).toBe('string');
  });

  it('Retorna null quando o argumento não for uma opção válida', () => {
    const result = handlerElephants('invalidOption');
    expect(result).toBeNull();
  });
});
