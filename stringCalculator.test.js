const { add } = require('./stringCalculator');

test('returns the number for a single input', () => {
    expect(add("1")).toBe(1);
  });
  