const numbers = [3,5,6,7,4,5];
// map function use for creating new array from another array.It traverse previous array itself. within the function we can use our own functionality
const result = numbers.map(function(element) {
    return element*element;
})
console.log(result);

const square = numbers.map(x => x*x);
console.log(square);

// filter  
const bigger = numbers.filter(x => x>3);
console.log(bigger);
// find 
const isThere = numbers.find(x => x>5);
console.log(isThere);