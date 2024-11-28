const { add } = require('./stringCalculator');

test('handles newlines as delimiters', () => {
    expect(add("1\n2,3")).toBe(6);
  });
  
  