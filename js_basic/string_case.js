var a = 'Shuvro baset wants to Be A good Programmer.'
// convert a string in to lowercase 
console.log(a.toLowerCase())
//for uppercase 
console.log(a.toUpperCase())

// finding position of a string or word or letter ** if the word or letter is not present it will return (-1)
console.log(a.indexOf('a'))

// spliting 
console.log(a.split(" "))


// ----- type conversion ----- //
var x = 10;
var y = 5;
var z = '3';

// convert string to number using "parseFloat/parseInt" ** shortcut technique- use + sign to change string to number(int)
z = parseInt(z);

// number to string conversion -- just use " " empty and + sign
z = " "+ z;
console.log(typeof(z));