let calculator = require('../src/sum');

test('adds 1 + 2 equal 3', () => {
    expect(calculator(1,2)).toBe(3);
});