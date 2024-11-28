const { add } = require('./stringCalculator');

test('returns the sum of two numbers', () => {
    expect(add("1,5")).toBe(6);
  });
  