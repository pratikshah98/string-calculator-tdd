const { add } = require('./stringCalculator');

test('throws an exception for negative numbers', () => {
    expect(() => add("1,-2,-3")).toThrow("negative numbers not allowed -2,-3");
  });
  
  
  