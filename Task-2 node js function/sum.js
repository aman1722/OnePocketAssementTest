
const sumArray =  (arr) => {
    if (!Array.isArray(arr)) {
      throw new Error('Input is not an array.');
    }
  
    let sum = 0;
    for (const num of arr) {
      if (typeof(num) !== 'number') {
        throw new Error('Array contains non-integer values.');
      }
      sum += num;
    }
  
    return sum;
  }
  
  module.exports = sumArray;
  