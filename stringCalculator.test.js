const { add } = require('./stringCalculator');

test('returns the sum of multiple numbers', () => {
    expect(add("1,2,3,4,5")).toBe(15);
  });
  