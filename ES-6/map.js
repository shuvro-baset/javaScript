const numbers = [3,5,6,7,4,5];
/*  map function use for creating new array from another array.
    It traverse previous array itself. within the function we can use our own functionality. 
    that function may be predefined or write here.
*/
const result = numbers.map(function(element) {
    return element*element; // here we write the function not predefined.
})
console.log(result);
// same thing as before above
const square = numbers.map(x => x*x);
console.log(square);

function doubleIt(num) {
    return num *2
}
// do same thing passing the function which was predefined above
const double = numbers.map(doubleIt);
console.log("double: ",double);

// more map
const friend = ['shuvro baset', 'sakib al hasan', 'tamim iqbal', 'mushfiqur rahim']
const fLength = friend.map(f => f.length);
console.log("friends name length: ",fLength);


// filter  
const bigger = numbers.filter(x => x>3);
console.log(bigger);
// find 
const isThere = numbers.find(x => x>5);
console.log(isThere);
// note: find and filter can do same thing but find function can return only the first element