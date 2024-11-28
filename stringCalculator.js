function add(numbers) {
    if (numbers === "") return 0;
  
    let delimiter = /[\n,]/;
    if (numbers.startsWith("//")) {
      const delimiterMatch = numbers.match(/^\/\/(.+)\n/);
      delimiter = new RegExp(delimiterMatch[1]);
      numbers = numbers.split("\n").slice(1).join("\n");
    }
  
    const numArray = numbers.split(delimiter).map(Number);
    return numArray.reduce((sum, num) => sum + num, 0);
  }
  
  
  module.exports = { add };  